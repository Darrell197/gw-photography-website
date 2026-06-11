"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        boxSizing: "border-box",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(214,194,161,0.15)",
        zIndex: 1000,
      }}
    >
      {/* Logo + Branding */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
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

        <span
          style={{
            color: "#D6C2A1",
            fontSize: "9px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginTop: "-8px",
            marginLeft: "12px",
            opacity: 0.8,
          }}
        >
          Luxury Photography
        </span>
      </div>

      {/* Menu Button */}

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          color: "#D6C2A1",
          fontSize: "12px",
          letterSpacing: "4px",
          textTransform: "uppercase",
          cursor: "pointer",
          fontFamily: "Georgia, serif",
        }}
      >
        Menu
      </button>

      {/* Dropdown */}

      <div
        style={{
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          position: "absolute",
          top: "85px",
          right: "20px",
          backgroundColor: "#050505",
          padding: "25px",
          border: "1px solid rgba(214,194,161,0.2)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          gap: "15px",
          textTransform: "uppercase",
          fontSize: "12px",
          letterSpacing: "3px",
          fontFamily: "Georgia, serif",
          alignItems: "flex-start",
        }}
      >
        <Link href="/" style={{ color: "#D6C2A1", textDecoration: "none" }}>
          Home
        </Link>

        <Link
          href="/portfolio/weddings"
          style={{ color: "#D6C2A1", textDecoration: "none" }}
        >
          Weddings
        </Link>

        <Link
          href="/portfolio/events"
          style={{ color: "#D6C2A1", textDecoration: "none" }}
        >
          Events
        </Link>

        <Link
          href="/portfolio/lifestyle"
          style={{ color: "#D6C2A1", textDecoration: "none" }}
        >
          Lifestyle
        </Link>

        <Link
          href="/portfolio/studio"
          style={{ color: "#D6C2A1", textDecoration: "none" }}
        >
          Studio
        </Link>

        <Link
          href="/about"
          style={{ color: "#D6C2A1", textDecoration: "none" }}
        >
          About
        </Link>

        <Link
          href="/blog"
          style={{ color: "#D6C2A1", textDecoration: "none" }}
        >
          Blog
        </Link>

        <Link
          href="/contact"
          style={{ color: "#D6C2A1", textDecoration: "none" }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}