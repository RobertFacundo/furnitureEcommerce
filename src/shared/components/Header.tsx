import { motion } from 'framer-motion'

type Props = {
    title: string;
}

const Header = ({ title }: Props) => {
    return (
        <div className="relative w-full h-[318px] header-bg flex flex-col items-center justify-center font-poppins">
            <motion.div
                className="absolute inset-0 bg-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1 }}
            ></motion.div>
            <motion.div className="flex flex-col justify-center items-center z-10">
                <motion.h1
                    className="text-[48px] font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className="text-[16px] font-medium "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Home  {">"}
                    <span className="font-light">
                        {title}
                    </span>
                </motion.p>
            </motion.div>
        </div>
    )
};

export default Header;