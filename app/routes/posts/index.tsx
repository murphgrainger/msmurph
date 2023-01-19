import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import oliveOyl from '../../styles/oliveoyl.png';

import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <main className="relative min-h-screen flex items-center justify-center px-8 py-6">
      <h1>The posts will go here!</h1>
      <img src={oliveOyl} className="olive-oyl"></img>
    </main>
  );
}