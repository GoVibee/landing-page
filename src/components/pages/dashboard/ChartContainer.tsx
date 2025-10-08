import React from 'react';

interface ChartContainerProps {
  title: string;
  button: React.ReactNode;
  children: React.ReactNode;
}

export function ChartContainer({ title, button, children }: ChartContainerProps) {
  return (
    <div className="bg-white p-6 rounded-4xl border border-gray-100 font-plus">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        {button}
      </div>
      <div className="h-48">{/* Fixed height container for the chart */}
        {children}
      </div>
    </div>
  );
}