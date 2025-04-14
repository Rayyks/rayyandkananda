import { buttonVariants } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

interface PostItemProps {
  slug: string;
  title: string;
  tags?: string[];
  cover?: string;
  description?: string;
  date: string;
}

export default function PostItem({
  slug,
  title,
  description,
  tags = [],
  cover = "",
  date,
}: PostItemProps) {
  return (
    <article className="my-8 rounded-lg border p-4">
      <div>
        <Link href={slug}>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </Link>
      </div>
      {description && <p className="text-muted-foreground">{description}</p>}
      {tags && (
        <ul className="flex gap-2 mt-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="text-sm text-white dark:text-white dark:bg-muted bg-black  px-2 py-1 rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
      {cover && (
        <Link href={slug}>
          <div className="mt-4">
            <img
              src={cover}
              alt={title}
              className="w-full max-h-[300px] object-cover rounded-lg"
            />
          </div>
        </Link>
      )}
      <div className="flex justify-between">
        <dl className="flex bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 mt-4">
          <dt>Published On </dt>
          <dd>
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          className={buttonVariants({
            variant: "link",
            className: "flex gap-1 items-center",
          })}
          href={slug}
        >
          Read More
          <ArrowRightIcon size={16} />
        </Link>
      </div>
    </article>
  );
}
