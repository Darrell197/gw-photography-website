import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function Lifestyle() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* INTRO */}

      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
         padding: "100px 40px 60px",
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
          Lifestyle
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: "300",
            marginBottom: "25px",
          }}
        >
          Real moments.
          <br />
          Real stories.
        </h1>

        <p
          style={{
            color: "#999",
            maxWidth: "700px",
            lineHeight: "1.8",
            fontSize: "1.1rem",
          }}
        >
          Lifestyle photography is about connection, personality and
          the moments that make life unique. The laughs, the adventures,
          the quiet moments and everything in between.
        </p>
      </section>

      {/* GALLERY */}

      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px 120px",
        }}
      >
       <div className="gallery-grid">
  <img src="/images/lifestyle/4O1A2495.jpg" alt="Lifestyle" />
  <img src="/images/lifestyle/4O1A3199.jpg" alt="Lifestyle" />
  <img src="/images/lifestyle/4O1A3235.jpg" alt="Lifestyle" />
  <img src="/images/lifestyle/4O1A3327.jpg" alt="Lifestyle" />
  <img src="/images/lifestyle/4O1A3379.jpg" alt="Lifestyle" />
  <img src="/images/lifestyle/4O1A3475.jpg" alt="Lifestyle" />

  <img src="/images/lifestyle/5U8A9700.JPG" alt="Lifestyle" />

  <img src="/images/lifestyle/image0 (3).jpeg" alt="Lifestyle" />
  <img src="/images/lifestyle/image2.JPG" alt="Lifestyle" />

  <img src="/images/lifestyle/IMG_0321.JPG" alt="Lifestyle" />
  <img src="/images/lifestyle/IMG_0337.JPG" alt="Lifestyle" />



  <img src="/images/lifestyle/IMG_2228.JPG" alt="Lifestyle" />
  <img src="/images/lifestyle/IMG_2231.JPG" alt="Lifestyle" />
</div>

      </section>

      {/* CTA */}

      <section
        style={{
          textAlign: "center",
          padding: "120px 40px",
          borderTop: "1px solid rgba(214,194,161,0.15)",
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
          Tell Your Story
        </p>

        <h2
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: "300",
            marginBottom: "30px",
          }}
        >
          Let's create something authentic.
        </h2>

        <Link
          href="/contact"
          style={{
            display: "inline-block",
            background: "#D6C2A1",
            color: "#111",
            textDecoration: "none",
            padding: "18px 40px",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Get In Touch
        </Link>
      </section>
    </main>
  );
}