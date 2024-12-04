export interface GetAllProvinceResponse {
  value: string;
  displayText: string;
  fts: any;  // Bạn có thể thay `any` bằng kiểu dữ liệu cụ thể nếu biết
  isActive: boolean;
  data: {
    vungSinhThai: any;  // Bạn có thể thay `any` bằng kiểu dữ liệu cụ thể nếu biết
    vungMien: any;  // Bạn có thể thay `any` bằng kiểu dữ liệu cụ thể nếu biết
    vungDiaLy: any;  // Bạn có thể thay `any` bằng kiểu dữ liệu cụ thể nếu biết
  };
}
