import { CameraIcon, PaintBrushIcon, LightBulbIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import filmExport33 from '../assets/images/film_urban_landscape.jpg';
import photoWalk from '../assets/images/winter_urban_scene.jpg';
import curvesImg from '../assets/images/golden_hour_cityscape.jpg';
import cbr00282 from '../assets/images/morning_light_street.jpg';

const Welcome = () => {
  const features = [
    {
      icon: CameraIcon,
      title: "All Skill Levels",
      description: "From beginners to experienced photographers",
      image: photoWalk
    },
    {
      icon: PaintBrushIcon,
      title: "Artistic Vision",
      description: "Develop your unique photographic perspective",
      image: curvesImg
    },
    {
      icon: LightBulbIcon,
      title: "Technical & Creative",
      description: "Balance technique with artistic expression",
      image: cbr00282
    }
  ];

  return (
    <section id="welcome" className="min-h-screen flex items-center py-32 md:py-36 px-6 lg:px-20 xl:px-24 snap-section relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${filmExport33})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <AcademicCapIcon className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to Your <span className="text-gradient">Creative Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-bronze mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <feature.icon className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-neutral-200">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/20">
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-800 leading-relaxed mb-6">
              Join us for an inspiring photography workshop that transforms how you see the world through your lens.
              This experience combines <span className="font-semibold text-neutral-900">artistic expression</span> with
              practical knowledge, designed for photographers at every level of their journey.
            </p>
            <p className="text-neutral-800 leading-relaxed mb-6">
              Bring your camera or smartphone—that's all you need. We'll explore downtown Lancaster's rich visual tapestry,
              discussing <span className="font-semibold text-neutral-900">composition, light, and storytelling</span> while
              discovering how photography captures the soul of our urban landscape.
            </p>
            <div className="bg-amber-50/90 border-l-4 border-amber-600 rounded-r-xl p-6 mt-8">
              <p className="text-neutral-900 font-medium">
                Technical Q&A sessions before and after the walk
              </p>
              <p className="text-neutral-600 mt-2">
                Focus on developing your photographic eye and understanding the deeper meaning behind the images we create.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
