import { QrCode, Star, ShoppingCart } from 'lucide-react';

const features = [
  {
    icon: <QrCode size={32} className="text-[#3B0A45]" />,
    title: 'QR Code Scanning',
    description: 'Quickly access menus and venue information with a simple scan.',
  },
  {
    icon: <Star size={32} className="text-[#3B0A45]" />,
    title: 'Real-Time Reviews',
    description: 'Share and view real-time feedback to make informed decisions.',
  },
  {
    icon: <ShoppingCart size={32} className="text-[#3B0A45]" />,
    title: 'In-App Ordering',
    description: 'Place and pay for orders directly from your phone for a hassle-free experience.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white font-plus">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Makes Us Unique</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          GoVibe stands out with its innovative features designed to improve the dining experience for both guests and venues.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-50/50 border border-gray-200/50 rounded-xl p-8 text-left hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}