"use client";

import LiquidGlassContainer from "@/components/ui/liquid-glass-container/LiquidGlassContainer";
import { BasicPost } from "@/types/posts";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";

type Props = {
  post: BasicPost;
};

export default function BasicPostCard({ post }: Props) {
  return (
    <LiquidGlassContainer className="w-80 border border-gray-300 shrink-0 h-full flex flex-col gap-2 z-21 rounded-3xl overflow-hidden">
      <Image
        src="https://flatironschool.com/wp-content/uploads/2023/08/Resized-blog-thumbnail-26-717x461.jpg"
        alt="Placeholder"
        className="w-full h-auto object-contain z-[31]"
        width={717}
        height={461}
      />
      <div className="flex flex-col gap-1 px-4 pt-1 pb-4">
        <Typography className="text-md font-semibold text-black!">
          {post.title}
        </Typography>
        <Typography variant="body2">
          {dayjs(post.updated_at).format("MMM D, YYYY")}
        </Typography>
      </div>
    </LiquidGlassContainer>
  );
}
