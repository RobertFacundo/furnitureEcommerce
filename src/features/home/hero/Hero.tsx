
const Hero = () => {
    return (
        <section className="relative hero-bg flex items-center justify-end w-full h-[80vh]">
            <div className='absolute inset-0 bg-black/30'></div>

            <div className="relative flex flex-col max-w-[643px] min-h-[443px] mr-10 p-10 rounded-[10px] bg-[#FFF3E3] font-poppins">
                <h3 className='text-[16px] font-medium mt-5 tracking-[3px]'>New Arrival</h3>
                <h1 className="font-bold text-[52px] text-[#b88e2f] flex flex-col leading-tight" >
                    Discover our <br /> New Collection
                </h1>
                <p className='text-[18px] font-normal mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit!</p>
                <button
                    className='
                      max-w-[222px] py-[25px] px-[72px]
                      mt-10
                      bg-[#b88e2f] hover:bg-[#c99724]
                      font-poppins text-[16px] text-white font-bold
                      cursor-pointer
                      transition-colors duration-200 ease-in-out'
                >
                    BUY NOW
                </button>
            </div>
        </section>
    )
};

export default Hero;