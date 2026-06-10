import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "Top Wedding Venues in The Northwest",
      slug: "top-wedding-venues-North-west",
      excerpt:
        "A guide to some of the most beautiful wedding venues across the North West of England.",
    },
    {
      title: "How To Prepare For A Photoshoot",
      slug: "prepare-for-a-photoshoot",
      excerpt:
        "Simple tips to help you feel relaxed, confident and camera ready.",
    },
    {
      title: "My Favourite Wedding Moments",
      slug: "favourite-wedding-moments",
      excerpt:
        "A look at some unforgettable moments captured throughout the season.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "180px 40px 100px",
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
          Journal
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: "300",
            marginBottom: "30px",
          }}
        >
          Stories & Insights
        </h1>

        <p
          style={{
            color: "#999",
            maxWidth: "700px",
            lineHeight: "1.8",
            marginBottom: "80px",
          }}
        >
          Photography stories, wedding inspiration, planning tips and
          behind-the-scenes moments from GW Photography.
        </p>

        <div
          style={{
            display: "grid",
            gap: "30px",
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                border: "1px solid rgba(214,194,161,0.15)",
                padding: "40px",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "300",
                  marginBottom: "15px",
                }}
              >
                {post.title}
              </h2>

              <p
                style={{
                  color: "#999",
                }}
              >
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}