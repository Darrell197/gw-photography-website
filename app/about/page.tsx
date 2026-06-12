import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "120px 20px",
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
          About
        </p>

        <h1
          style={{
            fontSize: "clamp(4rem, 8vw, 7rem)",
            fontWeight: "300",
            lineHeight: "1",
            marginBottom: "80px",
            maxWidth: "900px",
          }}
        >
          A life spent
          chasing moments.
        </h1>

        <div
         className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
         <img
  src="/images/gracecamera.jpg"
  alt="Grace Westray"
  style={{
    width: "100%",
    height: "100%",
    minHeight: "900px",
    objectFit: "cover",
    objectPosition: "center",
  }}
/>

          <div>
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "300",
                marginBottom: "10px",
              }}
            >
              Grace Westray
            </h2>

            <p
              style={{
                color: "#D6C2A1",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "40px",
              }}
            >
              Wedding • Editorial • Lifestyle
            </p>

            <p
              style={{
                color: "#cccccc",
                lineHeight: "1.9",
                fontSize: "1.1rem",
                marginBottom: "25px",
              }}
            >
              Grace never really remembers a time when she wasn't taking
              photographs. From disposable Kodak cameras as a child to
              documenting weddings, events and everyday life today,
              photography has always been her way of understanding people
              and the world around her.
            </p>

            <p
              style={{
                color: "#cccccc",
                lineHeight: "1.9",
                fontSize: "1.1rem",
                marginBottom: "25px",
              }}
            >
              Drawn to genuine emotion and authentic storytelling,
              Grace is always searching for those fleeting moments that
              often pass unnoticed — a glance, a laugh, a touch or a
              quiet expression that tells a story all on its own.
            </p>

            <div
              style={{
                marginTop: "40px",
                paddingTop: "40px",
                borderTop: "1px solid rgba(214,194,161,0.15)",
              }}
            >
              <p
                style={{
                  color: "#D6C2A1",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                  fontSize: "14px",
                }}
              >
                Her Approach
              </p>

              <h3
                style={{
                  fontSize: "2.2rem",
                  fontWeight: "300",
                  lineHeight: "1.3",
                  marginBottom: "25px",
                  maxWidth: "500px",
                }}
              >
                Creating photographs that feel
                as meaningful as the memories
                themselves.
              </h3>

              <p
                style={{
                  color: "#aaaaaa",
                  lineHeight: "1.9",
                  fontSize: "1rem",
                }}
              >
                For Grace, photography has never simply been about taking
                pictures it's about noticing the moments that others
                might miss. The fleeting glance between two people, the
                burst of laughter that lasts only a second, the quiet
                emotions that often become the memories we treasure most.
              </p>

              <p
                style={{
                  color: "#aaaaaa",
                  lineHeight: "1.9",
                  fontSize: "1rem",
                  marginTop: "20px",
                }}
              >
                With a natural instinct for storytelling and a genuine
                connection with people, Grace creates an environment
                where clients can simply be themselves. Her warm,
                relaxed approach allows authentic moments to unfold
                naturally, resulting in imagery that feels honest,
                emotional and deeply personal.
              </p>
            </div>
          </div>
        </div>

        <section
          style={{
            marginTop: "120px",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            borderTop: "1px solid rgba(214,194,161,0.2)",
            paddingTop: "80px",
          }}
        >
          <p
            style={{
              color: "#D6C2A1",
              letterSpacing: "6px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Life Beyond The Lens
          </p>

          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "300",
              lineHeight: "1.2",
              marginBottom: "30px",
            }}
          >
            Inspired by people,
            places and culture.
          </h2>

          <p
            style={{
              color: "#aaaaaa",
              fontSize: "1.1rem",
              lineHeight: "2",
            }}
          >
            When she's not photographing weddings and celebrations,
            Grace can usually be found surfing, discovering new food
            spots or spending time with her dogs. Her curiosity about
            people and the world around her continues to shape the way
            she sees, connects with and documents life's most meaningful
            moments.
          </p>
        </section>
      </section>
    </main>
  );
}