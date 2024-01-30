import { usePostsList } from "@/hooks/queries/posts";
import React from "react";

export default function Post() {
  const { data: dataPosts } = usePostsList();

  return <div>index</div>;
}
