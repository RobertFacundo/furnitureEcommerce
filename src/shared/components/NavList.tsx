import { NavLink } from 'react-router-dom';

type LinkItem = {
    name: string;
    path: string;
};

type Props = {
    links: LinkItem[];
    className?: string;
    itemClassName?: string
};

const NavList = ({ links, className = '', itemClassName = '' }: Props) => {
    return (
        <ul className={`flex ${className} gap-2 font-medium`}>
            {links.map(link => (
                <li key={link.path} className={itemClassName}>
                    <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                            `hover-link ${isActive ? 'active-link' : ''}`
                        }
                    >
                        {link.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default NavList;