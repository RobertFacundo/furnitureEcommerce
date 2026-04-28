import { inspirations } from "../../../shared/data/inspiration";
import { useState, useEffect } from "react";
import InspirationsContent from "./InspirationsContent";
import InspirationsSlider from "./InspirationsSlider";
import { motion } from 'framer-motion'
import { container } from "../../../shared/animations/inspiration";

const Inspirations = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % inspirations.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const visibleInspirations = [
        ...inspirations.slice(activeIndex + 1),
        ...inspirations.slice(0, activeIndex + 1),
    ];

    return (
        <motion.section
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ amount: 0.2 }}
            className="flex bg-[#FCF8F3] md:flex-row flex-col"
        >
            
            <InspirationsContent
                title="50+ Beautiful rooms inspiration"
                description="Our designer already made a lot of beautiful prototype of rooms that inspire you"
            />

            <InspirationsSlider
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                visibleInspirations={visibleInspirations}
                inspirations={inspirations}
            />
        </motion.section>
    )
};

export default Inspirations;