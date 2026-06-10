import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "12px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(214,194,161,0.15)",
        zIndex: 1000,
      }}
    >
      <Link href="/">
        <Image
          src="/images/gw-logo-gold.png"
          alt="Grace Westray Photography"
          width={140}
          height={70}
          priority
        />
      </Link>

      <div
        style={{
          display: "flex",
          gap: "35px",
          textTransform: "uppercase",
          fontSize: "13px",
          letterSpacing: "2px",
        }}
      >
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link
          href="/portfolio/weddings"
          style={{ color: "white", textDecoration: "none" }}
        >
          Weddings
        </Link>

        <Link
          href="/portfolio/events"
          style={{ color: "white", textDecoration: "none" }}
        >
          Events
        </Link>

        <Link
          href="/portfolio/lifestyle"
          style={{ color: "white", textDecoration: "none" }}
        >
          Lifestyle
        </Link>
<Link
  href="/portfolio/studio"
  style={{ color: "white", textDecoration: "none" }}
>
  Studio
</Link>
        <Link
          href="/about"
          style={{ color: "white", textDecoration: "none" }}
        >
          About
        </Link>
<Link
  href="/blog"
  style={{ color: "white", textDecoration: "none" }}
>
  Blog
</Link>
        <Link
          href="/contact"
          style={{ color: "white", textDecoration: "none" }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}