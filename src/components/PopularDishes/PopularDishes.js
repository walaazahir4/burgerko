const dishes = [
  {
    id: 1,
    name: "Classic Beef Burger",
    description: "Juicy beef patty with fresh vegetables and special sauce.",
    price: "$12.99",
    image: "images/burger.png",
  },
  {
    id: 2,
    name: "Cheese Pizza",
    description: "Freshly baked pizza with mozzarella cheese and tomato sauce.",
    price: "$14.99",
    image: "images/pizza.png",
  },
  {
    id: 3,
    name: "Crispy Chicken",
    description: "Crispy fried chicken served with our special sauce.",
    price: "$11.99",
    image: "images/friedChicken.png",
  },
  {
    id: 4,
    name: "Chocolate Dessert",
    description: "Rich chocolate dessert with a delicious creamy topping.",
    price: "$7.99",
    image: "images/dessert.png",
  },
];
function PopularDishes() {
  return (
    <section className="bg-[#111] px-8 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Our Menu
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white">Popular Dishes</h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Discover our most loved dishes, freshly prepared just for you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(249,153,21,0.2)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(249,153,21,0.4)]"
            >
              {/* Image */}
              <div className="flex h-52 items-center justify-center bg-gray-100">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-contain p-4"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900">{dish.name}</h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {dish.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xl font-bold text-orange-500">
                    {dish.price}
                  </span>

                  <button className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-orange-400">
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default PopularDishes;
