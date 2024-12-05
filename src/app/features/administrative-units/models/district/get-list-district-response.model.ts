import { DistrictResponse } from "./district-response.model";

export interface getListDistrictResponse{
  totalCount: number;
  items: DistrictResponse[];
}