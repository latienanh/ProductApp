export interface DistrictData {
  MaTinh: string;
}

export interface GetAllDistrictResponse {
  value: string;
  displayText: string;
  fts: any; // Bạn có thể thay `any` bằng kiểu dữ liệu cụ thể nếu biết
  isActive: boolean;
  data: DistrictData;
}
