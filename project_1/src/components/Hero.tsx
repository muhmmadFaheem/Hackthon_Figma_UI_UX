const Hero = () => {
    return (
      <div className="relative bg-gray-100">
        {/* Background Image */}
        <img
          src="/air-max-banner.jpg" // Replace with your image URL
          alt="Nike Air Max Pulse"
          className="w-full h-[400px] object-cover"
        />
  
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-xl text-gray-700 font-medium">
            First Look
          </h1>
          <h2 className="text-4xl font-extrabold text-black mt-2">
            NIKE AIR MAX PULSE
          </h2>
          <p className="text-gray-600 mt-4">
            Extreme comfort. Hyper durable. Max volume. Designed to push you past
            your limits and help you go to the max.
          </p>
          <div className="flex space-x-4 mt-6">
            <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800">
              Notify Me
            </button>
            <button className="bg-gray-300 text-black py-2 px-6 rounded hover:bg-gray-400">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;