import Link from "next/link";
import { createClient } from "@/prismicio";

export default async function LearnPage() {
  const client = createClient();

  const articles = await client
    .getAllByType("learn_article")
    .catch(() => [] as any[]);

  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <section className="card">
        {articles.length === 0 ? (
          <p className="muted">
            No lessons yet. Add some <code>learn_article</code> documents in Prismic.
          </p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {articles.map((article: any, index: number) => {
              const uid = article.uid ?? `lesson-${index}`;
              const rawTitle = article.data.title;
              const title =
                Array.isArray(rawTitle) && rawTitle.length > 0
                  ? rawTitle[0].text
                  : typeof rawTitle === "string"
                  ? rawTitle
                  : "Untitled lesson";

              return (
                <li key={uid} style={{ padding: "0.75rem 0" }}>
                  <Link href={`/learn/${article.uid}`} className="link">
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
