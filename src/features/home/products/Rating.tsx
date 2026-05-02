import { motion } from 'framer-motion';

type Props = {
    rating: number
}

const Rating = ({ rating }: Props) => {
    return (
        <div className="flex items-center gap-1 text-yellow-400 text-xl">
            {Array.from({ length: 5 }, (_, i) => {
                const star = i + 1;
                return (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: i * 0.05,
                            duration: 0.25,
                        }}
                    >
                        {rating >= star
                            ? "★"
                            : rating >= star - 0.5
                                ? "☆"
                                : "★"}
                    </motion.span>
                );
            })}

            <span className="text-sm text-zinc-500 ml-2">
                ({rating})
            </span>
        </div>
    )
};

export default Rating;