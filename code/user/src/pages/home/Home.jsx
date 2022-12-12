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
        {/* <button class="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">Start 14-Day free trial</button>
        <p class="mt-3 text-sm text-gray-400">No credit card required</p> */}

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
            {/* <form class="sm:mx-auto sm:max-w-xl lg:mx-0" action="https://api.web3forms.com/submit">
                <div class="sm:flex">
                  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEy_HERE">
                  <input type="hidden" name="subject" value="New Waitlist">
                  <div class="min-w-0 flex-1"><label for="email" class="sr-only">Email address</label><input id="email" type="email" placeholder="Enter your email" class="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" value="" autocomplete="off" /></div>
                  <div class="mt-3 sm:mt-0 sm:ml-3"><button type="submit" class="block w-full rounded-md bg-pink-500 py-3 px-4 font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900">Join Waitlist</button></div>
                </div>
              </form> */}
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