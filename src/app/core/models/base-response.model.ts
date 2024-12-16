export interface BaseResponse {
  type: string;
  title: string;
  status: number;
  message: string;
  errors: Record<string, unknown>;
  traceId: string;
}
