import React from "react";
import { Link } from "react-router-dom";
import { GiForkKnifeSpoon } from "react-icons/gi";

function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font font-bold">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl flex items-center gap-1">
              <GiForkKnifeSpoon />Perfect <span className="text-green-500">Recipe</span>
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
           <Link to='/'> <a className="mr-5 hover:text-gray-900">Home</a></Link>
           <Link to='/recipes'> <a className="mr-5 hover:text-gray-900">Recipe</a></Link>
            <a className="mr-5 hover:text-gray-900">Add Recipe</a>
           <Link to='/blog'> <a className="mr-5 hover:text-gray-900">Blog</a></Link>
           <Link to='/aboutUs'> <a className="mr-5 hover:text-gray-900">About Us</a></Link>
         
          </nav>

          <Link to="/signUp">
            <button className="font-bold inline-flex text-white bg-green-500 border-0 py-1 px-4 mx-3 focus:outline-none hover:bg-green-600 rounded text-lg">
              SignUp
            </button>
          </Link>
          <Link to="/login">
            <button className="font-bold inline-flex text-white bg-green-500 border-0 py-1 px-4  focus:outline-none hover:bg-green-600 rounded text-lg">
              Login
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
