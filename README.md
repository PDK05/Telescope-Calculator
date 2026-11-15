# Telescope-Calculator

Mô phỏng thị trường (FOV) của kính thiên văn với thị kính hoặc máy ảnh: nhập thông số kính, chọn vật thể và xem nó trông như thế nào, kích thước thật trong thị trường.

Chạy bằng một HTTP server tĩnh (vd. `python -m http.server`) rồi mở `index.html`.

## Danh sách vật thể (44)

| Nhóm | Vật thể |
|---|---|
| Hệ Mặt Trời | Mặt Trăng, Sao Thuỷ, Sao Kim, Sao Hoả, Sao Mộc, Sao Thổ, Sao Thiên Vương, Sao Hải Vương |
| Thiên hà | M31, M33, M81, M82, M51, M101, M104, Centaurus A, Đám Mây Magellan Lớn & Nhỏ |
| Tinh vân | M42, Đầu Ngựa, M1, M8, M20, M16, Hoa Hồng, Carina, Nhện (Tarantula), Mạng Che (Veil), M57, M27, Xoắn Ốc (Helix) |
| Cụm sao | M45, M44, Cụm sao Đôi Perseus, M11, Hộp Ngọc, M13, M22, Omega Centauri, 47 Tucanae |
| Sao đôi / Hệ sao | Albireo, Mizar & Alcor, Epsilon Lyrae, Almach |

## Thêm vật thể

Thêm ảnh `.png` vào `object/` và một dòng vào `object/objects.json`:

```json
{"id": "crab_nebula", "name": "Tinh vân Con Cua (M1)", "category": "Tinh vân",
 "file": "crab_nebula.png", "distanceAU": 411066000, "angularSizeArcsec": 420}
```

- `angularSizeArcsec`: kích thước góc (giây cung) mà phần ảnh không phải nền đen được co giãn theo.
- `category` (tuỳ chọn): tên nhóm trong danh sách chọn.
- `imageWidthArcsec` (tuỳ chọn): bề ngang **toàn bộ** ảnh tính bằng giây cung. Khi có trường này, ảnh được vẽ nguyên khung, không tự cắt viền đen (dùng cho sao đôi).

Kích thước của ảnh tinh vân/thiên hà/cụm sao chụp trường rộng là gần đúng.

Nguồn và giấy phép ảnh: xem [CREDITS.md](CREDITS.md).
