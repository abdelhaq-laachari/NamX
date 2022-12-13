import React from "react";
import './Footer.css'
function Footer() {
  return (
    <div>
      <footer class="relative bg-[#011D25]  pt-8 pb-6">
        <div class="container text-white  mx-auto px-4">
          <div class="flex flex-wrap text-left flex justify-around  lg:text-left">
            <div class="w-full lg:w-4/12 px-4">
              <h4 class="text-3xl fonat-semibold text-blueGray-700">
                FONDATEURS
              </h4>
              <h5 class="text-lg w-1/2 mt-0 mb-2 text-blueGray-600">
                NamX est un constructeur automobile premium fondé par Faouzi
                ANNAJAH, entrepreneur et Thomas de LUSSAC, designer français.{" "}
              </h5>

              <div class="mt-6 lg:mb-0 mb-6">
                <button
                  class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-twitter"></i>
                </button>
                <button
                  class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-facebook-square"></i>
                </button>
                <button
                  class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-dribbble"></i>
                </button>
                <button
                  class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-github"></i>
                </button>
              </div>
            </div>

            <div class="w-full lg:w-2/12  px-4">
              {/* logo sur centre footr */}
              <div class="relative items-center flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100">
                <img
                  class="w-1/2 h-1/2"
                  src="https://www.namx-hydrogen.com/svg/logo-namx.svg"
                  alt="logo"
                />
                {/* button  */}
                <div class="flex flex-wrap items-center pt-10 pr-6 justify-center">
                    <div class="w-full lg:w-9/12 px-4 lg:order-2 lg:text-right lg:self-center">
                    <div id="container">
    <div class="center">
    <button type="button" class="inline-flex text-white bg-gradient-to-r from-indigo-600 to-green-600 hover:bg-gradient-to-l focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2">
               
               <div class='text-xl font-mono font-bold pt-0.5'>
               Précommande
               </div>
           </button>
    </div>
  </div>
                        </div>
                        </div>
              </div>
            </div>

            <div class="w-full lg:w-4/12 px-4">
              <div class="flex flex-wrap items-top mb-6">
                <div class="w-full lg:w-4/12 px-4 ml-auto">
                  <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Navigation
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        Accueil
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Précommande
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Namx Concept
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div class="w-full lg:w-4/12 px-4">
                    <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                        Other Resources
                    </span>
                    <ul class="list-unstyled">
                        <li>
                        <a
                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                        >
                            MIT License
                        </a>
                        </li>
                        <li>
                        <a
                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://creative-tim.com/terms?ref=njs-profile"
                        >
                            Terms &amp; Conditions
                        </a>
                        </li>
                        <li>
                        <a
                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://creative-tim.com/privacy?ref=njs-profile"
                        >
                            Privacy Policy
                        </a>
                        </li>
                        <li>
                        <a
                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://creative-tim.com/contact-us?ref=njs-profile"
                        >
                            Contact Us
                        </a>
                        </li>
                    </ul>
                    </div> */}
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2021</span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  class="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  {" "}
                  Notus JS by
                </a>
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  class="text-blueGray-500 hover:text-blueGray-800"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
