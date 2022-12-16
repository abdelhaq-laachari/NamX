import React from "react";
import Animation from "../../components/Animation/Animation";
import Text from "../../components/text/Text";
function Model() {
  return (
    <div>
      {/* <section>
        <div class="sm:grid grid-cols-5 grid-rows-2 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">
          <div class="mt-16 grid space-y-4">
            <button
              id="Vitesse"
              class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                         hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
              <div class="relative flex items-center space-x-4 justify-center">
                <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  Vitesse
                </span>
              </div>
            </button>
          </div>

          <div class="h-full col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md flex items-center">
            <Animation />
          </div>
        </div>
      </section> */}
      <Animation/>
    </div>
  );
}

export default Model;
