import Header from '@/components/contact/Header';
import { FeatureBlock } from '../../../components/contact/FeatureBlock';
import { ContactForm } from '../../../components/contact/ContactForm';
import Footer from '@/components/homepage/Footer';
import { HeroSection } from '@/components/contact/HeroSection';
import { ShieldCheck, CreditCard, BarChart } from 'lucide-react';


export default function HomePage() {
  const features = [
  {
    icon: <ShieldCheck size={24} />,
    title: 'Seamless Ordering',
    description: 'Skip the waiters—browse menus, place orders, and pay directly from your phone.',
  },
  {
    icon: <CreditCard size={24} />,
    title: 'Smart Dining Experience',
    description: 'Discover restaurants, bars, and clubs tailored to your vibe and preferences.',
  },
  {
    icon: <BarChart size={24} />,
    title: 'Nightlife Made Easy',
    description: 'Plan your night out effortlessly with curated venues and real-time updates.',
  },
];

  return (
    <div className="bg-white">
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-6 lg:px-32 py-16 md:py-24 font-plus">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Content */}
            <div className="space-y-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Discover, Dine & Vibe Smarter
                </h1>
              <p className="mt-4 text-lg text-gray-600">
                  Elevate your dining and nightlife experience with seamless ordering and curated venues.
                </p>
              </div>
              <div className="space-y-8">
                {features.map((feature) => (
                  <FeatureBlock
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}