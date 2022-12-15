import React from "react";
// import Header from "../../components/header/Header";
function Contact() {
  return (
    <div>
      {/* <Header /> */}
      {/*  */}
      <div class="container mx-auto px-8 py-20">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="hidden bg-slate-500 md:block">
            <img
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              src="https://www.namx-hydrogen.com/img/contact/contact-namx-1920w.webp"
              alt="recharge-hydrogene-namx-1920w.webp"
            />{" "}
          </div>
          <div class="mt-10">
            <div class="animate-fade-in-down mb-1 text-center text-3xl font-bold text-slate-600">
              CONTACTEZ-NOUS POUR TOUTE DEMANDE
            </div>
            {/* form */}
            <div class="animate-fade-in-down mt-10 ml-10">
              <form
                class="w-full max
              w-2xl mx-auto"
              >
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
                      for="grid-first-name"
                    ></label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id=""
                      type="text"
                      placeholder="*nom"
                    />
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for=""
                    ></label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id=""
                      type="email"
                      placeholder="*email"
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for=""
                    ></label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id=""
                      type="text"
                      placeholder="*prénom"
                    />
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for=""
                    ></label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id=""
                      type="number"
                      placeholder="*téléphone"
                    />
                  </div>
                  <div class="w-full md:w-100 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for=""
                    ></label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id=""
                      type="text"
                      placeholder="*sujet"
                    />
                  </div>
                  <div class="w-full md:w-100 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for=""
                    ></label>
                    <textarea
                      class="appearance-none block w-full bg-gray-200 h-4/5 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id=""
                      type="text"
                      placeholder="*message"
                    />
                  </div>
                </div>
                <div class="w-full md:w-100 px-3 mb-6 md:mb-0 inline-block">
                  <button
                    class="bg-slate-500 hover:bg-slate-700 w-full text-white font-bold py-2 px-4 rounded-3xl"
                    type="button"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default Contact;
