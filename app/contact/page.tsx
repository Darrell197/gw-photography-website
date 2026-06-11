import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "180px 40px 120px",
        }}
      >
        <p
          style={{
            color: "#D6C2A1",
            letterSpacing: "8px",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Contact
        </p>

        <h1
          style={{
            fontSize: "clamp(4rem, 8vw, 7rem)",
            fontWeight: "300",
            lineHeight: "1",
            marginBottom: "40px",
            maxWidth: "900px",
          }}
        >
          Let's create
          something beautiful.
        </h1>

        <p
          style={{
            color: "#999",
            fontSize: "1.2rem",
            lineHeight: "1.9",
            maxWidth: "700px",
            marginBottom: "100px",
          }}
        >
          Whether you're planning a wedding, organising an event,
          booking a portrait session or simply want to say hello,
          I'd love to hear your story. Every enquiry is answered
          personally and I'd be delighted to discuss how we can
          create something meaningful together.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
          }}
        >
          {/* CONTACT DETAILS */}

          <div>
            <p
              style={{
                color: "#D6C2A1",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "30px",
              }}
            >
              Get In Touch
            </p>

            <div style={{ marginBottom: "40px" }}>
              <p
                style={{
                  color: "#fff",
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                }}
              >
                Email
              </p>

              <p style={{ color: "#999" }}>
                westraygrace@gmail.com
              </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <p
                style={{
                  color: "#fff",
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                }}
              >
                Location
              </p>

              <p style={{ color: "#999" }}>
                Manchester, United Kingdom
              </p>
            </div>

            <div>
              <p
                style={{
                  color: "#fff",
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                }}
              >
                Instagram
              </p>

              <p style={{ color: "#999" }}>
                gracewestray.hy
              </p>
            </div>
          </div>

          {/* FORM */}

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "18px",
                color: "#fff",
                fontSize: "1rem",
              }}
            />

            <input
              type="email"
              placeholder="Email Address"
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "18px",
                color: "#fff",
                fontSize: "1rem",
              }}
            />

            <input
              type="text"
              placeholder="Wedding / Event Date"
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "18px",
                color: "#fff",
                fontSize: "1rem",
              }}
            />

            <textarea
              placeholder="Tell me about your plans..."
              rows={8}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "18px",
                color: "#fff",
                fontSize: "1rem",
                resize: "vertical",
              }}
            />

            <button
              type="submit"
              style={{
                background: "#D6C2A1",
                color: "#111",
                border: "none",
                padding: "20px",
                cursor: "pointer",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontWeight: "500",
              }}
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}