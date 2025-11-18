// src/app/dashboard/events/page.tsx

export default function EventsPage() {
  return (
    <>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.75rem" }}>
        Events log
      </h1>
      <p className="muted" style={{ marginBottom: "1.25rem" }}>
        Here you&apos;ll record meaningful life events: promotions, health changes,
        relationship shifts, and more — all time-stamped for later analysis.
      </p>

      <div className="card">
        <p className="muted">
          Soon this will become a timeline where each event can be filtered by
          theme and linked to astrological transits active at the time.
        </p>
      </div>
    </>
  );
}
