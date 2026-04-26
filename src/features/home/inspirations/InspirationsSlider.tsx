import type { Inspiration } from "../../../shared/data/inspiration";
import ActiveInspiration from "./ActiveInspiration";
import InspirationsCarousel from "./InspirationsCarrousel";
import SliderDots from "./SliderDots";

type Props = {
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    visibleInspirations: Inspiration[];
    inspirations: Inspiration[];
};

const InspirationsSlider = ({
    activeIndex,
    setActiveIndex,
    visibleInspirations,
    inspirations,
}: Props) => {
    return (
        <div className="flex items-center gap-8 p-6">

            <ActiveInspiration
                item={inspirations[activeIndex]}
                index={activeIndex}
                onNext={() =>
                    setActiveIndex((prev) => (prev + 1) % inspirations.length)
                }
            />

            <div className="flex flex-col">

                <InspirationsCarousel
                    items={visibleInspirations}
                    allItems={inspirations}
                    onSelect={setActiveIndex}
                />


                <SliderDots
                    total={inspirations.length}
                    activeIndex={activeIndex}
                    onSelect={setActiveIndex}
                />

            </div>
        </div>
    );
};

export default InspirationsSlider;