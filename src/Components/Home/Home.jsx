import React from "react";
import { Link } from "react-router-dom";
import AddRecipesSec from "../AddRecipes/AddRecipesSec";
import Blog from '../Blog/BlogSec'
import RecipesSec from "../Recipes/RecipesSec";
import TouchSec from "../TouchSec/TouchSec";
import AboutUs from "../AboutUs/AboutUs";

function Home() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold text-gray-900">
              Your Daily Dish
              <br className="hidden lg:inline-block" />
              A <span className="text-green-500">Food</span>Journey
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center flex-col ">
              <Link to="/signUp">
                <button className="font-bold inline-flex text-white bg-green-500 border-0 py-1 px-10  focus:outline-none hover:bg-green-600 rounded text-lg">
                  SignUp
                </button>
              </Link>
              <Link to='/login'>
              <p className="text-sm pt-2">Do you have account? <span className="text-green-500">Login</span></p>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://img.freepik.com/free-photo/top-view-delicious-mayyonaise-salad-with-greens-vegetables-dark-space_140725-75694.jpg"
            />
          </div>
        </div>
      </section>
      <AddRecipesSec/>
      <Blog/>
      <RecipesSec/>
      <TouchSec/>
      
    </div>

    
  );
}

export default Home;
