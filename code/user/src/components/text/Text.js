import React, { Component ,useEffect, useState} from "react";
import "./text.css";
import axios from "axios";

function Text() {

 const [cars, setCars] = useState()

  useEffect(() => {
    axios.get('/getCars')
    .then(res => {
      console.log(res.data);
      setCars(res.data)
     
    })
    .catch(err => {
      console.log(err);
  })
  }, [])



  
    

  function afficheeinfo() {
    const Vitesse=document.getElementById("Vitesse");
    const Moteur=document.getElementById("Moteur");
    const info =document.getElementById("info")
    //   afficher un mesage 
    
    info.innerHTML="Vitesse";

  }

  return (
    <div>
      {/* <h1 class="text-center text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600">Service</h1> */}
    
    {/* <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
   
    
     {/* {cars?.map(car=> <h3>{car.name}</h3>)} 

      </div> */}

      {/* <div class="mt-16 grid space-y-4">
      
          <div id="info" class="relative flex items-center space-x-4 justify-center">
           
             
            
          </div>
      
        <button id="Vitesse" 
        // onClick={afficheeinfo}
          class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
        >
          <div class="relative flex items-center space-x-4 justify-center">
        
              <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
              Vitesse
              </span>
           
          </div>
        </button>
        <button
          class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
        >
          <div class="relative flex items-center space-x-4 justify-center">
            <a href="">
              <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                Title 3
              </span>
            </a>
          </div>
        </button>
        <button
          class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
        >
          <div class="relative flex items-center space-x-4 justify-center">
            <a href="">
              <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                Title 4
              </span>
            </a>
          </div>
        </button>
        <button
          class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
        >
          <div class="relative flex items-center space-x-4 justify-center">
            <a href="">
              <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                Title 5
              </span>
            </a>
          </div>
        </button>
      
   
      </div> */}
    
    </div>
  );
}

export default Text;
