# Backend Project

## Mô tả
Đây là một dự án backend được xây dựng bằng Node.js và Express.js, cung cấp các API cho quản lý cảm biến, thiết bị, khu vực và điều khiển.

## Cài đặt
1. Đảm bảo bạn đã cài đặt Node.js (phiên bản 14 trở lên).
2. Clone repository này.
3. Chạy lệnh `npm install` để cài đặt các dependencies.

## Sử dụng
1. Khởi động server bằng lệnh `npm start`.
2. Server sẽ chạy tại `http://localhost:5000`.

## API Endpoints
- `/api/sensors`: Quản lý cảm biến
- `/api/controls`: Quản lý điều khiển
- `/api/zones`: Quản lý khu vực
- `/api/devices`: Quản lý thiết bị

## Dependencies
- express: Framework web
- mysql2: Kết nối MySQL
- oracledb: Kết nối Oracle Database
- axios: HTTP client

## Scripts
- `npm start`: Khởi động server

## Cấu trúc thư mục
- `src/controllers/`: Các controller xử lý logic
- `src/models/`: Các model dữ liệu
- `src/routes/`: Định nghĩa routes
- `src/services/`: Các service xử lý nghiệp vụ
- `src/middlewares/`: Middleware
- `src/utils/`: Các tiện ích
- `src/validations/`: Validation
- `src/config/`: Cấu hình database

## Lưu ý
- Đảm bảo cấu hình database trong file `src/config/db.js` và `src/config/dbConfig.js`.
- Sử dụng Postman hoặc công cụ tương tự để test API.