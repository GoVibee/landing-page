import { ChevronDown } from 'lucide-react';

interface FilterDropdownProps {
  label: string;
}

export default function FilterDropdown({ label }: FilterDropdownProps) {
  return (
    <button className="flex items-center text-sm gap-2 px-4 py-2 bg-gray-100 rounded-lg  text-gray-700 cursor-pointer">
      <span>{label}</span>
      <ChevronDown size={16} />
    </button>
  );
}