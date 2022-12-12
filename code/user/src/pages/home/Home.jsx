import React from 'react'
import Header from '../../components/header/Header'
function Home() {
  return (
    <div>
        <Header />
          <div class="container mx-auto px-6 py-16 text-center">
        <div class="mx-auto max-w-lg">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">NOUVELLE EXPLORATION DE <span className='text-green-600'> LA MOBILITÉ AUTOMOBILE</span></h1>
        <p class="mt-6 text-gray-500 dark:text-gray-300">Nous concilions mobilité humaine infinie et préservation de l'environnement à grande échelle grâce à l'hydrogène vert. Egalement, le zéro émission.</p>
        

        </div>

        <div class="mt-10 flex justify-center">
        <img class="h-[600px] w-full rounded-xl object-cover lg:w-4/5" src="https://www.namx-hydrogen.com/img/home/namx-ban-1024w.webp" />
        </div>
    </div>
   
    <div class="relative overflow-hidden">
  <div class="bg-white pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
    <div class="mx-auto max-w-5xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 ">
          <div class="lg:py-24">
            <h1 class="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"><span class="block text-black">CAPSULE</span><span class="block text-green-600"> HYDROGÈNE </span></h1>
            <p class="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Afin de réduire les contraintes liées aux déplacements décarbonés comme le temps de recharge, l'immobilisation et la proximité des stations, nous proposons une formule spéciale au-delà du NamX. Un système de livraison à domicile par abonnement devrait voir le jour et les capsules pourraient être utilisées à de multiples occasions.</p>
            <div class="mt-10 sm:mt-12">
           
            </div>
          </div>
        </div>
        <div class="pt-24 mt-12 hidden lg:block"><img class="" src="https://www.namx-hydrogen.com/img/home/namx-recharge.webp" alt="" /></div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Home