export interface ProvinceResponse {
    id: number;
    strVungSinhThai: string;
    strVungDiaLy: string;
    strVungMien: string;
    vungMien: any;   // Bạn có thể thay thế `any` bằng kiểu dữ liệu cụ thể nếu biết
    vungDiaLy: any;  // Bạn có thể thay thế `any` bằng kiểu dữ liệu cụ thể nếu biết
    maTinh: string;
    tenTinh: string;
    cap: string;
    isActive: boolean;
    vungSinhThai: any;  // Bạn có thể thay thế `any` bằng kiểu dữ liệu cụ thể nếu biết
    checked:boolean;
  }
  