// import { ApiClient, FILE_API, EndpointsEnum } from "./index";
import { IPost } from "@/pages/Home/types";
import { ApiClient } from "./index";

interface CreatePost {
  title: string;
  body: string;
}

export const createNewProduct = async (json: CreatePost) => {
  const res = await ApiClient<IPost>(
    {
      url: "posts",
      method: "POST",
      json,
    }
    //  FILE_API // добавляем второй параметр с другим апи
  );

  return res;
};

export const updatePost = async (postId: number, updatedPost: IPost) => {
  const result = await ApiClient<IPost, IPost>({
    url: `posts/${postId}`,
    method: "PUT",
    json: updatedPost,
  });

  return result.data;
};

// export const createNewProductAxios = async (data: any) => {
//   const { data } = await ApiClient<ResponseType>({
//     url: `${EndpointsEnum.PRODUCTS}`,
//     method: "POST",
//     data: data,
//   });

//   return { data };
// };

// если надо сделать запрос на другой урл (не базовый)
// export const createNewProduct2 = async (data: any) => {
//   const result = await ApiClient(
//     {
//       url: `${EndpointsEnum.PRODUCTS}`,
//       method: "POST",
//       data: data,
//     },
//     FILE_API // добавляем второй параметр с другим апи
//   );

//   return result;
// };
