// src/app/dashboard/chart/page.tsx

export default function ChartPage() {
  return (
    <>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.75rem" }}>
        My chart
      </h1>
      <p className="muted" style={{ marginBottom: "1.25rem" }}>
        This area will display your natal chart and related charts. For now, we&apos;re
        just reserving the space and thinking about how the data will be structured.
      </p>

      <div className="card">
        <p className="muted">
          Later, we&apos;ll integrate a chart rendering component and link it to your
          stored birth data in the database.
        </p>
      </div>
    </>
  );
}
