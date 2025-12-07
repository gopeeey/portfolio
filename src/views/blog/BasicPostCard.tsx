"use client";

import LiquidGlassContainer from "@/components/ui/liquid-glass-container/LiquidGlassContainer";
import { BasicPost } from "@/types/posts";
import { Typography } from "@mui/material";
import classNames from "classnames";
import dayjs from "dayjs";

type Props = {
  post: BasicPost;
};

export default function BasicPostCard({ post }: Props) {
  return (
    <a href={post.url} target="_blank">
      <LiquidGlassContainer className="w-80 border border-gray-300 shrink-0 h-full flex flex-col gap-2 z-21 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-500">
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src={post.imageUrl}
          alt={post.title}
          className={classNames(
            "w-full h-auto object-cover z-[31] aspect-video",
            {
              "opacity-0": !post.imageUrl,
            }
          )}
        />
        {/* eslint-enable @next/next/no-img-element */}

        <div className="flex flex-col gap-1 px-4 pt-1 pb-4">
          <Typography className="text-md font-semibold text-black!">
            {post.title}
          </Typography>
          <Typography variant="body2">
            {dayjs(post.publishedAt).format("MMM D, YYYY")}
          </Typography>
        </div>
      </LiquidGlassContainer>
    </a>
  );
}
