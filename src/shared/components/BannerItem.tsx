import type { BannerItemType } from "../data/banner";

type Props = {
    item: BannerItemType;
}
const BannerItem = ({ item }: Props) => {
    const Icon = item.icon
    return (
        <div className="flex flex-row items-center justify-center gap-2">
            <Icon size={62} className="text-black" />
            <div className="flex flex-col">
                <p className="font-poppins font-semibold text-[25px] text-[#242424]">{item.title}</p>
                <p className="font-poppins font-semibold text-[20px] text-[#8c8a8a]">{item.subtitle}</p>
            </div>
        </div>
    )
};

export default BannerItem;