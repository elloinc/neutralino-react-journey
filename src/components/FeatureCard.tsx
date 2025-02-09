
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard = ({ title, description, icon, delay }: FeatureCardProps) => {
  return (
    <div 
      className="glass p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300"
      style={{ 
        animationDelay: `${delay}ms`,
        animation: 'fade-in 0.6s ease-out forwards',
        opacity: 0 
      }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/5 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
