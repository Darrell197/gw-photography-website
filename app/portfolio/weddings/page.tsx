import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function Weddings() {
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
  <img src="/images/weddings/4O1A4265.jpg" alt="Wedding" />
  <img src="/images/weddings/4O1A5523.jpg" alt="Wedding" />
  <img src="/images/weddings/4O1A5526.jpg" alt="Wedding" />
  <img src="/images/weddings/4O1A5724.jpg" alt="Wedding" />
  <img src="/images/weddings/4O1A7835.jpg" alt="Wedding" />
  <img src="/images/weddings/4O1A7869.jpg" alt="Wedding" />
  <img src="/images/weddings/4O1A7875.jpg" alt="Wedding" />
  <img src="/images/weddings/4O1A7918.jpg" alt="Wedding" />

  <img src="/images/weddings/4O1A8113.jpg" alt="Wedding" />
  <img src="/images/weddings/4O1A8331.jpg" alt="Wedding" />
  <img src="/images/weddings/4O1A8487.jpg" alt="Wedding" />

  <img src="/images/weddings/IMG_1194.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_1196.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_1207.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_1224.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_1236.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_1240.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_1257.JPG" alt="Wedding" />

  <img src="/images/weddings/IMG_4559.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_4565.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_4569.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_4580.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_4583.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_4586.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_4588.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_4591.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_4607.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_4610.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_4611.jpg" alt="Wedding" />
  <img src="/images/weddings/IMG_4614.JPG" alt="Wedding" />
  <img src="/images/weddings/IMG_4615.JPG" alt="Wedding" />


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