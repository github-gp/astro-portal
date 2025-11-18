// src/app/login/page.tsx
"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");

    // Call Auth.js signIn with "credentials" provider
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setIsSubmitting(false);

    if (!result || result.error) {
      setError("Invalid email or password.");
      return;
    }

    // On success, go to dashboard
    router.push("/dashboard");
  }

  return (
    <div className="container" style={{ paddingTop: "3rem", maxWidth: "480px" }}>
      <section className="card">
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>
          Sign in
        </h1>
        <p className="muted" style={{ marginBottom: "1.5rem" }}>
          Log in to access your saved charts, events, and personalized guidance.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              id="email"
              name="email"
              type="email"
              placeholder="demo@astro-portal.test"
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
              placeholder="demo1234"
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
            {isSubmitting ? "Signing in..." : "Continue"}
          </button>

          <p className="helper muted">
            For now, use <strong>demo@astro-portal.test</strong> with password{" "}
            <strong>demo1234</strong> to log in.
          </p>
        </form>
      </section>
    </div>
  );
}
