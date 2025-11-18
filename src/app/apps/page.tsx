// src/app/apps/page.tsx

export default function AppsPage() {
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <section className="card">
        <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.75rem" }}>
          Apps & Tools
        </h1>
        <p className="muted" style={{ marginBottom: "1rem" }}>
          This is the hub for your innovative astrology apps — such as financial
          timing tools, health cycle trackers, and transit analyzers.
        </p>
        <p className="muted">
          Each app will eventually get its own page and live view inside the user
          dashboard, but this overview helps visitors understand what is possible.
        </p>
      </section>
    </div>
  );
}
