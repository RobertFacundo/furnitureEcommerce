import NavList from "./NavList";
import { navLinks } from "../data/navigation";
import { helpLinks } from "../data/navigation";

const Footer = () => {
    return (
        <footer className="flex flex-col border-t  p-10 border-[#9F9F9F]">
            <div className="grid grid-cols-4">
                <div className="flex flex-col gap-9">
                    <h3 className="font-poppins font-bold text-[24px]">Funiro.</h3>
                    <p className="font-poppins text-[16px] text-[#9F9F9F] max-w-[270px]">400 University Drive Suite 200 Coral Gables,
                        FL 33134 USA</p>
                </div>
                <div className="flex flex-col gap-10">
                    <h3 className="font-poppins text-[16px] text-[#9F9F9F]">Links</h3>
                    <NavList links={navLinks} className="flex-col gap-10" />
                </div>

                <div className="flex flex-col gap-10">
                    <h3 className="font-poppins text-[16px] text-[#9F9F9F]">Help</h3>
                    <NavList links={helpLinks} className="flex-col gap-10" />
                </div>

                <div className="flex flex-col gap-10">
                    <h3 className="font-poppins text-[16px] text-[#9F9F9F]">Newsletter</h3>
                    <form className="flex gap-2 items-end">
                        <input
                            type="email"
                            placeholder="Enter your email Address"
                            className="border-b border-black outline-none pb-1"
                        />
                        <button
                            type="submit"
                            className="font-semibold border-b border-black pb-1"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <p className="p-5 border-t m-10 border-[#9F9F9F] font-poppins text-[16px]">2023 Furino. All Rights reserved</p>
        </footer>
    )
};

export default Footer;