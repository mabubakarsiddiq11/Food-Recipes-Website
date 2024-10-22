import React from 'react'

function AboutUs() {
  return (
    <div>
      <section className="text-black font-bold body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <img
          alt="gallery"
          className="w-full object-cover h-full object-center block opacity-65 absolute inset-0"
          src="https://img.freepik.com/premium-photo/group-chefs-working-kitchen_146105-18605.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
        />
        <div className="text-center relative z-10 w-full">
          <h2 className="text-5xl text-zinc-900 font-bold title-font mb-2">
            Perfect Team
          </h2>
          <p className="leading-relaxed">
            Skateboard +1 mustache fixie paleo lumbersexual.
          </p>
          <a className="mt-3 text-green-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block opacity-65 absolute inset-0"
              src="https://img.freepik.com/premium-photo/chef-prepares-salad-with-green-background_1217673-326567.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-zinc-900  font-bold title-font mb-2">
               Perfect Head
              </h2>
              <p className="leading-relaxed">
                Skateboard +1 mustache fixie paleo lumbersexual.
              </p>
              <a className="mt-3 text-green-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block opacity-65 absolute inset-0"
              src="https://img.freepik.com/free-photo/man-cooking_144627-38526.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-zinc-900 font-bold title-font mb-2">
                Shooting Stars
              </h2>
              <p className="leading-relaxed">
                Skateboard +1 mustache fixie paleo lumbersexual.
              </p>
              <a className="mt-3 text-green-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default AboutUs

