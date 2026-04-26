import { motion } from "framer-motion";
import { marqueeImages } from "../../../shared/data/share";

const Marquee = () => {
  const loopImages = [...marqueeImages, ...marqueeImages];

  const sizes = [
    "w-[200px] h-[250px]",
    "w-[240px] h-[300px]",
    "w-[180px] h-[220px]",
  ];

  // posiciones tipo collage (clave)
  const positions = [
    "top-[10%] left-[5%]",
    "top-[20%] left-[25%]",
    "top-[5%] left-[45%]",
    "top-[30%] left-[65%]",
    "top-[15%] left-[80%]",
    "top-[55%] left-[10%]",
    "top-[70%] left-[30%]",
    "top-[60%] left-[50%]",
    "top-[75%] left-[70%]",
  ];

  return (
    <div className="relative w-full h-[600px] overflow-hidden">

      {/* capa animada */}
      <motion.div
        className="absolute inset-0"
        animate={{ x: ["0%", "-10%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {loopImages.map((img, i) => (
          <motion.img
            key={i}
            src={img.url}
            className={`
              absolute object-cover rounded-xl
              ${sizes[i % 3]}
              ${positions[i % positions.length]}
              ${i % 2 === 0 ? "rotate-2" : "-rotate-2"}
              shadow-lg
              hover:scale-105 hover:z-10 transition
            `}
            // micro movimiento vertical (detalle PRO)
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

    </div>
  );
};

export default Marquee;