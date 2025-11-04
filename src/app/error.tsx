"use client";

export default function ErrorPage({ error }: { error: Error }) {
  console.log(error);
  return <div className="h-screen flex items-center">{error.message}</div>;
}
