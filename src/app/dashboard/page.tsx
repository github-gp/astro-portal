// src/app/dashboard/page.tsx

export default function DashboardHomePage() {
  return (
    <>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.75rem" }}>
        Overview
      </h1>
      <p className="muted" style={{ marginBottom: "1.25rem" }}>
        This is the main snapshot of your astrology workspace. Over time, we&apos;ll
        add cards here showing upcoming transits, recent events, and theme-specific
        highlights.
      </p>

      <div className="card">
        <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
          Coming next
        </h2>
        <ul className="muted" style={{ marginLeft: "1.25rem", marginTop: "0.5rem" }}>
          <li>Display core birth chart information.</li>
          <li>Show a quick list of recently logged events.</li>
          <li>Surface guidance from active themes such as finance and health.</li>
        </ul>
      </div>
    </>
  );
}
