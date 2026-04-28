import { NavLink } from 'react-router-dom';
import {motion}from 'framer-motion'
import { item } from '../animations/burguerMenu';

type LinkItem = {
    name: string;
    path: string;
    disableActive?: boolean;
};

type Props = {
    links: LinkItem[];
    className?: string;
    itemClassName?: string
};

const NavList = ({ links, className = '', itemClassName = '' }: Props) => {
    return (
        <ul className={`${className} gap-2 font-medium`}>
            {links.map(link => (
                <motion.li key={link.path} variants={item} className={`${itemClassName}`}>
                    <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                            `hover-link ${isActive && !link.disableActive ? 'active-link' : ''}`
                        }
                    >
                        {link.name}
                    </NavLink>
                </motion.li>
            ))}
        </ul>
    );
};

export default NavList;