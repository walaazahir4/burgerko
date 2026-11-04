const categories = [
  {
    name: "Burgers",
    image: "images/burger2.png",
  },
  {
    name: "Pizza",
    image: "images/pizza.png",
  },
  {
    name: "Fries",
    image: "images/fries.png",
  },
  {
    name: "Drinks",
    image: "images/drinks.png",
  },
];
function Categories() {
  return (
    <section className="bg-[#fffaf4] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Explore our menu
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What are you craving?
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-gray-600 sm:text-right">
            Freshly made favorites for every kind of appetite.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <article
              key={category.name}
              className="group relative overflow-hidden rounded-3xl border border-orange-100 bg-white p-5 shadow-[0_8px_30px_rgba(70,40,10,0.06)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_16px_36px_rgba(70,40,10,0.12)] sm:p-6"
            >
              <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-xs font-bold text-orange-500">
                0{index + 1}
              </div>
              <div className="flex h-48 items-center justify-center rounded-2xl bg-[#fff7ed] p-4 sm:h-52">
                <img
                  src={`/${category.image}`}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-1 pt-5">
                <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-lg text-white transition group-hover:bg-orange-500">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
