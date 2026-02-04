// Call to Action section
export default function CallToAction() {
  return (
    <section className="cta">
      <h3>Request your journey</h3>
      <form>
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your email" required />
        <textarea placeholder="Tell us about your dream journey" required></textarea>
        <button type="submit">Send</button>
      </form>
      <p>or <a href="https://wa.me/">talk to us on WhatsApp</a></p>
    </section>
  );
}