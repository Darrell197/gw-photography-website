import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function Events() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}

      <section
        style={{
          paddingTop: "120px",
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <img
          src="/images/fireman.JPG"
          alt="Events Photography"
          style={{
            width: "100%",
            height: "600px",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "4px",
            display: "block",
          }}
        />
      </section>

      {/* INTRO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 40px 80px",
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
          Events
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: "300",
            marginBottom: "30px",
          }}
        >
          Unforgettable moments.
        </h1>

        <p
          style={{
            color: "#999",
            fontSize: "1.1rem",
            lineHeight: "1.9",
            maxWidth: "800px",
          }}
        >
          From luxury celebrations and private parties to corporate
          events and live experiences, every event has its own unique
          atmosphere. My approach is to document the energy, emotion
          and moments that make each event memorable.
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

    <img src="/images/events/IMG_2282.JPG" alt="Event" />
    <img src="/images/events/IMG_2301.JPG" alt="Event" />
    <img src="/images/events/IMG_2430.JPG" alt="Event" />
    <img src="/images/events/IMG_2549.JPG" alt="Event" />
    <img src="/images/events/IMG_2684.jpg" alt="Event" />
    <img src="/images/events/IMG_2916.JPG" alt="Event" />
    <img src="/images/events/IMG_3054.JPG" alt="Event" />
    <img src="/images/events/IMG_3648.JPG" alt="Event" />
    <img src="/images/events/IMG_3656.JPG" alt="Event" />
    <img src="/images/events/IMG_4325.JPG" alt="Event" />
    <img src="/images/events/IMG_4359.JPG" alt="Event" />
    <img src="/images/events/IMG_4371.JPG" alt="Event" />
    <img src="/images/events/IMG_4520.JPG" alt="Event" />
    <img src="/images/events/IMG_4521.JPG" alt="Event" />
    <img src="/images/events/IMG_4883.JPG" alt="Event" />
    <img src="/images/events/IMG_4895.JPG" alt="Event" />
    <img src="/images/events/IMG_5123.JPG" alt="Event" />

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
          Planning An Event?
        </p>

        <h2
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: "300",
            marginBottom: "30px",
          }}
        >
          Let's capture every moment.
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