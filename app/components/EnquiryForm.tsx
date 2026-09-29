"use client";

import { FormEvent, useState } from "react";

const email = "westraygrace@gmail.com";
const options = ["Wedding", "Event", "Lifestyle", "Studio", "Other"];

export default function EnquiryForm() {
  const [type, setType] = useState("Wedding");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `${type} enquiry — Grace Westray Photography`;
    const body = [
      `Name: ${form.get("name") || ""}`,
      `Email: ${form.get("email") || ""}`,
      `Photography: ${type}`,
      `Date: ${form.get("date") || ""}`,
      `Location: ${form.get("location") || ""}`,
      "",
      `${form.get("message") || ""}`,
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-intro"><span>01</span><p>Start with the essentials.</p></div>
      <div className="form-field">
        <label>Photography</label>
        <div className="choice-row">{options.map((option) => <button key={option} type="button" className={type === option ? "choice active" : "choice"} onClick={() => setType(option)}>{option}</button>)}</div>
      </div>
      <div className="form-grid">
        <label><span>Name</span><input name="name" required placeholder="Your name" /></label>
        <label><span>Email</span><input name="email" type="email" required placeholder="you@example.com" /></label>
        <label><span>Date</span><input name="date" type="date" /></label>
        <label><span>Location</span><input name="location" placeholder="Venue / town / county" /></label>
      </div>
      <label className="form-message"><span>A little more about the day</span><textarea name="message" rows={5} placeholder="Tell Grace what you are looking forward to, who will be there, or anything that matters to you..." /></label>
      <div className="form-submit"><p>Your email app will open with the details neatly prepared for Grace.</p><button className="btn btn-solid" type="submit">Send enquiry <span>↗</span></button></div>
    </form>
  );
}
