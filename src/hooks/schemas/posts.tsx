import { z } from "zod";

// ini dipake buat validasi form ketika mau hit ke api
export const BasePostsSchema = z.object({
  title: z.string().min(1, { message: "Judul harus diisi" }),
  description: z.string().min(1, { message: "Deskripsi harus diisi" }),
});

// ini dipake buat validasi data yang diambil dari api
export const PostsSchema = BasePostsSchema.and(
  z.object({
    id: z.number(),
    created_at: z.string(),
    created_by: z.number(),
    updated_at: z.string(),
    updated_by: z.number(),
  })
);

export type BasePosts = z.infer<typeof BasePostsSchema>;
export type Posts = z.infer<typeof PostsSchema>;
