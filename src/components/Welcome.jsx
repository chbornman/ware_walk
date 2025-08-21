import { CameraIcon, PaintBrushIcon, LightBulbIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const Welcome = () => {
  const features = [
    {
      icon: CameraIcon,
      title: "All Skill Levels",
      description: "From beginners to experienced photographers"
    },
    {
      icon: PaintBrushIcon,
      title: "Artistic Vision",
      description: "Develop your unique photographic perspective"
    },
    {
      icon: LightBulbIcon,
      title: "Technical & Creative",
      description: "Balance technique with artistic expression"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 md:py-28 px-6 bg-white snap-section">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <AcademicCapIcon className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Welcome to Your <span className="text-gradient">Creative Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-bronze mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-100 hover:border-amber-300 transition-all duration-300 hover:shadow-xl hover:shadow-amber-100"
            >
              <feature.icon className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-neutral-50 to-white rounded-3xl p-10 md:p-12 border border-neutral-100">
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-700 leading-relaxed mb-6">
              Join us for an inspiring photography workshop that transforms how you see the world through your lens. 
              This experience combines <span className="font-semibold text-neutral-900">artistic expression</span> with 
              practical knowledge, designed for photographers at every level of their journey.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Bring your camera or smartphone—that's all you need. We'll explore downtown Lancaster's rich visual tapestry, 
              discussing <span className="font-semibold text-neutral-900">composition, light, and storytelling</span> while 
              discovering how photography captures the soul of our urban landscape.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-600 rounded-r-xl p-6 mt-8">
              <p className="text-neutral-800 font-medium">
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