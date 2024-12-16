import {BaseResponse} from "./base-response.model";

export interface ResponseWithDataModel<T> extends BaseResponse {
  data: T;
}
