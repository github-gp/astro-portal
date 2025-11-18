// src/app/dashboard/themes/page.tsx

export default function DashboardThemesPage() {
  return (
    <>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.75rem" }}>
        Themes
      </h1>
      <p className="muted" style={{ marginBottom: "1.25rem" }}>
        Choose which areas of life you want to focus on right now — finance,
        health, relationships, career, spirituality, and more.
      </p>

      <div className="card">
        <p className="muted">
          Later, this page will connect to your user preferences in the database
          and control which apps and guidance widgets show up on your dashboard.
        </p>
      </div>
    </>
  );
}
