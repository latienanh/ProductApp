import { ProvinceResponse } from "./province-response.model";

export interface GetListProvinceResponse {
  totalCount: number;
  items: ProvinceResponse[];
}