const Hero = () => {
    return ( 
        <>
            <section class="w-full bg-[#F5F7FA] py-20 px-6 md:px-12">
  <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    <div class="space-y-6">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Find the Best Products for Your Daily Lifestyle
      </h1>

      <p class="text-gray-600 text-lg md:text-xl">
        Shop smart with exclusive deals and high-quality items delivered to your doorstep.
      </p>

      <div class="w-full bg-white shadow-md rounded-xl flex items-center gap-3 px-4 py-3">
        <svg xmlns="http://www.w3.org/2000/svg" 
             fill="none" 
             viewBox="0 0 24 24" 
             stroke-width="1.5" 
             stroke="currentColor" 
             class="w-6 h-6 text-gray-500">
          <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z" />
        </svg>

        <input 
          type="text" 
          placeholder="Search products..."
          class="w-full outline-none text-gray-700"
        />

        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Search
        </button>
      </div>

      <div class="flex gap-4">
        <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Shop Now
        </button>
        <button class="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>
    </div>

 
    <div class="w-full flex justify-center">
      <img 
        src="https://via.placeholder.com/500x400" 
        alt="Hero Image" 
        class="w-full md:w-4/5 rounded-xl"
      />
    </div>

  </div>
</section>

        </>
     );
}
 
export default Hero;