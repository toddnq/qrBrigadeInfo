# LZD - Single-page QR Info: KHU HUẤN LUYỆN TỔNG HỢP

## Mục đích
Trang này là một single-page, dùng làm nội dung khi quét QR cho "KHU HUẤN LUYỆN TỔNG HỢP" — phù hợp cho phòng truyền thống, nhà ăn, khu huấn luyện, trạm xá...

## Thư mục
- `index.html` — file chính (có comment từng phần để dễ chỉnh)
- `styles.css` — kiểu dáng
- `script.js` — tương tác nhẹ: "Quay lại", "Tải PDF", ẩn/hiện section
- `assets/` — chứa `banner.jpg`, các icon SVG
- `README.md` — file này

## Cách chỉnh nội dung
Mở `index.html` và tìm các phần đã comment:
- `#khu-name` — đổi tên khu vực.
- Phần "Giới thiệu" (section id="gioi-thieu") — sửa đoạn mô tả 1–2 câu.
- Phần "Chức năng – Nhiệm vụ" (id="nhiem-vu") — sửa list `<li>`.
- Phần "Tổ chức – Biên chế" (id="bien-che") — sửa tên/ vị trí.
- Phần "Nội quy" (id="noi-quy") — sửa 5 điều nội quy.
- Phần "Liên hệ" (id="lien-he") — sửa số trực ban, cán bộ quản lý, số báo sự cố.

**Lưu ý:** Giữ cấu trúc HTML nếu bạn muốn giữ giao diện responsive và nút PDF hoạt động.

## Tải PDF / In
Nhấn nút **Tải PDF** — trang sẽ mở hộp thoại in của trình duyệt. Chọn "Save as PDF" / "Lưu thành PDF".

## Triển khai lên GitHub Pages
1. Tạo repository mới trên GitHub (private hoặc public).
2. Upload toàn bộ folder (index.html, styles.css, script.js, assets/, README.md).
3. Vào Settings → Pages → Source: `main` branch (hoặc `gh-pages`), root `/`.
4. Lưu và chờ vài phút — trang sẽ được publish tại `https://<username>.github.io/<repo>/`

## Tạo QR cho link
Bạn có thể tạo QR từ URL trang GitHub Pages bằng các dịch vụ QR miễn phí (ví dụ `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=<URL>`)
Hoặc dùng một công cụ offline để in QR lên poster.

## Tên file ZIP
`lzd-lzd_khu_KHU_HUAN_LUYEN_TONG_HOP.zip` (đã bao gồm trong thư mục gốc).

---
Nếu bạn muốn tôi thay đổi văn bản, màu sắc, thêm logo thật, hoặc tạo phiên bản cho một "KHU" khác, nói tên khu và tôi sẽ cập nhật ngay.