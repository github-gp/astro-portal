// src/app/page.tsx

export default function HomePage() {
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>
          Welcome to your astrology HQ
        </h1>
        <p className="muted" style={{ marginBottom: "1.25rem" }}>
          This space will soon let you store birth charts, log meaningful life
          events, and explore focused themes like finance, health, and
          relationships — all in one structured dashboard.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <button className="button button-primary">
            Start with your chart
          </button>
          <button className="button">
            Explore learning path
          </button>
        </div>
      </section>

      <section className="card">
        <h2 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem" }}>
          What we will build next
        </h2>
        <ul className="muted" style={{ marginLeft: "1.25rem", marginTop: "0.5rem" }}>
          <li>Public pages for learning, themes, apps, and your story.</li>
          <li>A secure login system and personal dashboard.</li>
          <li>Data models for charts, events, and thematic guidance.</li>
        </ul>
      </section>
    </div>
  );
}

