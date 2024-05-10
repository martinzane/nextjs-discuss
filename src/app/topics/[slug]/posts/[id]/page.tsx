import Link from "next/link";
import paths from "@/paths";
import PostShow from "@/components/posts/show";
import CommentCreateForm from "@/components/comments/create-form";
import CommentList from "@/components/comments/list";
import { fetchCommentsByPostId } from "@/db/queries/comments";
import { Suspense } from "react";
import PostShowSkeleton from "@/components/comments/show-skeleton";

interface PostShowPageProps {
  params: {
    slug: string;
    id: string;
  };
}

export default async function PostPage({ params }: PostShowPageProps) {
  const { slug, id } = params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topic(slug)}>
        {"< "}Back to {slug}
      </Link>
      <Suspense fallback={<PostShowSkeleton />}>
        <PostShow id={id} />
      </Suspense>
      <CommentCreateForm postId={id} />
      <CommentList postId={id} />
    </div>
  );
}
