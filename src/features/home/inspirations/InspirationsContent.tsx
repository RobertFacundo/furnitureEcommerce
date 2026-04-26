import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import { fadeLeft } from "../../../shared/animations/inspiration";

type Props = {
  title: string;
  description: string;
};

const InspirationsContent = ({ title, description }: Props) => {
  return (
    <motion.div
      variants={fadeLeft}
      className="flex flex-col justify-center w-[922px] ml-15 font-poppins pr-10"
    >
      <h1 className="font-bold text-[40px]">{title}</h1>
      <p className="font-medium text-[#636363]">{description}</p>

      <Link
        to="/shop"
        className="
          mt-10
          w-[245px] h-[48px]
          flex items-center justify-center
          border border-[#b88e2f]
          text-[#b88e2f] font-semibold text-[16px]
          hover:bg-[#b88e2f] hover:text-white
          transition-all duration-400
        "
      >
        Explore more
      </Link>
    </motion.div>
  );
};

export default InspirationsContent;