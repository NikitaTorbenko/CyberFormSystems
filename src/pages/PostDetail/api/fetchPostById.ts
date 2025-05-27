import type { IPost } from "@/entities/PostCard";
import { ApiClient, EndpointsEnum } from "@/shared/api";

export const fetchPostById = async (id: number): Promise<IPost> => {
  const { data } = await ApiClient({
    url: `${EndpointsEnum.POSTS}/${id}`,
  });

  return data;
};
