import React from 'react'
import {Link} from 'react-router-dom'

function RecipesSec() {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="https://cdn.prod.website-files.com/63bb7fe09d70bb7dc8e86719/63c4e43459c35a2889466e8d_776-x-528-Add.webp"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font  sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
        Share Your <span className='text-green-500'> Recipe</span>
      </h1>
      <p className="mb-8 leading-relaxed">
        Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag
        typewriter affogato, hella selvage wolf narwhal dreamcatcher.
      </p>
      <div className="flex w-full md:justify-start justify-center items-end">
     
      <Link to="/addRecipe">
            <button className="font-bold inline-flex text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-lg">
              Create New Recipe
            </button>
          </Link>
      </div>
      <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
        Neutra shabby chic ramps, viral fixie.
      </p>
    
    </div>
  </div>
</section>

    </div>
  )
}

export default RecipesSec
