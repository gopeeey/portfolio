"use client";

import Button from "@/components/ui/Button";
import { BasicPost } from "@/types/posts";
import BasicPostCard from "@/views/blog/BasicPostCard";
import { Typography } from "@mui/material";
import { IconArrowRight } from "@tabler/icons-react";
import gsap from "gsap";
import { useEffect } from "react";

type Props = {
  posts: BasicPost[];
};

const postContainerId = "posts_container";

export default function Posts({ posts }: Props) {
  useEffect(() => {
    const container = document.getElementById(postContainerId);
    if (!container) return;

    const offset = 1 - document.body.offsetWidth / container.offsetWidth;

    const ctx = gsap.context(() => {
      gsap.to(`#${postContainerId}`, {
        x: `-${offset * 100}%`,
        scrollTrigger: {
          trigger: `#${postContainerId}`,
          start: "top 20%",
          end: () =>
            "+=" + document.getElementById(postContainerId)?.offsetWidth,
          scrub: 1,
          pin: true,
        },
      });
    });

    return () => ctx.revert();
  });
  return (
    <div className="mt-122 sm:mt-132 min-h-screen overflow-x-hidden relative z-21 mb-60 w-screen -mx-xs sm:-mx-sm lg:-mx-lg  2xl:-mx-2xl">
      <div
        className="flex gap-8 w-fit relative px-xs sm:px-sm lg:px-lg 2xl:px-2xl"
        id={postContainerId}
      >
        {posts.map((post) => (
          <BasicPostCard key={post.id} post={post} />
        ))}

        <div className="flex flex-col items-center justify-center">
          <Button className="!p-5 rounded-full!" glassClassName="rounded-full">
            <IconArrowRight />
          </Button>
          <Typography className="shrink-0 whitespace-nowrap text-sm">
            See more
          </Typography>
        </div>
      </div>
    </div>
  );
}
