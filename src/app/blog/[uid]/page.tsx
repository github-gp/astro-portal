import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";

export default async function BlogPostPage({ params }: { params: { uid: string } }) {
  const client = createClient();

  // Do not throw, just return null if not found
  const doc = await client
    .getByUID("blog_post", params.uid)
    .catch(() => null as any);

  if (!doc) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Post not found</h1>
        <p>UID from URL: {params.uid}</p>
      </div>
    );
  }

  const rawTitle = doc.data.title;
  const title =
    Array.isArray(rawTitle) && rawTitle.length > 0
      ? rawTitle[0].text
      : typeof rawTitle === "string"
      ? rawTitle
      : "Blog post";

  const date =
    doc.data.published_date &&
    new Date(doc.data.published_date).toLocaleDateString();

  return (
    <div className="container" style={{ paddingTop: "2rem", maxWidth: "720px" }}>
      <article className="card">
        <header style={{ marginBottom: "1rem" }}>
          <h1 style={{ fontSize: "1.9rem", fontWeight: 600 }}>{title}</h1>
          {date && (
            <p className="helper" style={{ fontSize: "0.85rem" }}>
              {date}
            </p>
          )}
        </header>

        <section className="muted">
          {doc.data.content ? (
            <PrismicRichText field={doc.data.content as any} />
          ) : (
            <p>No content yet.</p>
          )}
        </section>
      </article>
    </div>
  );
}
