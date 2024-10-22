import React from "react";
import Header from "../Header/Header";

 export const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    role: "Italian Dish",
    description: "A classic Roman pasta dish made with eggs, cheese, pancetta, and pepper.",
    image: "https://img.freepik.com/free-photo/top-close-up-view-cabbage-dish-cabbage-cutting-board-tree-branches_140725-72350.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    role: "Indian Dish",
    description: "Grilled chicken chunks in a spicy sauce made with tomatoes and cream.",
    image: "https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246080.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
  },
  {
    id: 3,
    name: "Beef Tacos",
    role: "Mexican Dish",
    description: "Soft or hard shell tacos filled with seasoned beef, lettuce, cheese, and salsa.",
    image: "https://img.freepik.com/free-photo/mexican-tacos-with-beef-tomato-sauce-salsa_2829-14194.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
  },
  {
    id: 4,
    name: "Vegetable Stir Fry",
    role: "Asian Dish",
    description: "A mix of fresh vegetables stir-fried with soy sauce and sesame oil.",
    image: "https://img.freepik.com/premium-photo/pan-vegetables-with-word-vegetables-it_198067-755857.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
  },
  {
    id: 5,
    name: "Pancakes",
    role: "Breakfast Dish",
    description: "Fluffy pancakes served with syrup and butter.",
    image: "https://img.freepik.com/free-photo/pancakes-with-syrup_144627-1030.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
  },
  {
    id: 6,
    name: "Caesar Salad",
    role: "Salad",
    description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.",
    image: "https://img.freepik.com/free-photo/caesar-salad_144627-1031.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
  },
  {
    id: 7,
    name: "Sushi",
    role: "Japanese Dish",
    description: "Vinegared rice accompanied by various ingredients, including seafood and vegetables.",
    image: "https://img.freepik.com/free-photo/sushi_144627-1032.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
  },
  {
    id: 8,
    name: "Chocolate Cake",
    role: "Dessert",
    description: "Rich and moist chocolate cake topped with chocolate frosting.",
    image: "https://img.freepik.com/free-photo/chocolate-cake_144627-1033.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
  },
  {
    id: 9,
    name: "Greek Yogurt Parfait",
    role: "Snack",
    description: "Layers of Greek yogurt, granola, and fresh fruits.",
    image: "https://img.freepik.com/free-photo/yogurt-parfait_144627-1034.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
  },
  {
    id: 10,
    name: "Lentil Soup",
    role: "Soup",
    description: "Hearty lentil soup made with vegetables and spices.",
    image: "https://img.freepik.com/free-photo/lentil-soup_144627-1035.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
  },
  {
    id: 11,
    name: "BBQ Ribs",
    role: "Main Course",
    description: "Tender ribs coated in a smoky BBQ sauce.",
    image: "https://img.freepik.com/free-photo/bbq-ribs_144627-1036.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
  },
  {
    id: 12,
    name: "Fruit Smoothie",
    role: "Beverage",
    description: "A refreshing smoothie made with mixed fruits and yogurt.",
    image: "https://img.freepik.com/free-photo/fruit-smoothie_144627-1037.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
  },
];

function Recipes() {


  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-medium title-font mb-3 text-gray-900">
              All <span className="text-green-500">Recipes</span>
            </h1>
            <p className="-mb-9 lg:w-2/3 mx-auto leading-relaxed text-base">
              Discover a variety of delicious recipes to try at home.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {recipes.map(recipe => (
              <div key={recipe.id} className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt={recipe.name}
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={recipe.image}
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      {recipe.name}
                    </h2>
                    <h3 className="text-gray-500 mb-3">{recipe.role}</h3>
                    <p className="mb-4">{recipe.description}</p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Recipes;

    
