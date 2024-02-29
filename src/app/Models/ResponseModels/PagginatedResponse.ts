import { PageResponse } from "./Common/PageResponse";

export interface PagginatedServiceResponse<T> extends PageResponse{

    data:T[]
}