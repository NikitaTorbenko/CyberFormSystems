export interface IClient<B = unknown> {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params?: Record<string, string | number>;
  json?: B;
  headers?: Record<string, string>;
  responseType?: "json" | "text" | "blob" | "arrayBuffer";
}
