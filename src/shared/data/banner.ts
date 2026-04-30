import { HiOutlineTrophy } from "react-icons/hi2";
import { CiCircleCheck } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import type { IconType } from "react-icons";


export type BannerItemType = {
    icon: IconType,
    title: string,
    subtitle: string,
};

export const BannerItems = [
    {
        icon: HiOutlineTrophy,
        title: "High Quality",
        subtitle: "crafted from top material"
    },
    {
        icon: CiCircleCheck,
        title: "Warranty Protection",
        subtitle: "Over 2 years"
    },
    {
        icon: LiaShippingFastSolid,
        title: "Free Shipping",
        subtitle: "Order over 150$"
    },
    {
        icon: BiSupport,
        title: "24/7 Support",
        subtitle: "Dedicated support"
    },
]