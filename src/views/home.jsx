import React from "react";
import { Link } from "react-router-dom";
import Banner from "./banner";
export default function home() {
  return (
    <div className="">
      <Banner />
      <main className="bg-slate-100 py-10 px-2 my-2">
        <h2>Feature</h2>
        <div
          className="border 
        border-gray-200 py-3 
        px-2 shadow-md rounded-lg
         shadow-gray-300/50 "
        >
          <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img
              class="w-24 h-24 md:w-56 md:h-auto md:rounded-none rounded-full mx-auto"
              src="https://images.unsplash.com/photo-1624313976965-6410317af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              width="384"
              height="512"
            ></img>
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p class="text-lg font-medium">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
                <div class="text-slate-700 dark:text-slate-500">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </main>
    </div>
  );
}
