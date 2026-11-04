const features = [
  {
    id: 1,
    icon: "🥩",
    title: "Fresh Ingredients",
    description: "We use fresh and high-quality ingredients in every meal.",
  },
  {
    id: 2,
    icon: "👨‍🍳",
    title: "Expert Chefs",
    description: "Our chefs prepare every dish with passion and experience.",
  },
  {
    id: 3,
    icon: "⚡",
    title: "Fast Delivery",
    description: "Get your favorite meals delivered quickly and fresh.",
  },
  {
    id: 4,
    icon: "❤️",
    title: "Made With Love",
    description: "Every burger is carefully prepared to give you the best experience.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-[#111] px-8 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Why BurgerKo?
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white">
            Why Choose Us
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            We care about every detail to make your dining experience
            unforgettable.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-2xl border border-gray-800 bg-[#181818] p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_8px_30px_rgba(249,153,21,0.2)]"
            >
              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-3xl transition duration-300 group-hover:bg-orange-500">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-bold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
