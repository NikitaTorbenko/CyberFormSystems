import type { IPost } from "@/entities/PostCard";
import { ApiClient, EndpointsEnum } from "@/shared/api";

export const fetchPosts = async (): Promise<IPost[]> => {
  const { data } = await ApiClient({
    url: `${EndpointsEnum.POSTS}`,
  });

  return data;
};

// import type { IPost } from "@/entities/PostCard";
// import axios from "axios";

// export const fetchPosts = async (): Promise<IPost[]> => {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   return res.data;
// };
