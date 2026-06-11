import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function Studio() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* INTRO */}

      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "180px 40px 60px",
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
          Studio
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: "300",
            marginBottom: "25px",
          }}
        >
          Editorial Portraits
        </h1>

        <p
          style={{
            color: "#999",
            maxWidth: "700px",
            lineHeight: "1.8",
            fontSize: "1.1rem",
          }}
        >
          Modern portrait photography with personality, confidence and
          style. A collection of studio, editorial and creative work.
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
  <img src="/images/studio/4O1A0250 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A0328 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A0358 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A0897 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A1548 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A1565 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A1601 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A1726 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A1743 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A1830 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A2024 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A2033 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A2093 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A2140 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A2380 (3).jpg" alt="Studio" />

  <img src="/images/studio/4O1A6527 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A6543 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A6576 (3).jpg" alt="Studio" />
  <img src="/images/studio/4O1A6660 (3).jpg" alt="Studio" />

  <img src="/images/studio/IMG_0840 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_0842 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_0844 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_0854 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_0857 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_0861 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_0862 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_0872 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_0875 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_0884 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_0897 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_0903 (3).JPG" alt="Studio" />

  <img src="/images/studio/IMG_1966 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_1967 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_1968 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_1970 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_1973 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_1975 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_2001 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_2004 (3).JPG" alt="Studio" />

  <img src="/images/studio/IMG_3531 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_3532 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_3535 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_3544 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_3546 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_3549 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_3556 (3).JPG" alt="Studio" />

  <img src="/images/studio/IMG_4492 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_4493 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_4498 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_4500 (3).JPG" alt="Studio" />
  <img src="/images/studio/IMG_4517 (2).JPG" alt="Studio" />
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
          Book A Session
        </p>

        <h2
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: "300",
            marginBottom: "30px",
          }}
        >
          Let's create something unique.
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