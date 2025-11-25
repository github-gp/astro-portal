// src/app/learn/[uid]/page.tsx
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";

type LearnArticleDoc = {
  data: {
    title?: any;
    content?: any[];
    difficulty?: string | null;
    topic?: string | null;
  };
};

type LearnArticlePageProps = {
  params: { uid: string };
};

export default async function LearnArticlePage({ params }: LearnArticlePageProps) {
  const client = createClient();

  let doc: LearnArticleDoc;
  try {
    doc = (await client.getByUID(
      "learn_article",
      params.uid
    )) as LearnArticleDoc;
  } catch {
    notFound();
  }

  const rawTitle = doc.data.title;
  const title =
    typeof rawTitle === "string"
      ? rawTitle
      : rawTitle?.[0]?.text ?? "Lesson";

  return (
    <div className="container" style={{ paddingTop: "2rem", maxWidth: "720px" }}>
      <article className="card">
        <header style={{ marginBottom: "1rem" }}>
          <h1
            style={{
              fontSize: "1.9rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
            }}
          >
            {title}
          </h1>
          {(doc.data.difficulty || doc.data.topic) && (
            <p className="helper muted">
              {doc.data.difficulty && (
                <>
                  Difficulty: <strong>{doc.data.difficulty}</strong>
                </>
              )}
              {doc.data.topic && (
                <>
                  {" "}
                  · Topic: <strong>{doc.data.topic}</strong>
                </>
              )}
            </p>
          )}
        </header>

        <section className="muted">
          {Array.isArray(doc.data.content) && doc.data.content.length > 0 ? (
            doc.data.content.map((block: any, index: number) => (
              <p key={index} style={{ marginBottom: "0.9rem" }}>
                {block.text}
              </p>
            ))
          ) : (
            <p>No content yet. Add rich text to the “content” field in Prismic.</p>
          )}
        </section>
      </article>
    </div>
  );
}
