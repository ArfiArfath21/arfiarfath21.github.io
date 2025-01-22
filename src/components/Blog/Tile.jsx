import Link from "next/link";
import styles from "./Tile.css";
import { blog_slug } from "@/app/blog/page";

export function BlogTile({ title, destination, type }) {
  return (
    <>
      <div className={`${!title && "bg-black"} h-48 w-72 rounded-md mt-6`}>
        {title && (
          <img
            src={`/assets/blog/${blog_slug(title)}/tile.jpg`}
            alt={title}
            className="h-48 w-72 rounded-md"
          />
        )}
      </div>
      {/* TODO: add class to make see all vertically aligned */}
      <div className="mt-4">
        <p>{title}</p>
        <Link href={destination} className="blog-link">
          Go to {type} →
        </Link>
      </div>
    </>
  );
}


export function BigTile({ title, destination, type }) {
  return (
    <>
      <div className={`${!title && "bg-black"} h-96 w-144 rounded-md mt-6`}>
        {title && (
          <img
            src={`/assets/blog/${blog_slug(title)}/tile.jpg`}
            alt={title}
            className="h-96 w-144 rounded-md"
          />
        )}
      </div>
      {/* TODO: add class to make see all vertically aligned */}
      <div className="mt-4">
        <p>{title}</p>
        <Link href={destination} className="blog-link">
          Go to {type} →
        </Link>
      </div>
    </>
  );
}
