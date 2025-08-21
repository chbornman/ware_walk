import { PlayIcon, BookOpenIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import filmExport16 from '../assets/images/film_city_texture.jpg';

const Resources = () => {
  const youtubeVideos = [
    {
      id: 1,
      embedId: "hVuTuib65WM",
      title: "Camera Basics"
    },
    {
      id: 2,
      embedId: "u1lxGXHboJM",
      title: "Street Photography",
    },

    {
      id: 3,
      embedId: "FnUiQD8l2o0",
      title: "Purpose in Photography"
    }
  ];

  return (
    <section id="resources" className="min-h-screen py-32 md:py-36 px-6 lg:px-20 xl:px-24 snap-section relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${filmExport16})` }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <VideoCameraIcon className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learning <span className="text-gradient">Resources</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-bronze mx-auto mb-6"></div>
          <p className="text-lg text-neutral-200 max-w-3xl mx-auto">
            Essential videos to prepare you for your photography journey
          </p>
        </div>

        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="group">
                <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-200">
                  <div className="aspect-video bg-neutral-100">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6 bg-white/95 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <PlayIcon className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-lg font-semibold text-neutral-900 group-hover:text-amber-600 transition-colors">
                          {video.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-10 bg-white/90 backdrop-blur-sm rounded-3xl border border-white/20">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Join us for an unforgettable photography experience through the streets of Lancaster.
              All skill levels welcome. Bring your curiosity and your camera.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;