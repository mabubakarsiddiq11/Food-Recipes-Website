import React from "react";
import { Link } from "react-router-dom";

const recipes =[
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
]

function RecipesSec() {


 
  return (
    <div>
      <div className="flex justify-between items-center container mx-auto ">
        <h1 className="text-5xl font-bold">
          Explore <span className="text-green-500">Recipes</span>
        </h1>
        <Link to="/recipes">
          <p className="text-red-500 font-medium">View more</p>
        </Link>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-11 mx-auto">
        <div className="flex flex-wrap -m-4">
            {recipes?.map((item) => (
              <div key={item.id} className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={item.image}
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      {item.name}
                    </h2>
                    <h3 className="text-gray-500 mb-3">{item.role}</h3>
                    <p className="mb-4">{item.description}</p>
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

export default RecipesSec;
