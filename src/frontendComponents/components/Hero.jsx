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
        src="https://www.clipartmax.com/png/middle/230-2305608_boy-carrying-a-bag-of-groceries-royalty-free-vector-carrying-grocery-bags.png" 
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