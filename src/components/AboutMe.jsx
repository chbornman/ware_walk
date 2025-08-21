import { UserCircleIcon, CameraIcon, CodeBracketIcon, HeartIcon } from '@heroicons/react/24/outline';
import profilePhoto from '../assets/images/profile.jpg';
import passengerOnPlum from '../assets/images/plum_street_passenger.jpg';
import cbr06319 from '../assets/images/historic_lancaster_building.jpg';
import cbr09867 from '../assets/images/street_candid_moment.jpg';
import part2 from '../assets/images/city_life_documentary.jpg';

const AboutMe = () => {
  const myWork = [
    { src: cbr06319, alt: "Lancaster Architecture" },
    { src: cbr09867, alt: "Street Photography" },
    { src: part2, alt: "Urban Life" }
  ];
  return (
    <section id="aboutme" className="min-h-screen flex items-center py-32 md:py-36 px-6 lg:px-20 xl:px-24 snap-section relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${passengerOnPlum})` }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <UserCircleIcon className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Hi, I'm Caleb!</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                I'm a photographer and software engineer living in Lancaster. I walk around the city with my engish setter pup and some sort of camera most every day.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Although I can nerd out about cameras (and will if you let me), my interest in photography leans into the vibrant history of "the social eye" that is capturing a moment in time. Over the last 150 years, photography has changed us. It introduces us to a world beyond our limited context, and turns a lens to stories that must be told.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Walks around Lancaster City</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {myWork.map((photo, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden group">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium">{photo.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
