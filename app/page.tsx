export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          Ruben Cuevas
        </h1>

        <p style={{ opacity: 0.8, marginBottom: "1.5rem" }}>
          I work at Amazon in NYC.
        </p>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            alignItems: "center",
          }}
        >
          <a
            href="https://x.com/rubencu_"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", fontSize: "1.05rem" }}
          >
            X
          </a>

          <a
            href="https://github.com/rubencu"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", fontSize: "1.05rem" }}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rubencu"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", fontSize: "1.05rem" }}
          >
            LinkedIn
          </a>

          <a
            href="mailto:hi@rubencu.com"
            style={{ textDecoration: "none", fontSize: "1.05rem" }}
          >
            hi@rubencu.com
          </a>
        </nav>
      </div>
    </main>
  );
}
