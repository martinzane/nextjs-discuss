import Link from "next/link";
import paths from "@/paths";
import PostShow from "@/components/posts/show";
import CommentCreateForm from "@/components/comments/create-form";
import CommentList from "@/components/comments/list";
import { fetchCommentsByPostId } from "@/db/queries/comments";

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
      <PostShow id={id} />
      <CommentCreateForm postId={id} />
      <CommentList fetchData={() => fetchCommentsByPostId(id)} />
    </div>
  );
}
