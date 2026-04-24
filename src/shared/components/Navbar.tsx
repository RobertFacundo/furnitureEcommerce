import { navLinks } from '../data/navigation';
import logo from '/logo.png';
import NavList from './NavList';

const Navbar = () => {
    return (
        <nav className='flex w-full p-10 max-h-[100px] bg-white items-center justify-between' >
            <div>
                <img src={logo} alt="logo" className='max-w-[185px]' />
            </div>
            <NavList
                links={navLinks}
                className="flex-row gap-20 items-center font-poppins text-[16px]"
            />
            <div>
                Future search component
            </div>
        </nav>
    )
};

export default Navbar;