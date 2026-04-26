type Props = {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
};

const SliderDots = ({ total, activeIndex, onSelect }: Props) => {
  return (
    <div className="flex gap-2 mt-4 justify-center">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          onClick={() => onSelect(index)}
          className={`
            flex items-center justify-center
            w-5 h-5
            rounded-full cursor-pointer
            transition
            ${index === activeIndex ? 'border border-[#b88e2f]' : ''}
          `}
        >
          <div
            className={`
              w-3 h-3 rounded-full transition
              ${index === activeIndex ? 'bg-[#b88e2f]' : 'bg-gray-300'}
            `}
          />
        </div>
      ))}
    </div>
  );
};

export default SliderDots;