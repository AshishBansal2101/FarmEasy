import React from "react";
import "./Home.css";
import home_1 from "../../images/home_1.jpg";
import home_2 from "../../images/home_2.jpg";
import home_3 from "../../images/home_3.jpg";
import Blog from "./Blog.js";
import Team from "./Team.js";
import Feature from "./Feature.js";
import Faq from "./Faq.js";
const Home = () => {
  return (
    <>
      <div class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
        <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">Mother hearth host your travel</span>
          </h2>
          <p class="text-md mt-4 text-gray-400">
            The state of Utah in the united states is home to lots of beautiful
            National parks, Bryce national canion park ranks as three of the
            most magnificient &amp; awe inspiring.
          </p>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                class="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-8 p-8 lg:p-24">
          <img src={home_1} class="rounded-lg w-1/2" alt="Tree" />
          <div>
            <img src={home_2} class="rounded-lg mb-8" alt="Tree" />
            <img src={home_3} class="rounded-lg" alt="Tree" />
          </div>
        </div>
      </div>
      <Blog />

      <Feature />
      <Team />
      <Faq />
    </>
  );
};

export default Home;
