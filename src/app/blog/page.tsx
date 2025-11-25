// src/app/blog/page.tsx
import Link from "next/link";
import { createClient } from "@/prismicio";

type BlogPost = {
  uid: string | null;
  data: {
    title?: any;               // StructuredText
    short_description?: any;   // StructuredText
    published_date?: string | null;
  };
};

export default async function BlogPage() {
  const client = createClient();

  const posts = (await client.getAllByType("blog_post", {
    orderings: { field: "my.blog_post.published_date", direction: "desc" },
  })) as BlogPost[];

  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <section style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.5rem" }}>
          Blog
        </h1>
        <p className="muted">
          Updates and stories from building Astro Portal and exploring astrology in practice.
        </p>
      </section>

      <section className="card">
        {posts.length === 0 ? (
          <p className="muted">
            No blog posts yet. Add some <code>blog_post</code> documents in Prismic.
          </p>
        ) : (
          <ul className="list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {posts.map((post, index) => {
              const uid = post.uid && post.uid.trim().length > 0
                ? post.uid
                : `post-${index}`;

              const rawTitle = post.data.title;
              const title =
                Array.isArray(rawTitle) && rawTitle.length > 0
                  ? rawTitle[0].text
                  : typeof rawTitle === "string"
                  ? rawTitle
                  : "Untitled post";

              const shortDescRaw = post.data.short_description;
              const shortDesc =
                Array.isArray(shortDescRaw) && shortDescRaw.length > 0
                  ? shortDescRaw[0].text
                  : typeof shortDescRaw === "string"
                  ? shortDescRaw
                  : "";

              const date =
                post.data.published_date &&
                new Date(post.data.published_date).toLocaleDateString();

              return (
                <li
                  key={uid}
                  style={{
                    padding: "0.75rem 0",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  {post.uid ? (
                    <Link
                      href={`/blog/${post.uid}`}
                      className="link"
                      style={{ fontWeight: 600, display: "block" }}
                    >
                      {title}
                    </Link>
                  ) : (
                    <span style={{ fontWeight: 600, display: "block" }}>{title}</span>
                  )}

                  {date && (
                    <p
                      className="helper"
                      style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}
                    >
                      {date}
                    </p>
                  )}

                  <p className="muted" style={{ marginTop: "0.25rem" }}>
                    {shortDesc || "Read this post."}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
