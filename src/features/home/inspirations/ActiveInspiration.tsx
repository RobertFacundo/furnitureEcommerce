import type { Inspiration } from "../../../shared/data/inspiration";
import { activeImage } from "../../../shared/animations/inspiration";
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  item: Inspiration;
  index: number;
  onNext: () => void;
};

const ActiveInspiration = ({ item, index, onNext }: Props) => {
  return (
    <div
      className="relative w-[404px] h-[582px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          variants={activeImage}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0}}
          transition={{ duration: 0.1 }}
          className="absolute inset-0">
          <img
            src={item.image}
            className="w-full h-full object-cover"
          />
        
          <div className="absolute bottom-6 left-6 flex items-end">
        
            <div className="bg-white/70 px-4 py-3 h-[130px] pl-8 flex flex-col justify-center">
              <p className="text-[16px] text-[#616161] font-medium">
                {String(index + 1).padStart(2, '0')} — {item.category}
              </p>
        
              <h3 className="text-[28px] font-semibold text-[#3a3a3a]">
                {item.title}
              </h3>
            </div>
        
            <button
              onClick={onNext}
              className="
               w-[40px] h-[40px]
               flex items-center justify-center
               bg-[#b88e2f] text-white text-2xl
               shadow
               hover:scale-110
               transition
               cursor-pointer
             "
            >
              →
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ActiveInspiration;