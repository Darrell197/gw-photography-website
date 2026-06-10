import Navbar from "../../components/Navbar";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";

export default async function Weddings() {
const wedding = await client.fetch(`
  *[_type == "wedding"][0]{
    title,
    featuredImage,
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
          src="/images/bride1.JPG"
          alt="Wedding Photography"
          style={{
            width: "100%",
            height: "550px",
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
          Weddings
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: "300",
            marginBottom: "30px",
          }}
        >
          Beautifully remembered.
        </h1>

        <p
          style={{
            color: "#999",
            maxWidth: "800px",
            lineHeight: "1.9",
            fontSize: "1.1rem",
          }}
        >
          Every wedding has its own story. From the anticipation of the
          morning preparations to the final moments on the dance floor,
          my aim is to document the day naturally and honestly, creating
          imagery that allows you to relive every emotion for years to
          come.
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
  {wedding?.galleryImages?.map((image: any, index: number) => (
    <img
      key={index}
      src={urlFor(image).url()}
      alt="Wedding"
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
          Your Wedding Story
        </p>

        <h2
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: "300",
            marginBottom: "30px",
          }}
        >
          Let's create something beautiful together.
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
          Enquire Now
        </Link>
      </section>
    </main>
  );
}