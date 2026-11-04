import { useState } from "react";

function CTA({ isOpen }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="bg-white px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-orange-500 px-8 py-16 text-center shadow-[0_10px_40px_rgba(249,153,21,0.3)] md:px-16">

          {/* Decorative circles */}
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
          <div className="absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-black/10" />

          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-100">
              Hungry?
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Your Next Favorite Burger
              <span className="block">Is Waiting For You!</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-orange-50">
              Fresh ingredients, juicy burgers, and unforgettable flavors.
              Don't wait — order your favorite meal today!
            </p>

            {isOpen && (
              <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-white p-6 text-left text-gray-900 shadow-xl md:p-8">
                <h3 className="text-2xl font-bold">Get in touch</h3>
                <p className="mt-2 text-sm text-gray-600">Send us a message and we’ll get back to you soon.</p>
                {submitted && (
                  <p className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-800" role="status">
                    Thanks! Your message is ready and has been submitted.
                  </p>
                )}
                <form className="mt-5 space-y-4" onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
                  <div>
                    <label className="mb-1 block text-sm font-semibold" htmlFor="contact-name">Name</label>
                    <input id="contact-name" name="name" type="text" autoComplete="name" required minLength={2} maxLength={80} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold" htmlFor="contact-email">Email</label>
                    <input id="contact-email" name="email" type="email" autoComplete="email" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold" htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" name="message" required minLength={10} maxLength={1000} rows={4} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200" />
                  </div>
                  <button type="submit" className="rounded-full bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600">Send message</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
