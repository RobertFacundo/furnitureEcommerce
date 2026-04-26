import { motion } from "framer-motion";
import { marqueeImages } from "../../../shared/data/share";

const Marquee = () => {
  const loopImages = [...marqueeImages, ...marqueeImages];

  const sizes = [
    "w-[300px] h-[350px]",
    "w-[340px] h-[400px]",
    "w-[280px] h-[320px]",
  ];

  const offsets = ["mt-0", "mt-6", "mt-10", "mt-4"];

  return (
    <div className="w-full overflow-hidden py-10 flex flex-col gap-6">

      {/* ROW 1 → izquierda */}
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 38,
          repeat: Infinity,
        }}
      >
        {loopImages.map((img, i) => (
          <div
            key={`row1-${i}`}
            className={`
              flex-shrink-0
              ${sizes[i % 3]}
              ${offsets[i % 4]}
              ${i % 2 === 0 ? "rotate-2" : "-rotate-2"}
            `}
          >
            <img
              src={img.url}
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
        ))}
      </motion.div>

      {/* ROW 2 → derecha (inversa) */}
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 32,
          repeat: Infinity,
        }}
      >
        {loopImages.map((img, i) => (
          <div
            key={`row2-${i}`}
            className={`
              flex-shrink-0
              ${sizes[(i + 1) % 3]}
              ${offsets[(i + 2) % 4]}
              ${i % 2 === 0 ? "-rotate-2" : "rotate-2"}
            `}
          >
            <img
              src={img.url}
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default Marquee;