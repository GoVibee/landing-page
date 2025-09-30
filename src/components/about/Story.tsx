import { PartyPopper, Rocket, Expand } from 'lucide-react';

const storyEvents = [
  {
    icon: <PartyPopper size={24} className="text-cyan-500" />,
    year: '2018',
    title: 'Founded',
  },
  {
    icon: <Rocket size={24} className="text-cyan-500" />,
    year: '2019',
    title: 'Launched',
  },
  {
    icon: <Expand size={24} className="text-cyan-500" />,
    year: '2021',
    title: 'Expanded',
  },
];

export function Story() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Story</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 mb-8">
            {storyEvents.map((event) => (
              <div key={event.year} className="flex items-center gap-6">
                <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">{event.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                  <p className="text-gray-500">{event.year}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed text-center md:text-left">
            Founded in 2018, GoVibe launched its platform in 2019, quickly gaining traction for its innovative approach to dining and nightlife. By 2021, we expanded our services to multiple cities, solidifying our position as a leader in the industry.
          </p>
        </div>
      </div>
    </section>
  );
}