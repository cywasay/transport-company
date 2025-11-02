'use client';

const Header = () => {
  return (
    <header className="w-full bg-[#CC9A55] p-2 sm:p-4 shadow-lg backdrop-blur-sm sticky top-0 z-50 border-b-2 border-[#CC9A55]/20">
      <div className="container mx-auto flex justify-between items-center px-2 sm:px-4">
        <div className={`text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-black tracking-tight drop-shadow-sm hover:drop-shadow-md transition-all duration-300 truncate pr-2`} style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, letterSpacing: '-0.02em' }}>
          NRF : National Retail Federation
        </div>
        <button 
          onClick={() => {/* Add login functionality */}} 
          className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 bg-white text-[#CC9A55] rounded-2xl sm:rounded-3xl hover:bg-gray-100 hover:text-[#AA8244] transition-all duration-300 font-bold text-xs sm:text-sm md:text-base shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#CC9A55] focus:ring-offset-2 focus:ring-offset-[#CC9A55] whitespace-nowrap"
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;