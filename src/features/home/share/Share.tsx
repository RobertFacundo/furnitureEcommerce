import Marquee from "./Marquee";

const Share = () => {
    return (
        <div className="flex flex-col font-poppins m-10">
            <div className="flex flex-col gap-3 p-5 text-center">
                <h3 className="font-semibold text-[20px] text-[#616161]">Share your setup with</h3>
                <h1 className="text-[#3a3a3a] font-bold text-[40px]">#FuniroFurniture</h1>
            </div>
            <Marquee />
        </div>
    )
};

export default Share;