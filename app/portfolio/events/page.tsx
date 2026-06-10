import Navbar from "../../components/Navbar";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";


export default async function Events() {
const event = await client.fetch(`
  *[_type == "event"][0]{
    title,
    galleryImages
  }
`)

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
        {/* FEATURE IMAGE */}

       

        {/* GRID */}
<div className="gallery-grid">
  {event?.galleryImages?.map((image: any, index: number) => (
    <img
      key={index}
      src={urlFor(image).url()}
      alt="Event"
      style={{
        width: "100%",
        aspectRatio: "1 / 1",
        objectFit: "cover",
        display: "block",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
    />
  ))}
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