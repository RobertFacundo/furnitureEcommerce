import { carouselItem } from "../../../shared/animations/inspiration";
import type { Inspiration } from "../../../shared/data/inspiration";
import { motion } from 'framer-motion'

type Props = {
  items: Inspiration[];
  allItems: Inspiration[];
  onSelect: (index: number) => void;
};

const InspirationsCarousel = ({ items, allItems, onSelect }: Props) => {
  return (
    <div className="overflow-hidden w-[700px]">
      <div className="flex gap-4">
        {items.map((item, i) => {
          const realIndex = allItems.findIndex(i => i.id === item.id);

          return (
            <motion.img
              key={item.id}
              variants={carouselItem}
              initial='hidden'
              animate='show'
              transition={{ delay: i * 0.5 }}
              src={item.image}
              onClick={() => onSelect(realIndex)}
              className="
                w-[372px] h-[486px]
                object-cover rounded cursor-pointer
                hover:scale-[1.02]
                transition
              "
            />
          );
        })}
      </div>
    </div>
  );
};

export default InspirationsCarousel;