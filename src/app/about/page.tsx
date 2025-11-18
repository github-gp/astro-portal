// src/app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <section className="card">
        <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.75rem" }}>
          About Astro Portal
        </h1>
        <p className="muted" style={{ marginBottom: "1rem" }}>
          This project aims to blend serious astrology with practical life tracking —
          charts, events, and focused guidance — in a way that is approachable for
          everyday people.
        </p>
        <p className="muted">
          Over time, you can use this page to share your story, philosophy, and the
          principles behind your tools, helping visitors build trust in your work.
        </p>
      </section>
    </div>
  );
}
