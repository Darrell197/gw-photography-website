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
          Wedding Venues
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: "300",
            marginBottom: "40px",
          }}
        >
          Top Wedding Venues In The North West
        </h1>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            fontSize: "1.1rem",
            marginBottom: "30px",
          }}
        >
          The North West of England is home to some of the most beautiful
          wedding venues in the UK. From luxury country estates and elegant
          manor houses to rustic barns and iconic city venues, there is a
          venue to suit every couple's vision and style.
        </p>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            fontSize: "1.1rem",
            marginBottom: "60px",
          }}
        >
          Choosing the perfect venue is one of the biggest decisions you'll
          make during wedding planning. Not only does it set the atmosphere
          for your day, but it also creates the backdrop for memories and
          photographs you'll treasure forever.
        </p>

        {/* VENUE 1 */}

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "15px",
          }}
        >
          Colshaw Hall, Cheshire
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "50px",
          }}
        >
          Set within 300 acres of beautiful Cheshire countryside, Colshaw
          Hall is one of the region's most prestigious wedding venues.
          Couples love its elegant interiors, exclusive-use approach and
          stunning grounds.
          <br />
          <br />
          From a photography perspective, the landscaped gardens, lake,
          tree-lined avenues and luxury bridal suite provide incredible
          opportunities for timeless wedding imagery throughout the day.
        </p>

        {/* VENUE 2 */}

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "15px",
          }}
        >
          Merrydale Manor, Cheshire
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "50px",
          }}
        >
          Merrydale Manor has quickly become one of the North West's most
          sought-after wedding venues. Combining contemporary architecture
          with beautiful countryside surroundings, it offers a luxurious and
          modern wedding experience.
          <br />
          <br />
          The lakeside views and bright interiors make it a fantastic venue
          for natural, elegant wedding photography.
        </p>

        {/* VENUE 3 */}

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "15px",
          }}
        >
          Delamere Manor, Cheshire
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "50px",
          }}
        >
          Delamere Manor offers a private luxury wedding experience within a
          stunning country estate. With accommodation on-site and exclusive
          access to the venue, couples can truly make the space their own.
          <br />
          <br />
          The beautiful grounds and contemporary interiors create a perfect
          balance between classic romance and editorial-style photography.
        </p>

        {/* VENUE 4 */}

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "15px",
          }}
        >
          Owen House Wedding Barn, Cheshire
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "50px",
          }}
        >
          Known for its relaxed atmosphere and character-filled setting,
          Owen House Wedding Barn is perfect for couples seeking a more
          rustic and personal celebration.
          <br />
          <br />
          The barn itself provides beautiful textures and warm tones while
          the surrounding countryside delivers endless opportunities for
          natural portraits.
        </p>

        {/* VENUE 5 */}

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "15px",
          }}
        >
          Ashfield House, Lancashire
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "50px",
          }}
        >
          Ashfield House is an award-winning venue that blends luxury,
          charm and exceptional service. The venue's beautiful gardens and
          elegant ceremony spaces create a wonderful setting for weddings
          throughout every season.
          <br />
          <br />
          Photographers love the variety of outdoor portrait locations and
          natural light throughout the property.
        </p>

        {/* VENUE 6 */}

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "15px",
          }}
        >
          The Midland Hotel, Manchester
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "50px",
          }}
        >
          For couples dreaming of a city wedding, The Midland Hotel offers
          timeless elegance and iconic Manchester architecture.
          <br />
          <br />
          Its grand interiors, sweeping staircases and historic character
          create a sophisticated backdrop for wedding photography.
        </p>

        {/* VENUE 7 */}

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "15px",
          }}
        >
          Arley Hall & Gardens, Cheshire
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "60px",
          }}
        >
          Arley Hall is one of Cheshire's most picturesque wedding venues.
          Famous for its spectacular gardens and historic architecture, it
          provides a truly romantic setting for a wedding celebration.
          <br />
          <br />
          Throughout spring and summer the gardens become a dream location
          for wedding portraits filled with colour and natural beauty.
        </p>

        {/* CONCLUSION */}

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "20px",
          }}
        >
          Choosing The Right Venue
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "20px",
          }}
        >
          Every wedding venue offers something unique. Whether you're
          planning a luxury country estate wedding, a rustic barn
          celebration or a stylish city event, the right venue should feel
          like an extension of your personality and vision.
        </p>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            marginBottom: "60px",
          }}
        >
          The North West is filled with incredible venues, and whichever one
          you choose, investing in beautiful photography ensures those
          memories can be relived for years to come.
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