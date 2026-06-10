import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "180px 40px 120px",
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
          Photography Tips
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: "300",
            marginBottom: "40px",
          }}
        >
          How To Prepare For A Photoshoot
        </h1>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "30px",
          }}
        >
          Feeling nervous before a photoshoot is completely normal. Most
          people aren't in front of a camera every day, but with a little
          preparation you'll feel far more relaxed and confident.
        </p>

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "15px",
          }}
        >
          Choose Comfortable Clothing
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "30px",
          }}
        >
          Wear outfits that reflect your personality and make you feel
          confident. Neutral colours and timeless styles tend to photograph
          beautifully and help keep the focus on you rather than your
          clothing.
        </p>

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "15px",
          }}
        >
          Get Plenty Of Rest
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "30px",
          }}
        >
          A good night's sleep can make a huge difference. Feeling rested
          and refreshed will help you look and feel your best during the
          session.
        </p>

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "15px",
          }}
        >
          Trust The Process
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "30px",
          }}
        >
          The best photographs happen when you're relaxed. Don't worry about
          posing perfectly. Focus on enjoying the experience and your
          personality will naturally shine through in the images.
        </p>

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "15px",
          }}
        >
          Arrive Early
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "30px",
          }}
        >
          Giving yourself plenty of time before the session helps reduce
          stress and allows you to settle into the shoot comfortably.
        </p>

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "15px",
          }}
        >
          Have Fun
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "50px",
          }}
        >
          Great photography is about capturing genuine emotion. Laugh,
          interact naturally and enjoy the experience.
        </p>

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
          Book A Session
        </Link>
      </section>
    </main>
  );
}