import React from "react";
import { usePostsDetail } from "@/hooks/queries/posts";
import { useRouter } from "next/router";

export default function PostDetail() {
  const router = useRouter();

  const { data: dataPostsDetail } = usePostsDetail({
    id: router.query.slug as string,
  });

  return <div>index</div>;
}
