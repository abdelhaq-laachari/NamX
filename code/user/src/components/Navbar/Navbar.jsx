import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
         <nav class="shadow">

<div class="flex justify-between items-center py-6 px-10 container mx-auto">

  <div>
    <h1 class="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">Adsla</h1>
  </div>

  <div>
    
    <div class="hover:cursor-pointer sm:hidden">
      <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
      <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
      <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
    </div>
    <div class="flex items-center">

      <ul class="sm:flex space-x-4 hidden items-center">
        <li><a href="/" class="text-gray-700 hover:text-indigo-600 text-md ">Home</a></li>
        <li><a href="/voiture_hydrogene" class="text-gray-700 hover:text-indigo-600 text-md ">voiture_hydrogene</a></li>
        <li><a href="/NAMXConcept" class="text-gray-700 hover:text-indigo-600 text-md ">NAMX Concept</a></li>
        
        <li><a href="#" class="text-gray-700 hover:text-indigo-600 text-md ">Contact</a></li>
      </ul>

      <div class="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
        <h1 class="text-text-gray-600  py-2 hover:cursor-pointer hover:text-indigo-600">LOGIN</h1>
        <h1 class="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg">SIGNUP</h1>
      </div>
    </div>
  </div>
</div>
</nav>
    </div>
  )
}

export default Navbar