import { useState } from "react";

function Navbar({ onContactClick }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signedInEmail, setSignedInEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function openContact() {
    onContactClick();
    setMenuOpen(false);
  }

  function handleLogin(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setSignedInEmail(form.elements.email.value.trim());
    setLoginOpen(false);
    form.reset();
  }

  return (
    <>
    <nav className="fixed z-50 w-full bg-black/70 px-5 py-4 shadow-md backdrop-blur-md sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#home" onClick={() => setMenuOpen(false)} className="text-2xl font-bold text-orange-500">BurgerKo</a>

      <ul className="hidden items-center gap-8 md:flex">
        <li>
          <a href="#home" 
             className="text-white transition hover:text-orange-500">
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="text-white transition hover:text-orange-500"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#service"
            className="text-white transition hover:text-orange-500"
          >
            Services
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={openContact}
            className="text-white transition hover:text-orange-500"
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="hidden items-center gap-3 md:flex">
      <button
        type="button"
        onClick={() => setLoginOpen(true)}
        className="rounded-lg bg-orange-500 px-5 py-2 text-white transition hover:bg-orange-600"
      >
        {signedInEmail ? `Hi, ${signedInEmail.split("@")[0]}` : "Login"}
      </button>

      <a href="#contact" onClick={openContact} className="rounded-2xl bg-white p-3 text-base font-bold text-orange-500 shadow-[0_4px_10px_rgba(128,128,128,0.25)]">
        Contact us
      </a>
      </div>

      <button
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/20 text-white md:hidden"
      >
        <span className={`h-0.5 w-5 bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`h-0.5 w-5 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`h-0.5 w-5 bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>
      {menuOpen && (
        <div id="mobile-navigation" className="absolute left-0 top-full w-full border-t border-white/10 bg-[#151515] px-5 py-5 shadow-xl md:hidden">
          <ul className="flex flex-col gap-1">
            <li><a href="#home" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 text-white hover:bg-white/10">Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 text-white hover:bg-white/10">About</a></li>
            <li><a href="#service" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 text-white hover:bg-white/10">Services</a></li>
            <li><a href="#contact" onClick={openContact} className="block rounded-lg px-3 py-3 text-white hover:bg-white/10">Contact</a></li>
          </ul>
          <div className="mt-4 flex gap-3 border-t border-white/10 pt-4">
            <button type="button" onClick={() => { setLoginOpen(true); setMenuOpen(false); }} className="flex-1 rounded-lg bg-orange-500 px-4 py-3 font-semibold text-white hover:bg-orange-600">
              {signedInEmail ? `Hi, ${signedInEmail.split("@")[0]}` : "Login"}
            </button>
            <a href="#contact" onClick={openContact} className="flex-1 rounded-lg bg-white px-4 py-3 text-center font-semibold text-orange-600">Contact us</a>
          </div>
        </div>
      )}

      </div>
    </nav>
      {loginOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setLoginOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-title"
            className="w-full max-w-md rounded-3xl bg-white p-7 text-gray-900 shadow-2xl sm:p-9"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-orange-500">Welcome back</p>
                <h2 id="login-title" className="mt-2 text-3xl font-extrabold">Log in</h2>
              </div>
              <button
                type="button"
                aria-label="Close login form"
                onClick={() => setLoginOpen(false)}
                className="rounded-full bg-gray-100 px-3 py-1 text-xl text-gray-600 hover:bg-gray-200"
              >
                ×
              </button>
            </div>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label htmlFor="login-email" className="mb-1 block text-sm font-semibold">Email</label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <div>
                <label htmlFor="login-password" className="mb-1 block text-sm font-semibold">Password</label>
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  minLength={8}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
                <p className="mt-1 text-xs text-gray-500">Use at least 8 characters.</p>
              </div>
              <button type="submit" className="w-full rounded-xl bg-orange-500 px-5 py-3 font-bold text-white transition hover:bg-orange-600">
                Log in
              </button>
            </form>
          </section>
        </div>
      )}
    </>
  );
}

export default Navbar;
