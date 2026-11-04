import { useState } from "react";

const slides = [
  {
    eyebrow: "Fresh & Delicious",
    title: "The Best Burger",
    highlight: "In Town",
    description:
      "Enjoy our juicy handmade burgers made with fresh ingredients and our special homemade sauce.",
  },
  {
    eyebrow: "Made With Love",
    title: "Big Flavor",
    highlight: "Every Bite",
    description:
      "From the first bite to the last, discover a delicious combination of crisp toppings and bold flavor.",
  },
  {
    eyebrow: "Your New Favorite",
    title: "Good Food",
    highlight: "Good Mood",
    description:
      "Gather around a freshly made meal and make every moment a little more delicious.",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];
  const showPreviousSlide = () =>
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  const showNextSlide = () =>
    setActiveSlide((current) => (current + 1) % slides.length);

  return (
  
    <section className="bg-[#111] text-white">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center gap-10 px-8 py-16">

        {/* Text */}
        <div className="flex-1">
          <p className="mb-3 text-sm uppercase tracking-widest text-orange-400" aria-live="polite">
            {slide.eyebrow}
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            {slide.title}
            <span className="block text-orange-500">{slide.highlight}</span>
          </h1>

          <p className="mt-5 max-w-md text-gray-400">
            {slide.description}
          </p>

          <button className="mt-8 rounded-full bg-orange-500 px-7 py-3 font-semibold text-black">
            Order Now
          </button>
        </div>

        {/* Image */}
        <div className="flex flex-1 justify-center">
          <img
            src="/images/burger.png"
            alt="Burger"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-5 pb-8" aria-label="Featured message carousel">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={showPreviousSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xl text-white transition hover:border-orange-500 hover:bg-orange-500"
        >
          <span aria-hidden="true">&#8592;</span>
        </button>
        <div className="flex items-center gap-2" aria-label="Choose a featured message">
          {slides.map((item, index) => (
            <button
              key={item.eyebrow}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
              onClick={() => setActiveSlide(index)}
              className={`h-2 rounded-full transition-all ${activeSlide === index ? "w-8 bg-orange-500" : "w-2 bg-gray-600 hover:bg-gray-400"}`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          onClick={showNextSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xl text-white transition hover:border-orange-500 hover:bg-orange-500"
        >
          <span aria-hidden="true">&#8594;</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
