import { CreateProductRequestModel } from "./create-product-request.model";

export interface UpdateProductRequestModel extends CreateProductRequestModel {
    id: string;  
}
  