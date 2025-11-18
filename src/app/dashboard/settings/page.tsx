// src/app/dashboard/settings/page.tsx

export default function DashboardSettingsPage() {
  return (
    <>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.75rem" }}>
        Settings
      </h1>
      <p className="muted" style={{ marginBottom: "1.25rem" }}>
        Manage your profile, birth data, notification preferences, and theme
        selections here.
      </p>

      <div className="card">
        <p className="muted">
          When we connect the database and authentication, this page will let
          you update your stored information securely.
        </p>
      </div>
    </>
  );
}
