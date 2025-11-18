// src/app/register/page.tsx
"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    setIsSubmitting(false);

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      setError(data?.error ?? "Registration failed.");
      return;
    }

    // After successful sign-up, send user to login page
    router.push("/login");
  }

  return (
    <div className="container" style={{ paddingTop: "3rem", maxWidth: "480px" }}>
      <section className="card">
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>
          Create your account
        </h1>
        <p className="muted" style={{ marginBottom: "1.5rem" }}>
          Start building your personal astrology workspace with secure storage for
          charts and life events.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              className="input"
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              id="password"
              name="password"
              type="password"
              placeholder="Create a strong password"
              required
            />
          </div>

          {error && (
            <p className="helper" style={{ color: "tomato" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            className="button button-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating account..." : "Sign up"}
          </button>

          <p className="helper muted">
            After signing up, you&apos;ll be redirected to the login page to sign
            in with your new account.
          </p>
        </form>
      </section>
    </div>
  );
}


