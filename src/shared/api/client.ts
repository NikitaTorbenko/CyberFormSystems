import { BASE_API, type IClient } from "./model";

export const ApiClient = async <R, B = unknown>({
  url,
  method = "GET",
  params,
  json,
  headers,
}: IClient<B>): Promise<{ data: R; status: number; total?: string }> => {
  try {
    const response = await BASE_API(url, {
      method,
      json,
      searchParams: params,
      headers,
    });

    const result: R = await response.json();
    return {
      data: result,
      status: response.status,
      total: response.headers.get("x-total-count") || "0",
    };
  } catch (error) {
    console.error("❌ Ошибка API:", error);
    return { data: "isError" as unknown as R, status: 500, total: "0" };
  }
};
