import Navbar from "../components/Navbar";
import EnquiryForm from "../components/EnquiryForm";

export default function Contact() {
  return (
    <main className="page-shell">
      <Navbar />
      <section className="container contact">
        <div className="contact-grid">
          <div>
            <div className="eyebrow">Enquiries</div>
            <h1 className="display">Let&apos;s make something worth keeping.</h1>
            <p className="contact-intro">
              Tell Grace the essentials — what you are planning, when it is happening and where.
              There is no need to have everything figured out before you get in touch.
            </p>
            <div className="contact-promise">
              <span>01</span>
              <p>Start with your date.<br />Let the rest unfold from there.</p>
            </div>
          </div>
          <div>
            <div className="contact-card">
              <p>Your enquiry comes directly to Grace. She can then reply with availability and the next steps for your plans.</p>
              <p className="contact-email"><a className="contact-link" href="mailto:westraygrace@gmail.com">westraygrace@gmail.com</a></p>
              <p className="contact-location">Manchester · UK · Selected destinations</p>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
