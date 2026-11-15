# Telescope-Calculator

Mô phỏng thị trường (FOV) của kính thiên văn với thị kính hoặc máy ảnh: nhập thông số kính, chọn vật thể và xem nó trông như thế nào, kích thước thật trong thị trường.

Chạy bằng một HTTP server tĩnh (vd. `python -m http.server`) rồi mở `index.html`.

## Danh sách vật thể (216)

| Nhóm | Vật thể |
|---|---|
| Hệ Mặt Trời (9) | Mặt Trăng, Sao Thuỷ, Sao Kim, Sao Hoả, Sao Mộc, Sao Thổ, Sao Thiên Vương, Sao Hải Vương, Diêm Vương Tinh (hành tinh lùn) |
| Thiên hà (57) | Đám Mây Magellan Lớn (LMC), Đám Mây Magellan Nhỏ (SMC), Thiên hà M32, Thiên hà Tiên Nữ (M31), Thiên hà M110, Thiên hà Tam Giác (M33), Thiên hà NGC 2403, Thiên hà Sculptor (NGC 253), Thiên hà Bode (M81), Thiên hà Xì Gà (M82), Thiên hà Centaurus A (NGC 5128), Thiên hà Chong Chóng Phương Nam (M83), Thiên hà M94, Thiên hà Mắt Đen (M64), Thiên hà Chong Chóng (M101), Thiên hà M106, Thiên hà Cá Voi (NGC 4631), Thiên hà Pháo Hoa (NGC 6946), Thiên hà Hoa Hướng Dương (M63), Thiên hà Mũ Rộng Vành (M104), Thiên hà NGC 891, Thiên hà Xoáy Nước (M51), Thiên hà M96, Thiên hà Bóng Ma (M74), Thiên hà M95, Bộ ba Sư Tử (M65, M66, NGC 3628), Thiên hà M65, Thiên hà M66, Thiên hà NGC 7331, Thiên hà Cây Kim (NGC 4565), Thiên hà M98, Thiên hà Râu (NGC 4038/4039), Thiên hà Ván Lướt Sóng (M108), Thiên hà M77, Thiên hà M88, Thiên hà M59 *, Thiên hà M89, Thiên hà M99, Thiên hà Con Suốt (NGC 5866), Thiên hà M86, Thiên hà M61, Thiên hà M87, Thiên hà M100, Chuỗi Markarian, Thiên hà M49, Thiên hà NGC 1365, Thiên hà M60, Thiên hà M90 *, Thiên hà M84, Thiên hà M85, Thiên hà NGC 1300, Thiên hà M58, Thiên hà M91, Thiên hà M109, Nhóm ngũ thiên hà Stephan, Thiên hà Bánh Xe, Vật thể Hoag |
| Tinh vân (59) | Tinh vân tối Tẩu Thuốc, Phức hợp mây Rho Ophiuchi, Tinh vân tối Bao Than, Tinh vân Xoắn Ốc (NGC 7293), Tàn dư siêu tân tinh Vela, Tinh vân Đầu Phù Thuỷ (IC 2118), Tinh vân California (NGC 1499), Tinh vân Mống Mắt (NGC 7023), Tinh vân Lạp Hộ (M42), Tinh vân M78, Tinh vân Ngọn Lửa (NGC 2024), Tinh vân Quả Tạ (M27), Tinh vân Đầu Ngựa (Barnard 33), Tinh vân Medusa (Abell 21), Tinh vân De Mairan (M43), Tinh vân Bồ Nông (IC 5070), Tinh vân Spirograph (IC 418), Tinh vân Cú Mèo (M97), Tinh vân Chữ Nhật Đỏ, Tinh vân Mạng Che (Veil), Tinh vân Vòi Voi (IC 1396A), Tinh vân Quả Tạ Nhỏ (M76), Tinh vân Nhẫn Phương Nam (NGC 3132), Tinh vân Chiếc Nhẫn (M57), Tinh vân Bắc Mỹ (NGC 7000), Tinh vân Hình Nón & Cây Thông (NGC 2264), Tinh vân Mì Ý (Simeis 147), Tinh vân Mắt Mèo (NGC 6543), Tinh vân Cái Kén (IC 5146), Tinh vân Con Bướm (NGC 6302), Tinh vân Nơ Bướm (NGC 40), Tinh vân Hải Âu (IC 2177), Tinh vân Đầm Phá (M8), Tinh vân Bóng Ma Sao Mộc (NGC 3242), Tinh vân Lưỡi Liềm (NGC 6888), Tinh vân Sứa (IC 443), Tinh vân Chẻ Ba (M20), Tinh vân Hoa Hồng (NGC 2237), Tinh vân Sao Thổ (NGC 7009), Tinh vân Omega (M17), Tinh vân Chân Mèo (NGC 6334), Tinh vân Tôm Hùm (NGC 6357), Tinh vân Quả Cầu Tuyết Xanh (NGC 7662), Tinh vân Đại Bàng (M16), Tinh vân Con Tôm (IC 4628), Tinh vân Đầu Khỉ (NGC 2174), Tinh vân Con Cua (M1), Tinh vân Eskimo (NGC 2392), Tinh vân Gà Chạy (IC 2944), Tinh vân Cua Phương Nam (Hen 2-104), Tinh vân Phù Thuỷ (NGC 7380), Tinh vân Trái Tim (IC 1805), Tinh vân Linh Hồn (IC 1848), Tinh vân Bong Bóng (NGC 7635), Tinh vân Đồng Hồ Cát (MyCn 18), Tinh vân Carina (NGC 3372), Tinh vân Pacman (NGC 281), Tinh vân Mũ Thor (NGC 2359), Tinh vân Nhện (NGC 2070) |
| Cụm sao mở (33) | Cụm sao Hyades, Cụm Mắc Áo (Collinder 399), Cụm sao Thất Nữ (M45), Thất Nữ Phương Nam (IC 2602), Cụm sao Tổ Ong (M44), Cụm sao Ptolemy (M7), Cụm sao M39, Cụm sao M34, Cụm sao M48, Cụm sao Con Bướm (M6), Cụm sao M47, Cụm sao M25, Cụm sao M23, Cụm sao M41, Cụm sao M67, Cụm sao M35 (và NGC 2158), Cụm sao M50, Cụm sao M93, Cụm sao M29, Cụm sao M36, Cụm sao M38, Cụm sao M21, Cụm sao M37, Cụm sao M18, Cụm sao M26, Cụm sao M52, Cụm sao M46, Cụm sao Vịt Trời (M11), Cụm sao Hộp Ngọc (NGC 4755), Cụm sao Đôi Perseus (NGC 869/884), Cụm sao Cú Mèo / E.T. (NGC 457), Cụm sao M103, Đám mây sao Nhân Mã (M24) |
| Cụm sao cầu (32) | Cụm sao cầu M4, Cụm sao cầu M22, Cụm sao cầu NGC 6752 *, Cụm sao cầu M71, Cụm sao cầu M10, Cụm sao cầu 47 Tucanae, Cụm sao cầu M12, Cụm sao cầu Omega Centauri, Cụm sao cầu M55, Cụm sao cầu M28, Cụm sao cầu M107, Cụm sao cầu Hercules (M13), Cụm sao cầu M62, Cụm sao cầu M5, Cụm sao cầu M9, Cụm sao cầu M92, Cụm sao cầu M30, Cụm sao cầu M19, Cụm sao cầu M70, Cụm sao cầu M69, Cụm sao cầu M14, Cụm sao cầu M80, Cụm sao cầu M56, Cụm sao cầu M68, Cụm sao cầu M3, Cụm sao cầu M15, Cụm sao cầu M2, Cụm sao cầu M79, Cụm sao cầu M72, Cụm sao cầu M53, Cụm sao cầu M75, Cụm sao cầu M54 |
| Sao đôi / Hệ sao (26) | Alpha Centauri A & B *, Sirius A & B (Thiên Lang) *, 61 Cygni *, Eta Cassiopeiae *, Porrima (γ Virginis) *, Castor (α Geminorum) *, Mizar & Alcor, Nu Draconis *, Gamma Delphini *, Cor Caroli (α CVn) *, Algieba (γ Leonis) *, Epsilon Lyrae (Sao đôi-đôi), Mesarthim (γ Arietis) *, Izar (ε Boötis) *, Acrux (α Crucis) *, Iota Cancri *, Almach (γ Andromedae), Albireo (β Cygni), Polaris (Sao Bắc Cực) *, Winnecke 4 (M40) *, Antares (α Scorpii) *, Beta Monocerotis (sao ba) *, Rigel (β Orionis) *, Delta Cephei *, Alnitak (ζ Orionis) *, Trapezium (θ¹ Orionis) * |

`*` = chưa có ảnh (ứng dụng hiện "Chưa có ảnh vật thể"). Thêm file PNG cùng tên vào `object/` là xong.

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
