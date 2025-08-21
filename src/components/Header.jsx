import { SparklesIcon } from '@heroicons/react/24/outline';
import sueWalk from '../assets/images/architectural_details.jpeg';

const Header = () => {
  return (
    <header id="header" className="relative min-h-screen flex items-center justify-center overflow-hidden snap-section">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sueWalk})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      <div className="relative px-6 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 animate-fade-in">
            <SparklesIcon className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-600">Photography Workshop</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-slide-up">
            <span className="block font-light text-2xl md:text-3xl lg:text-4xl mb-4 text-neutral-300">
              Ware Center
            </span>
            <span className="text-gradient">Photo Walk</span>
            <span className="block mt-2 text-3xl md:text-5xl lg:text-6xl">
              Downtown Lancaster
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Discover the art of urban photography through the historic streets of Lancaster
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
    </header>
  );
};

export default Header;
