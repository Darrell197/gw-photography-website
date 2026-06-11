import Link from "next/link";
import Navbar from "./components/Navbar";



export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section
        style={{
          height: "100vh",
          backgroundImage: "url('/images/girls tan.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.30)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1000px",
            padding: "0 30px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(4rem, 7vw, 7rem)",
              fontWeight: "300",
              color: "#D6C2A1",
              letterSpacing: "-1px",
              lineHeight: "1",
              marginBottom: "20px",
              textShadow: "0 4px 30px rgba(0,0,0,0.8)",
            }}
          >
            Grace Westray
          </h1>

          <p
            style={{
              color: "#D6C2A1",
              letterSpacing: "10px",
              textTransform: "uppercase",
              fontSize: "15px",
              marginBottom: "35px",
              fontWeight: "500",
              textShadow: "0 4px 20px rgba(0,0,0,0.8)",
            }}
          >
            Photographer
          </p>

          <p
            style={{
              fontSize: "clamp(1.4rem, 2vw, 2rem)",
              color: "#ffffff",
              fontWeight: "300",
              maxWidth: "850px",
              lineHeight: "1.6",
              margin: "0 auto 50px auto",
              textShadow: "0 4px 20px rgba(0,0,0,0.9)",
            }}
          >
            Luxury Wedding, Event & Lifestyle Photography
          </p>

          <div
            style={{
              width: "60px",
              height: "1px",
              background: "#D6C2A1",
              margin: "0 auto 50px",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Link
            href="/portfolio/weddings"
              style={{
                border: "1px solid #D6C2A1",
                padding: "16px 36px",
                textDecoration: "none",
                color: "white",
              }}
            >
              View Portfolio
            </Link>

           <Link
  href="/contact"
  style={{
    background: "#D6C2A1",
    color: "#111",
    padding: "16px 36px",
    textDecoration: "none",
    fontWeight: "500",
  }}
>
  Let's Create Memories
</Link>
          </div>
        </div>
      </section>

      <section
        style={{
         padding: "80px 80px 40px 80px",
          backgroundColor: "#050505",
        }}
      >
        <h2
          style={{
            color: "#D6C2A1",
            fontSize: "16px",
            textTransform: "uppercase",
            letterSpacing: "6px",
            marginBottom: "20px",
          }}
        >
          Featured Work
        </h2>

        <h3
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: "300",
            maxWidth: "900px",
            lineHeight: "1.15",
          }}
        >
          Timeless imagery for weddings, celebrations and unforgettable moments.
        </h3>
      </section>
      
<section
  className="homepage-section"
  style={{
    padding: "80px 80px",
    backgroundColor: "#000",
  }}
>
  <div
    style={{
      maxWidth: "1400px",
      margin: "0 auto",
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

    <h2
      style={{
        fontSize: "clamp(3rem, 7vw, 6rem)",
        fontWeight: "300",
        lineHeight: "1",
        marginBottom: "60px",
        maxWidth: "900px",
      }}
    >
      Every love story

      <br />
   deserves to be remembered

    </h2>

    <img
      src="/images/bride1.JPG"
      alt="Wedding Photography"
      style={{
        width: "100%",
        height: "700px",
        objectFit: "cover",
        marginBottom: "24px",
      }}
    />

    <div
  className="homepage-two-image-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
  }}
>
      <img
        src="/images/ballongirl.jpg"
        alt="Wedding Photography"
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
        }}
      />

      <img
        src="/images/blkwhitebride.JPG"
        alt="Wedding Photography"
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
        }}
      />
    </div>

    <div
      style={{
        marginTop: "40px",
      }}
    >
      <Link
       
  href="/portfolio/weddings"
        style={{
          color: "#D6C2A1",
          textDecoration: "none",
          textTransform: "uppercase",
          letterSpacing: "3px",
          fontSize: "14px",
        }}
      >
        Explore Weddings
      </Link>
    </div>
  </div>
</section>
<section
  style={{
    padding: "80px 80px",
    backgroundColor: "#050505",
  }}
>
  <div
    style={{
      maxWidth: "1400px",
      margin: "0 auto",
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

    <h2
      style={{
        fontSize: "clamp(3rem, 7vw, 6rem)",
        fontWeight: "300",
        lineHeight: "1",
        marginBottom: "60px",
        maxWidth: "900px",
      }}
    >
      Moments that
      <br />
      deserve the spotlight.
    </h2>

    <img
      src="/images/fireman.JPG"
      alt="Events Photography"
      style={{
        width: "100%",
        height: "700px",
        objectFit: "cover",
        marginBottom: "24px",
      }}
    />

    <div
  className="homepage-two-image-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
  }}
