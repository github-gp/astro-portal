// src/app/blog/page.tsx

export default function BlogPage() {
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <section className="card">
        <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.75rem" }}>
          Insights & Case Studies
        </h1>
        <p className="muted" style={{ marginBottom: "1rem" }}>
          The blog is where you will publish stories, analyses, and real-world
          examples that show how charts, events, and themes come together.
        </p>
        <p className="muted">
          Later, we will connect this page to a headless CMS so new posts appear
          automatically when you publish them there.
        </p>
      </section>
    </div>
  );
}
