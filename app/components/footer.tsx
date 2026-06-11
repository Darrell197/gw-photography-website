export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "auto",
        borderTop: "1px solid rgba(214,194,161,0.15)",
        padding: "60px 40px",
        background: "#000",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "20px",
          }}
        >
          GW Photography
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <a
            href="/portfolio/weddings"
            style={{
              color: "#D6C2A1",
              textDecoration: "none",
            }}
          >
            Weddings
          </a>

          <a
            href="/portfolio/events"
            style={{
              color: "#D6C2A1",
              textDecoration: "none",
            }}
          >
            Events
          </a>

          <a
            href="/portfolio/lifestyle"
            style={{
              color: "#D6C2A1",
              textDecoration: "none",
            }}
          >
            Lifestyle
          </a>

          <a
            href="/portfolio/studio"
            style={{
              color: "#D6C2A1",
              textDecoration: "none",
            }}
          >
            Studio
          </a>

          <a
            href="/contact"
            style={{
              color: "#D6C2A1",
              textDecoration: "none",
            }}
          >
            Contact
          </a>
        </div>

        <p
          style={{
            color: "#999",
            marginBottom: "15px",
          }}
        >
          Manchester north west, United Kingdom
        </p>

        <p
          style={{
            color: "#666",
            fontSize: "0.9rem",
          }}
        >
          © {new Date().getFullYear()} GW Photography. All rights reserved.
        </p>
      </div>
    </footer>
  );
}