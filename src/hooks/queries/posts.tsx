import { BasePosts, Posts } from "@/hooks/schemas/posts";
import { BaseResponse } from "@/hooks/schemas/shared";
import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import api from "../api";
import apiClient from "../apiClient";

type PostsResponse = AxiosResponse<BaseResponse<Posts>>;

const useInvalidateTable = () => {
  const queryClient = useQueryClient();
  return () =>
    queryClient.invalidateQueries({
      queryKey: ["Posts-table"],
    });
};

export const usePostsList = (
  options?: UseQueryOptions<AxiosResponse<BaseResponse<Posts[]>>>,
) => {
  return useQuery({
    queryKey: ["Posts-list"],
    queryFn: () => api.get(`/Posts`),
    ...options,
  });
};

export const usePostsDetail = ({ id }: { id?: string | number }) => {
  return useQuery({
    queryKey: ["get-Posts"],
    queryFn: (data) => api.post<PostsResponse>(`/Posts/${id}`, data),
    enabled: !!id,
  });
};

export const useCreatePosts = ({
  onSuccess,
  ...options
}: Omit<
  UseMutationOptions<PostsResponse, unknown, BasePosts>,
  "mutationFn"
>) => {
  const invalidate = useInvalidateTable();
  return useMutation({
    mutationKey: ["create-Posts"],
    mutationFn: (data) => apiClient.post(`/Posts`, data),
    onSuccess(data, variables, context) {
      invalidate();
      onSuccess?.(data, variables, context);
    },
    ...options,
  });
};

export const useUpdatePosts = ({
  onSuccess,
  ...options
}: Omit<
  UseMutationOptions<PostsResponse, unknown, BasePosts & { id: number }>,
  "mutationFn"
>) => {
  const invalidate = useInvalidateTable();
  return useMutation({
    mutationKey: ["create-Posts"],
    mutationFn: (data) => apiClient.put(`/Posts/${data.id}`, data),
    onSuccess(data, variables, context) {
      invalidate();
      onSuccess?.(data, variables, context);
    },
    ...options,
  });
};

export const useDeletePosts = ({
  onSuccess,
  ...options
}: Omit<
  UseMutationOptions<PostsResponse, unknown, { id: string }>,
  "mutationFn"
>) => {
  const invalidate = useInvalidateTable();
  return useMutation({
    mutationKey: ["delete-Posts"],
    mutationFn: (data) => apiClient.delete(`/Posts/${data.id}`),
    onSuccess(data, variables, context) {
      invalidate();
      onSuccess?.(data, variables, context);
    },
    ...options,
  });
};
