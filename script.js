const OBJECT_DIR = './object/';
const OBJECT_LIST_URL = `${OBJECT_DIR}objects.json`;

let objectsData = [];
let loadedImages = {};

const canvas = document.getElementById('fov-canvas');
const ctx = canvas.getContext('2d');

const el = {
  selectObject: document.getElementById('select-object'),
  dispDistance: document.getElementById('disp-distance'),
  dispMag: document.getElementById('disp-mag'),
  statsBar: document.getElementById('stats-bar'),

  aperture: document.getElementById('scope-aperture'),
  fl: document.getElementById('scope-fl'),
  barrel: document.getElementById('scope-barrel'),

  chkEyepiece: document.getElementById('chk-eyepiece'),
  epFields: document.getElementById('eyepiece-fields'),
  epFl: document.getElementById('ep-fl'),
  epAfov: document.getElementById('ep-afov'),
  epBarlow: document.getElementById('ep-barlow'),

  chkCamera: document.getElementById('chk-camera'),
  camFields: document.getElementById('camera-fields'),
  camPixel: document.getElementById('cam-pixel'),
  camResW: document.getElementById('cam-res-w'),
  camResH: document.getElementById('cam-res-h'),
  camSensorW: document.getElementById('cam-sensor-w'),
  camSensorH: document.getElementById('cam-sensor-h'),
  camBin: document.getElementById('cam-bin')
};

async function initObjects() {
  try {
    const res = await fetch(OBJECT_LIST_URL);
    if (!res.ok) throw new Error('Không đọc được objects.json');
    objectsData = await res.json();

    el.selectObject.innerHTML = '';
    objectsData.forEach((obj, index) => {
      const opt = document.createElement('option');
      opt.value = index;
      opt.textContent = obj.name;
      el.selectObject.appendChild(opt);
    });

    if (objectsData.length > 0) {
      await loadObjectImage(objectsData[0]);
    }
    update();
  } catch (err) {
    console.error(err);
    el.statsBar.textContent = 'Lỗi nạp objects.json.';
  }
}

function loadObjectImage(obj) {
  return new Promise((resolve) => {
    if (loadedImages[obj.id]) {
      resolve(loadedImages[obj.id]);
      return;
    }
    const img = new Image();
    img.src = `${OBJECT_DIR}${obj.file}`;
    img.onload = () => {
      loadedImages[obj.id] = {
        img,
        width: img.naturalWidth,
        height: img.naturalHeight,
        loaded: true
      };
      resolve(loadedImages[obj.id]);
    };
    img.onerror = () => {
      loadedImages[obj.id] = { loaded: false };
      resolve(loadedImages[obj.id]);
    };
  });
}

