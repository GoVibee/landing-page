import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  iconBg?: string; 
}

export default function StatCard({ title, value, icon, iconBg = "bg-purple-100" }: StatCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl font-plus flex justify-between md:justify-normal items-center gap-6">
      {/* Icon Section */}
      <div className={`p-3 rounded-full bg-purple-100 flex items-center justify-center`}>
        {icon}
      </div>
      {/* Text Section */}
      <div className="text-right">
        <p className="text-sm text-gray-500 mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
}
