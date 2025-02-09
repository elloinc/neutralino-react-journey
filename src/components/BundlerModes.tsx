
import { Zap, Package, Grid3X3, Users, ListTree, Wand2, Moon, Rocket } from 'lucide-react';
import { Card } from './ui/card';
import { useNavigate } from 'react-router-dom';

interface BundlerMode {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}

const bundlerModes: BundlerMode[] = [
  {
    title: "Flash Launch",
    description: "Bundle with Zero Snipes",
    icon: <Zap className="w-6 h-6 text-white" />,
    bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    title: "Standard Bundler",
    description: "Bundle with Dev Only Snipe Single",
    icon: <Package className="w-6 h-6 text-white" />,
    bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
  },
  {
    title: "Quadro Bundler",
    description: "Bundle with 1+3 Wallet Snipes",
    icon: <Grid3X3 className="w-6 h-6 text-white" />,
    bgColor: "bg-gradient-to-br from-green-400 to-green-600",
  },
  {
    title: "Distro Bundler",
    description: "Bundle with 1+3 Wallet Snipes => 100 Wallet Distribution",
    icon: <Users className="w-6 h-6 text-white" />,
    bgColor: "bg-gradient-to-br from-purple-400 to-purple-600",
  },
  {
    title: "Stag Bundler",
    description: "Bundle with Zero Snipes, Delay and 49 Wallet Staggered Snipes",
    icon: <ListTree className="w-6 h-6 text-white" />,
    bgColor: "bg-gradient-to-br from-orange-400 to-red-600",
  },
  {
    title: "Magic Bundler",
    description: "Bundle with 1 Dev Snipe, Wait Until a Snipe, Book Dev and Bundle 5",
    icon: <Wand2 className="w-6 h-6 text-white" />,
    bgColor: "bg-gradient-to-br from-pink-400 to-pink-600",
  },
  {
    title: "DarkMode Bundler",
    description: "Bundle with 1 Dev Snipe, Wait X SOL and Auto Sell",
    icon: <Moon className="w-6 h-6 text-white" />,
    bgColor: "bg-gradient-to-br from-indigo-400 to-indigo-600",
  },
  {
    title: "Turbo Bundler",
    description: "Flash Buy + Multi-DEX Arb + Auto Distribute to 25 Wallets",
    icon: <Rocket className="w-6 h-6 text-white" />,
    bgColor: "bg-gradient-to-br from-teal-400 to-cyan-600",
  },
];

const BundlerModes = () => {
  const navigate = useNavigate();

  const handleCardClick = (title: string) => {
    navigate(`/bundler/${encodeURIComponent(title)}`);
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Token Bundler Modes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our powerful bundling modes for PumpFun/Raydium/MS
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bundlerModes.map((mode, index) => (
            <Card
              key={index}
              className={`${mode.bgColor} text-white p-6 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl cursor-pointer`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in 0.6s ease-out forwards',
                opacity: 0,
              }}
              onClick={() => handleCardClick(mode.title)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 mb-4">
                  {mode.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{mode.title}</h3>
                <p className="text-white/80">{mode.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BundlerModes;
