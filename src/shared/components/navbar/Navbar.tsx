import { navLinks } from '../../data/navigation';
import logo from '/logo.png';
import NavList from '../NavList';
import SearchBar from './SearchBar';
import BurguerNavList from './BurgerNavList';

const Navbar = () => {
    return (
        <nav className='relative flex w-full md:p-10 p-4 max-h-[100px] bg-white items-center justify-between' >
            <div>
                <img src={logo} alt="logo" className='md:max-w-[185px] max-w-[120px]' />
            </div>
            <NavList
                links={navLinks}
                className="hidden md:flex flex-row gap-20 items-center font-poppins text-[16px]"
            />
            <div>
                <SearchBar />
            </div>
            <BurguerNavList />
        </nav>
    )
};

export default Navbar;