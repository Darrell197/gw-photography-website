import Navbar from "../components/Navbar";
import Link from "next/link";

export default function About() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="container about-hero">
        <div className="about-grid">
          <div className="media portrait about-portrait">
            <img src="/images/gracecamera.jpg" alt="Grace Westray with her camera" />
            <div className="portrait-note">Grace Westray · Photographer</div>
          </div>

          <div className="about-copy">
            <div className="eyebrow">About Grace</div>
            <h1 className="display">The person behind the photographs.</h1>
            <p className="about-lead">
              Some days are over almost as soon as they begin. The dress, the nerves, the laughter,
              the people you love gathered in one place — and then suddenly it is all a memory.
            </p>
            <p>
              Grace Westray photographs weddings, events, people and creative projects with a calm,
              editorial eye. Her aim is not to turn a real moment into a performance. It is to notice
              the beautiful things already happening: the glance across a room, the hands held tightly,
              the light falling at exactly the right time, and all the little details you were too busy
              living to see.
            </p>
            <p>
              The result is photography that feels polished without feeling precious, emotional without
              feeling forced, and personal enough to become part of the story itself. Years from now,
              the photographs should do more than remind you what the day looked like. They should take
              you back there.
            </p>

            <div className="about-signature">Grace Westray · Photography</div>
            <Link className="btn btn-solid about-cta" href="/contact">
              Check your date <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="about-philosophy">
        <div className="container">
          <div className="about-section-label">
            <span>01</span>
            <span>The experience</span>
          </div>
          <div className="about-statement">
            <div className="eyebrow">Beautifully observed</div>
            <h2 className="display">You get to be there.<br />Grace notices the rest.</h2>
            <p>
              Good wedding photography should never make you feel like you spent your day performing
              for a camera. It should leave space for you to be completely present — while someone with
              an instinct for light, emotion and timing quietly preserves the pieces you will want back.
            </p>
          </div>

          <div className="about-pillars">
            <article>
              <span>01</span>
              <h3>Calm direction</h3>
              <p>Enough guidance to make portraits feel effortless, never over-produced.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Real moments</h3>
              <p>The expressions, movement and in-between moments that give a day its character.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Editorial finish</h3>
              <p>Thoughtful composition, beautiful light and imagery designed to stand the test of time.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-closing">
        <div className="container">
          <div className="eyebrow">For the memories you cannot recreate</div>
          <p className="display">The day happens once.<br />The photographs let you return.</p>
          <Link className="btn btn-solid" href="/contact">Start with your date <span>↗</span></Link>
        </div>
      </section>
    </main>
  );
}
