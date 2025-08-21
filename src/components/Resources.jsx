import { PlayIcon, BookOpenIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

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
    <section className="min-h-screen py-20 md:py-28 px-6 bg-white snap-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <VideoCameraIcon className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Learning <span className="text-gradient">Resources</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-bronze mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
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
                  <div className="p-6 bg-gradient-to-br from-neutral-50 to-white">
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

        <div className="mt-20 p-10 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border border-amber-200">
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