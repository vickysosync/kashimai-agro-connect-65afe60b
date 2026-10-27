import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useApp } from "@/context/AppContext";
import { LogoMark, EyeIcon, EyeOffIcon, LeafIcon } from "@/components/site/Icons";

/**
 * Demo admin login. Authentication is a frontend demonstration only — it uses
 * React state and sessionStorage and is NOT secure enough for production use.
 */
export default function AdminLogin() {
  const { isAdmin, login } = useApp();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isAdmin) navigate({ to: "/admin/dashboard" });
  }, [isAdmin, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    // Small delay purely to show the loading state of the demo login.
    setTimeout(() => {
      const ok = login(username, password);
      setSubmitting(false);
      if (ok) {
        navigate({ to: "/admin/dashboard" });
      } else {
        setError("Incorrect username or password. Please try again.");
      }
    }, 500);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-light-green px-4 py-12">
      <Link to="/" className="mb-8 flex flex-col items-center gap-3 text-center">
        <LogoMark className="h-14 w-14" />
        <span className="font-display text-xl font-semibold text-primary">
          Shri Sant Kashimai Agro
        </span>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Farmer Producer Company Ltd.
        </span>
      </Link>

      <div className="w-full max-w-md rounded-lg border border-border bg-card p-7 shadow-sm">
        <div className="flex items-center gap-2">
          <LeafIcon className="h-5 w-5 text-leaf" />
          <h1 className="text-2xl text-primary">Admin Login</h1>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign in to manage the demo website content.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          <div>
            <label htmlFor="admin-username" className="form-label">
              Username
            </label>
            <input
              id="admin-username"
              name="username"
              type="text"
              autoComplete="username"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="admin-password" className="form-label">
              Password
            </label>
            <div className="relative">
              <input
                id="admin-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                className="form-input pr-11"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground hover:text-primary"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {error && (
            <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </p>
          )}

          <button type="submit" className="btn-primary w-full" disabled={submitting}>
            {submitting ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <div className="mt-6 rounded-md border border-harvest/50 bg-harvest/10 p-3 text-xs leading-relaxed text-foreground/80">
          <p className="font-semibold">Demo credentials</p>
          <p className="mt-1">
            Username: <code className="font-mono">admin</code> · Password:{" "}
            <code className="font-mono">Admin@123</code>
          </p>
          <p className="mt-2">
            This login is for demonstration purposes only. It runs entirely in your
            browser and is not secure enough for production use.
          </p>
        </div>
      </div>

      <Link to="/" className="mt-8 text-sm font-medium text-primary hover:text-leaf">
        ← Back to website
      </Link>
    </div>
  );
}
