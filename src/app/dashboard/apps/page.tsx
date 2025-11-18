// src/app/dashboard/apps/page.tsx

export default function DashboardAppsPage() {
  return (
    <>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.75rem" }}>
        Apps
      </h1>
      <p className="muted" style={{ marginBottom: "1.25rem" }}>
        This will be the control center for all your astrology tools: financial
        timing, health cycles, transit analyzers, and more.
      </p>

      <div className="card">
        <p className="muted">
          Each tool will eventually get its own mini-app here, powered by your
          saved charts and events.
        </p>
      </div>
    </>
  );
}
