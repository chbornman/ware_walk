import { UserCircleIcon, CameraIcon, CodeBracketIcon, HeartIcon } from '@heroicons/react/24/outline';
import profilePhoto from '../assets/images/profile.jpg';

const AboutMe = () => {
  return (
    <section className="min-h-screen flex items-center py-20 md:py-28 px-6 bg-white snap-section">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <UserCircleIcon className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Meet Your <span className="text-gradient">Guide</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-bronze mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-amber-100">
                <img 
                  src={profilePhoto} 
                  alt="Caleb - Photography Guide" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-amber-600">
                <CameraIcon className="w-12 h-12 text-amber-600" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-6">
            <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-neutral-100">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Hi, I'm Caleb!</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                I'm a photographer and software engineer living in the heart of Lancaster, PA. 
                My unique perspective blends technical precision with artistic vision, allowing me to see 
                the world through both analytical and creative lenses.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                When I'm not behind the camera or writing code, you'll find me exploring Lancaster's 
                vibrant streets with my partner Megan and our energetic young English Setter. At home, 
                our two cats keep us entertained with their antics and provide endless photo opportunities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <CameraIcon className="w-6 h-6 text-amber-600" />
                <span className="font-medium text-neutral-800">Photographer</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <CodeBracketIcon className="w-6 h-6 text-amber-600" />
                <span className="font-medium text-neutral-800">Software Engineer</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <HeartIcon className="w-6 h-6 text-amber-600" />
                <span className="font-medium text-neutral-800">Lancaster Local</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-l-4 border-amber-600">
              <p className="text-neutral-700 italic">
                "Photography has been my passion for years, and I love sharing the joy of capturing 
                moments and stories through images. This photo walk combines my love for our city 
                with my enthusiasm for helping others discover their photographic voice."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;