import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <div>
      <header>
        <div className="overlay">
          <h3>NamX, l’unique</h3>
          <h1 className="h1header">SUV À HYDROGÈNE</h1>

          {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p> */}

          <Link to="/order">
            <button
              type="button"
              class="inline-flex text-white bg-gradient-to-r from-indigo-600 to-green-600 hover:bg-gradient-to-l focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              <div class="text-xl font-mono font-bold pt-0.5">Précommande</div>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
