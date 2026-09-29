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
          Wedding Photography
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: "300",
            marginBottom: "40px",
          }}
        >
          My Favourite Wedding Moments
        </h1>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            fontSize: "1.1rem",
            marginBottom: "30px",
          }}
        >
          One of the things I love most about wedding photography is that no
          two weddings are ever the same. Every couple has their own story,
          personalities and way of celebrating one of the most important days
          of their lives.
        </p>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            fontSize: "1.1rem",
            marginBottom: "60px",
          }}
        >
          While every wedding is unique, there are certain moments that never
          fail to remind me why I love what I do. These are the genuine,
          emotional and often unexpected moments that make every wedding
          unforgettable.
        </p>

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "20px",
          }}
        >
          The Morning Excitement
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "50px",
          }}
        >
          The hours before the ceremony are filled with anticipation.
          Friends and family gather, final touches are made and emotions
          begin to build. Some of my favourite photographs come from these
          quiet moments before the day truly begins.
        </p>

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "20px",
          }}
        >
          Seeing Each Other For The First Time
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "50px",
          }}
        >
          Whether it's at the ceremony or during a private first look,
          there is something incredibly special about the moment a couple
          first see each other. It is often one of the most emotional
          parts of the day and always produces genuine reactions that
          cannot be recreated.
        </p>

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "20px",
          }}
        >
          The Little In-Between Moments
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "50px",
          }}
        >
          Some of the best moments are not planned. A quick glance, a laugh
          between friends, a parent wiping away a tear or a child dancing
          without a care in the world. These candid moments often become
          some of the most treasured photographs.
        </p>

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "20px",
          }}
        >
          Golden Hour Portraits
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "50px",
          }}
        >
          As the sun begins to set, the light becomes soft, warm and
          incredibly flattering. Taking a few minutes away from the
          celebrations for relaxed portraits during golden hour often
          results in some of the most beautiful images of the entire day.
        </p>

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "20px",
          }}
        >
          The Dance Floor
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "60px",
          }}
        >
          Once the formalities are over and everyone relaxes, the dance
          floor comes alive. The energy, laughter and celebration create
          some fantastic memories and often provide the perfect ending to
          an incredible day.
        </p>

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "20px",
          }}
        >
          Why These Moments Matter
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "40px",
          }}
        >
          Years from now, it won't just be the details of the day you'll
          remember. It will be the emotions, the laughter, the people you
          shared it with and the moments that happened naturally. That is
          what wedding photography is really about — preserving memories
          that become more valuable with time.
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
          Enquire About Wedding Photography
        </Link>
      </section>
    </main>
  );
}