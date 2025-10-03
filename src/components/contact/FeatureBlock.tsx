import React from 'react';

interface FeatureBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureBlock({ icon, title, description }: FeatureBlockProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 text-gray-500 mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}