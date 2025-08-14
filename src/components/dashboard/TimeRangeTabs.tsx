interface TimeRangeTabsProps {
  selected: string;
  onSelect: (range: string) => void;
}

const timeRanges = ['Today', 'This Month', 'Custom'];

export default function TimeRangeTabs({ selected, onSelect }: TimeRangeTabsProps) {
  return (
    <div className="flex space-x-1 rounded-full bg-gray-100 p-1">
      {timeRanges.map((range) => (
        <button
          key={range}
          onClick={() => onSelect(range)}
          className={`${
            selected === range
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          } rounded-full px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors duration-150`}
        >
          {range}
        </button>
      ))}
    </div>
  );
}