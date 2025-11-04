import { PaginatedData } from "@/types/general";
import { BasicPost } from "@/types/posts";
import { HttpClient } from "./http_client";

const client = new HttpClient({ baseUrl: "/blog/posts" });

export async function getPosts() {
  return client.get<PaginatedData<BasicPost>>("/");
}
