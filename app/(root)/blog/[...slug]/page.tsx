import { posts } from "#site/content";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { MDXContent } from "@/components/mdx-components";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: BlogPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  BlogPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = await getPostFromParams({ slug: [slug] });

  if (!post || !post.published) {
    notFound();
  }

  return (
    <MaxWidthWrapper className="py-10 md:py-20">
      <article>
        <Link
          href="/blog"
          className="text-popover hover:text-white flex items-center gap-1 rounded-md px-2 py-1 text-lg transition-colors duration-200 mb-5 bg-black hover:bg-slate-700 w-fit dark:bg-slate-100 dark:text-black dark:hover:bg-slate-700 dark:hover:text-slate-100"
        >
          &larr; Back to all posts
        </Link>
        <h2 className="text-4xl font-bold">{post.title}</h2>
        {post.description && (
          <p className="text-muted-foreground mt-1">{post.description}</p>
        )}
        <hr className="my-4" />
        <MDXContent code={post.body} />
      </article>
    </MaxWidthWrapper>
  );
}