>
      <img
        src="/images/3girlsout.JPG"
        alt="Events Photography"
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
        }}
      />
      <img
        src="/images/girlsparty.JPG"
        alt="Events Photography"
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
        }}
      />
    </div>

    <div
      style={{
        marginTop: "40px",
      }}
    >
      <Link
       
  href="/portfolio/events"
        style={{
          color: "#D6C2A1",
          textDecoration: "none",
          textTransform: "uppercase",
          letterSpacing: "3px",
          fontSize: "14px",
        }}
      >
        Explore Events
      </Link>
    </div>
  </div>
</section>
<section
  className="homepage-section"
  style={{
    padding: "80px 80px",
    backgroundColor: "#000",
  }}
>
  <div
    style={{
      maxWidth: "1400px",
      margin: "0 auto",
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

    <h2
      style={{
        fontSize: "clamp(3rem, 7vw, 6rem)",
        fontWeight: "300",
        lineHeight: "1",
        marginBottom: "60px",
        maxWidth: "900px",
      }}
    >
      Authentic stories,
      <br />
      captured naturally.
    </h2>

    <img
      src="/images/hug.jpg"
      alt="Lifestyle Photography"
      style={{
        width: "100%",
        height: "700px",
        objectFit: "cover",
        marginBottom: "24px",
      }}
    />

    <div
  className="homepage-two-image-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
  }}
>
      <img
        src="/images/point.jpg"
        alt="Lifestyle Photography"
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
        }}
      />

      <img
        src="/images/board.jpg"
        alt="Lifestyle Photography"
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
        }}
      />
    </div>

    <div
      style={{
        marginTop: "40px",
      }}
    >
      <Link
       
  href="/portfolio/lifestyle"
        style={{
          color: "#D6C2A1",
          textDecoration: "none",
          textTransform: "uppercase",
          letterSpacing: "3px",
          fontSize: "14px",
        }}
      >
        Explore Lifestyle
      </Link>
    </div>
  </div>
</section>
<section
  style={{
    backgroundColor: "#000",
    padding: "180px 40px",
    textAlign: "center",
  }}
>
  <div
    style={{
      maxWidth: "1000px",
      margin: "0 auto",
    }}
  >
    <p
      style={{
        color: "#D6C2A1",
        letterSpacing: "8px",
        textTransform: "uppercase",
        marginBottom: "25px",
      }}
    >
      Get In Touch
    </p>

    <h2
      style={{
        fontSize: "clamp(3.5rem, 8vw, 7rem)",
        fontWeight: "300",
        lineHeight: "1",
        marginBottom: "40px",
      }}
    >
      Let's create
      <br />
      something beautiful.
    </h2>

    <p
      style={{
        color: "#bdbdbd",
        fontSize: "1.2rem",
        lineHeight: "1.8",
        maxWidth: "700px",
        margin: "0 auto 60px",
      }}
    >
      Whether you're planning a wedding,
      celebrating a milestone or capturing a
      meaningful moment, I'd love to hear your story.
    </p>

   <Link
  href="/contact"
  style={{
    background: "#D6C2A1",
    color: "#111",
    padding: "18px 40px",
    fontSize: "14px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    textDecoration: "none",
    display: "inline-block",
  }}
>
  Get In Touch
</Link>
  </div>
</section>

<footer
  style={{
    backgroundColor: "#050505",
    borderTop: "1px solid rgba(214,194,161,0.15)",
    padding: "60px 40px",
  }}
>
  <div
    style={{
      maxWidth: "1400px",
      margin: "0 auto",
    }}
  >
    {/* TOP ROW */}

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        marginBottom: "40px",
      }}
    >
      <img
        src="/images/gw-logo-gold.png"
        alt="GW Photography"
        style={{
          width: "100px",
        }}
      />

      <h3
        style={{
          color: "#D6C2A1",
          fontWeight: "300",
          fontSize: "24px",
          margin: 0,
        }}
      >
        Grace Westray Photography
      </h3>

      <p
        style={{
          color: "#999",
          margin: 0,
        }}
      >
        Manchester, UK
      </p>
    </div>

    {/* NAVIGATION */}

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap",
        marginBottom: "40px",
      }}
    >
     <Link href="/portfolio/weddings">
  Weddings
</Link>

<Link href="/portfolio/events">
  Events
</Link>

<Link href="/portfolio/lifestyle">
  Lifestyle
</Link>

<Link href="/contact">
  Contact
</Link>

      <a
        href="#"
        style={{
          color: "#D6C2A1",
          textDecoration: "none",
        }}
      >
        Instagram
      </a>
    </div>

    {/* COPYRIGHT */}

    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingTop: "25px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "#666",
          fontSize: "14px",
          margin: 0,
        }}
      >
        © 2025 Grace Westray Photography
      </p>
    </div>
  </div>
</footer>
    </main>
  );
}