import {BaseResponse} from "./base-response.model";

export interface ResponseWithListDataModel<T> extends BaseResponse {
  listData: {
    data: T[],
    totalPage: number;
  };
}
