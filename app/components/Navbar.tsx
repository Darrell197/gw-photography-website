"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Weddings", "/portfolio/weddings"],
  ["Events", "/portfolio/events"],
  ["Lifestyle", "/portfolio/lifestyle"],
  ["Studio", "/portfolio/studio"],
  ["About", "/about"],
  ["Journal", "/blog"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="nav">
        <Link className="nav-logo" href="/" onClick={() => setOpen(false)}>
          GW<small>PHOTOGRAPHY</small>
        </Link>
        <div className="nav-center" aria-label="Studio positioning">
          EDITORIAL PHOTOGRAPHY <span>·</span> MANCHESTER <span>·</span> UK
        </div>
        <div className="nav-links">
          {links.map(([title, href]) => <Link key={href} href={href}>{title}</Link>)}
          <Link className="nav-cta" href="/contact">Enquire</Link>
        </div>
        <button className="menu" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
      </nav>
      {open && <div className="mobile-menu">
        <div className="mobile-menu-kicker">Grace Westray · Photography</div>
        {links.map(([title, href], index) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{title}</Link>)}
        <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-solid mobile-enquire">Check your date <span>↗</span></Link>
      </div>}
    </>
  );
}
