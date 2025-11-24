// src/app/dashboard/chart/page.tsx
"use client";

import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";

export default function ChartPage() {
  const { data: session } = useSession();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const date = String(formData.get("date") || "");
    const time = String(formData.get("time") || "");
    const place = String(formData.get("place") || "");
    const timezone = String(formData.get("timezone") || "");

    // Make sure user is logged in and we have an email
    if (!session?.user?.email) {
      setError("You must be logged in to save birth data.");
      setIsSubmitting(false);
      return;
    }

    if (!date) {
      setError("Please select a birth date.");
      setIsSubmitting(false);
      return;
    }

    const iso = new Date(`${date}T${time || "00:00"}`).toISOString();

    const res = await fetch("/api/birthdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: iso,
        place,
        timezone,
        email: session.user.email, // send email to API
      }),
    });

    setIsSubmitting(false);

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      setError(data?.error ?? "Failed to save birth data.");
      return;
    }

    setSuccess("Birth data saved successfully.");
  }

  return (
    <>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.75rem" }}>
        My chart
      </h1>
      <p className="muted" style={{ marginBottom: "1.25rem" }}>
        Enter birth details. Later, you will use this to generate and analyze charts.
      </p>

      <section className="card">
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label" htmlFor="date">Birth date</label>
            <input className="input" id="date" name="date" type="date" required />
          </div>

          <div className="field">
            <label className="label" htmlFor="time">Birth time</label>
            <input className="input" id="time" name="time" type="time" />
          </div>

          <div className="field">
            <label className="label" htmlFor="place">Birth place</label>
            <input
              className="input"
              id="place"
              name="place"
              type="text"
              placeholder="City, Country"
              required
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="timezone">Time zone</label>
            <input
              className="input"
              id="timezone"
              name="timezone"
              type="text"
              placeholder="e.g. UTC+05:30"
              required
            />
          </div>

          {error && (
            <p className="helper" style={{ color: "tomato" }}>
              {error}
            </p>
          )}
          {success && (
            <p className="helper" style={{ color: "seagreen" }}>
              {success}
            </p>
          )}

          <button
            type="submit"
            className="button button-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save birth data"}
          </button>
        </form>
      </section>
    </>
  );
}
