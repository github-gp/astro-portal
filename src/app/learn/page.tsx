// src/app/learn/page.tsx

export default function LearnPage() {
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <section className="card">
        <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.75rem" }}>
          Learn Astrology
        </h1>
        <p className="muted" style={{ marginBottom: "1rem" }}>
          This section will grow into a structured learning path: beginner, intermediate,
          and advanced astrology, with lessons, examples, and practice exercises.
        </p>
        <p className="muted">
          For now, think of this as your classroom area. Later, we will connect it
          to a CMS so you can add lessons without touching code.
        </p>
      </section>
    </div>
  );
}
