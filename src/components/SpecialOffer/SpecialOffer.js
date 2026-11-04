function SpecialOffer() {
  return (
    <section className="bg-white px-8 py-16">
      <div className="mx-auto max-w-7xl">

        <div className="relative flex min-h-[350px] items-center overflow-hidden rounded-3xl bg-orange-500 px-10 py-12">

          {/* Content */}
          <div className="relative z-10 max-w-lg">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-100">
              Special Offer
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
              Get 20% Off
              <span className="block text-gray-900">
                Your First Order
              </span>
            </h2>

            <p className="mt-4 max-w-md text-orange-100">
              Enjoy your favorite burgers with a special discount.
              Fresh, juicy and delivered straight to your door.
            </p>

            <button className="mt-7 rounded-full bg-[#111] px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-orange-500">
              Order Now
            </button>
          </div>

          {/* Burger Image */}
          <div className="absolute -right-10 bottom-0 md:right-10">
            <img
              src="images/burger.png"
              alt="Special Burger"
              className="w-[300px] object-contain drop-shadow-2xl md:w-[420px]"
            />
          </div>

          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-400 opacity-60" />

          <div className="absolute -bottom-24 left-1/2 h-64 w-64 rounded-full bg-orange-600 opacity-40" />

        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;