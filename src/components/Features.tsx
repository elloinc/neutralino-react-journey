
import { Layers, Zap, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      title: 'Modern Stack',
      description: 'Built with React, TypeScript, and modern web technologies.',
      icon: <Layers className="w-6 h-6" />,
      delay: 100,
    },
    {
      title: 'Lightning Fast',
      description: 'Optimized for performance and exceptional user experience.',
      icon: <Zap className="w-6 h-6" />,
      delay: 200,
    },
    {
      title: 'Secure by Design',
      description: 'Enterprise-grade security with modern best practices.',
      icon: <Shield className="w-6 h-6" />,
      delay: 300,
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build modern applications that scale.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
