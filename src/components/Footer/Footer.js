function Footer() {
  return (
    <footer className="bg-[#111] px-8 pt-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">
            BurgerKo
          </h2>

          <p className="mt-4 max-w-xs leading-7 text-gray-400">
            Delicious burgers made with fresh ingredients and served
            with love. Your favorite taste, delivered to your door.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#222] transition hover:bg-orange-500"
            >
              f
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#222] transition hover:bg-orange-500"
            >
              i
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#222] transition hover:bg-orange-500"
            >
              x
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="/" className="transition hover:text-orange-500">
                Home
              </a>
            </li>

            <li>
              <a href="/about" className="transition hover:text-orange-500">
                About
              </a>
            </li>

            <li>
              <a href="/menu" className="transition hover:text-orange-500">
                Menu
              </a>
            </li>

            <li>
              <a href="/contact" className="transition hover:text-orange-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Opening Hours
          </h3>

          <div className="space-y-3 text-gray-400">
            <p>
              Monday - Friday
              <span className="block text-white">
                10:00 AM - 11:00 PM
              </span>
            </p>

            <p>
              Saturday - Sunday
              <span className="block text-white">
                11:00 AM - 12:00 AM
              </span>
            </p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-400">
            <p>📍 123 Food Street, Cairo</p>

            <p>📞 +20 100 123 4567</p>

            <p>✉️ hello@burgerko.com</p>
          </div>

          <button className="mt-6 rounded-full bg-orange-500 px-6 py-2.5 font-semibold text-black transition hover:bg-orange-400">
            Order Now
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-gray-500 md:flex-row">
          <p>
            © 2026 BurgerKo. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-orange-500">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-orange-500">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
