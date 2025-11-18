// src/app/themes/page.tsx

export default function ThemesPage() {
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <section className="card">
        <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.75rem" }}>
          Themes & Focus Areas
        </h1>
        <p className="muted" style={{ marginBottom: "1rem" }}>
          Here users will choose what matters most: finance, health, relationships,
          career, spirituality, and more. Their dashboard and guidance will adapt
          to these selections.
        </p>
        <p className="muted">
          Later, each theme will connect to specific tools, interpretations, and
          learning modules tailored to that part of life.
        </p>
      </section>
    </div>
  );
}