async function update() {
  const objIdx = parseInt(el.selectObject.value, 10) || 0;
  const currentObj = objectsData[objIdx];
  if (!currentObj) return;

  const imgAsset = await loadObjectImage(currentObj);

  const D = Math.max(1, parseFloat(el.aperture.value) || 150);
  const F = Math.max(10, parseFloat(el.fl.value) || 750);
  const fRatio = F / D;

  const useEp = el.chkEyepiece.checked;
  const useCam = el.chkCamera.checked;

  el.epFields.classList.toggle('disabled', !useEp);
  el.camFields.classList.toggle('disabled', !useCam);

  const pixelUm = Math.max(0.1, parseFloat(el.camPixel.value) || 3.76);
  const resW = Math.max(1, parseInt(el.camResW.value, 10) || 3008);
  const resH = Math.max(1, parseInt(el.camResH.value, 10) || 3008);
  const bin = parseInt(el.camBin.value, 10) || 1;

  const sensorW = (pixelUm * resW) / 1000;
  const sensorH = (pixelUm * resH) / 1000;
  el.camSensorW.value = sensorW.toFixed(2);
  el.camSensorH.value = sensorH.toFixed(2);

  let mag = 0;
  let tfovArcsec = 0;
  let exitPupil = 0;

  const maxFieldStop = el.barrel.value === '2' ? 46 : 27;
  const maxBarrelTfovDeg = (maxFieldStop / F) * 57.2958;

  if (useEp) {
    const epFl = Math.max(1, parseFloat(el.epFl.value) || 25);
    const afov = Math.max(10, parseFloat(el.epAfov.value) || 52);
    const barlow = parseFloat(el.epBarlow.value) || 1;

    mag = (F * barlow) / epFl;
    const rawTfovDeg = afov / mag;
    const effectiveTfovDeg = Math.min(rawTfovDeg, maxBarrelTfovDeg);
    tfovArcsec = effectiveTfovDeg * 3600;
    exitPupil = D / mag;
  } else if (useCam) {
    const camFovW_deg = (sensorW / F) * 57.2958;
    const camFovH_deg = (sensorH / F) * 57.2958;
    const diagDeg = Math.hypot(camFovW_deg, camFovH_deg);
    tfovArcsec = diagDeg * 1.25 * 3600;
  } else {
    tfovArcsec = 3600;
  }

  el.dispDistance.textContent = currentObj.distanceAU >= 1000
    ? `${(currentObj.distanceAU / 63241.077).toFixed(1)} ly`
    : `${currentObj.distanceAU} AU`;
  el.dispMag.textContent = useEp ? `${mag.toFixed(1)}×` : 'Prime Focus';

  const W = canvas.width;
  const H = canvas.height;
  const cx = W / 2;
  const cy = H / 2;
  const radius = (Math.min(W, H) / 2) - 10;

  ctx.clearRect(0, 0, W, H);

  // Nền bên trong FOV
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#050505';
  ctx.fill();
  ctx.clip();

  const fovDiameterPx = radius * 2;
  const pxPerArcsec = fovDiameterPx / tfovArcsec;
  const objDiameterPx = currentObj.angularSizeArcsec * pxPerArcsec;

  if (imgAsset.loaded) {
    // Chỉ vẽ ảnh thực khi đã tìm thấy file trong object/
    const aspect = imgAsset.width / imgAsset.height;
    let drawW, drawH;
    if (aspect >= 1) {
      drawW = objDiameterPx;
      drawH = objDiameterPx / aspect;
    } else {
      drawH = objDiameterPx;
      drawW = objDiameterPx * aspect;
    }

    ctx.drawImage(imgAsset.img, cx - drawW / 2, cy - drawH / 2, drawW, drawH);
  } else {
    // Thông báo khi chưa có ảnh vật thể thực tế
    ctx.fillStyle = '#ff6b6b';
    ctx.font = '14px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Chưa có ảnh vật thể', cx, cy);
  }

  if (useCam) {
    const camFovW_arcsec = (sensorW / F) * 206265;
    const camFovH_arcsec = (sensorH / F) * 206265;
    const rectW = camFovW_arcsec * pxPerArcsec;
    const rectH = camFovH_arcsec * pxPerArcsec;

    ctx.strokeStyle = '#ff4d4d';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.strokeRect(cx - rectW / 2, cy - rectH / 2, rectW, rectH);
    ctx.setLineDash([]);
  }

  ctx.restore();

  // Viền ngoài FOV
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.strokeStyle = '#ddd';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  const stats = [
    `Khẩu độ: f/${fRatio.toFixed(1)}`,
    `Độ phân giải (Dawes): ${(116 / D).toFixed(2)}"`,
    `TFOV: ${(tfovArcsec / 60).toFixed(1)}'`
  ];
  if (useEp) {
    stats.push(`Đồng tử thoát: ${exitPupil.toFixed(2)} mm`);
  }
  if (useCam) {
    const imageScale = ((pixelUm * bin) / F) * 206.265;
    stats.push(`Tỷ lệ ảnh: ${imageScale.toFixed(2)}"/px`);
  }
  el.statsBar.textContent = stats.join('  |  ');
}

document.querySelectorAll('input, select').forEach(node => {
  node.addEventListener('input', update);
  node.addEventListener('change', update);
});

initObjects();
