import { useRef, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../../data/navigation";
import NavList from "../NavList";
import { AnimatePresence, motion } from 'framer-motion'
import { menu } from "../../animations/burguerMenu";
import { useClickOutside } from "../../hooks/useClickOutside";

const BurguerNavList = () => {
    const [open, setOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    useClickOutside(menuRef, () => setOpen(false))

    return (
        <div ref={menuRef} className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-3xl cursor-pointer">
                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.div
                            key='close'
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <HiX />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <HiMenuAlt3 />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menu}
                        initial='hidden'
                        animate='show'
                        exit='exit'
                        className="absolute top-full right-0 w-[280px] bg-white/90 shadow-lg z-50 p-6">
                        <NavList links={navLinks} className='flex flex-col gap-6 font-poppins text-lg text-right' />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
};

export default BurguerNavList;