import { BasicPost } from "@/types/posts";
import Parser from "rss-parser";

export function rssFeedToPosts(
  feed: Parser.Output<{
    "content:encoded": string;
  }>
): BasicPost[] {
  const posts: BasicPost[] = feed.items.map((item) => ({
    id: item.guid!,
    title: item.title!,
    url: item.link!,
    imageUrl: getImageUrlFromContent(item["content:encoded"]!),
    publishedAt: item.pubDate!,
  }));

  return posts;
}

function getImageUrlFromContent(content: string) {
  const imgRegex = /<img[^>]*src="([^">]*)"[^>]*>/;
  const match = content.match(imgRegex);

  const val = match ? match[1] : "";

  console.log("The image", val);
  return val;
}
