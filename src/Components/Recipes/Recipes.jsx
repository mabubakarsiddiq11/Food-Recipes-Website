import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { getDocs, recipeCollection } from "../AddRecipes/Firebase";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const data = async () => {
      setLoading(true); 
      const querySnapshot = await getDocs(recipeCollection);
      const recipesData = []; 
      querySnapshot.forEach((doc) => {
        recipesData.push(doc.data());
      });
      setRecipes(recipesData); 
      setLoading(false); 
    };
    data();
  }, []); 

  return (
    <div>
      {loading ? ( 
        <h1 className="text-center font-bold mt-5">Loading recipes...</h1> 
      ) : (
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
              {recipes?.map((recipe, index) => (
                <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt={recipe?.name}
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={recipe?.image}
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        {recipe?.name}
                      </h2>
                      <h3 className="text-gray-500 mb-3">{recipe?.role}</h3>
                      <p className="mb-4">{recipe?.description}</p>
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
      )}
    </div>
  );
}

export default Recipes;
