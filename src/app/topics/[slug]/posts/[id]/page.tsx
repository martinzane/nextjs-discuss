import Link from "next/link";
import paths from "@/paths";
import PostShow from "@/components/posts/show";

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
    </div>
  );
}
