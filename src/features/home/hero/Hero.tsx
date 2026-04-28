import { motion } from 'framer-motion'
import { fadeUp } from '../../../shared/animations/fadeUp';

const Hero = () => {
    return (
        <motion.section
            initial='hidden'
            animate='show'
            variants={fadeUp}
            className="relative hero-bg flex items-center justify-end w-full h-[80vh]"
        >
            <motion.div variants={fadeUp} className='absolute inset-0 bg-black/30'></motion.div>

            <motion.div
                variants={fadeUp} 
                className="relative flex flex-col md:max-w-[643px] max-w-[300px] md:min-h-[443px] max-h-[400px] md:mr-10 md:p-10 mr-4 p-4 rounded-[10px] bg-[#FFF3E3] font-poppins">
                <h3 className='md:text-[16px] text-[12px] font-medium mt-5 tracking-[3px]'>New Arrival</h3>
                <h1 className="font-bold md:text-[52px] text-[23px] text-[#b88e2f] flex flex-col leading-tight" >
                    Discover our <br /> New Collection
                </h1>
                <p className='md:text-[18px] text-[16px] font-normal mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit!</p>
                <button
                    className='
                      md:max-w-[222px] max-w-[110px] md:py-[25px] md:px-[72px] py-[15px]
                      mt-10
                      bg-[#b88e2f] hover:bg-[#c99724]
                      font-poppins md:text-[16px] text-[11px] text-white font-bold
                      cursor-pointer
                      transition-colors duration-200 ease-in-out'
                >
                    BUY NOW
                </button>
            </motion.div>
        </motion.section>
    )
};

export default Hero;