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
      title: 'Minimize Payment Fraud',
      description: 'Implement advanced fraud detection tools to secure your entire payment process.',
    },
    {
      icon: <CreditCard size={24} />,
      title: 'Enhance Checkout Experience',
      description: 'Create seamless, customer-centric payment journeys that drive conversions.',
    },
    {
      icon: <BarChart size={24} />,
      title: 'Optimize Payment Performance',
      description: 'Achieve your goals with smart solutions built to improve payment success rates.',
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
                  Unleash your payments potential
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  Shape extraordinary commerce experiences.
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