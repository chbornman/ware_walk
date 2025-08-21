import { PlayIcon, BookOpenIcon, LinkIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

const Resources = () => {
  const youtubeVideos = [
    {
      id: 1,
      embedId: "u1lxGXHboJM",
      title: "Photography Composition Masterclass",
      playlist: true
    },
    {
      id: 2,
      embedId: "hVuTuib65WM",
      title: "Street Photography Essentials"
    },
    {
      id: 3,
      embedId: "FnUiQD8l2o0",
      title: "Understanding Light in Photography"
    }
  ];

  const links = [
    {
      title: "The Art of Photography - YouTube Channel",
      url: "https://www.youtube.com/c/theartofphotography",
      description: "Excellent resource for photography history and theory"
    },
    {
      title: "Street Photography Collective",
      url: "https://streetphotographycollective.com/",
      description: "Inspiration and tips for urban photography"
    },
    {
      title: "Understanding Exposure - Book",
      url: "https://www.goodreads.com/book/show/7092718-understanding-exposure",
      description: "Bryan Peterson's classic guide to photography fundamentals"
    },
    {
      title: "Lancaster Photography Club",
      url: "#",
      description: "Local photography community and events"
    }
  ];

  return (
    <section className="min-h-screen py-20 md:py-28 px-6 bg-white snap-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <BookOpenIcon className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Learning <span className="text-gradient">Resources</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-bronze mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Curated videos and materials to enhance your photography journey
          </p>
        </div>
        
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <VideoCameraIcon className="w-8 h-8 text-amber-600" />
            <h3 className="text-3xl font-semibold text-neutral-900">Video Tutorials</h3>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="group">
                <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-200">
                  <div className="aspect-video bg-neutral-100">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.embedId}${video.playlist ? '?list=PLjMZd2d5VnJHUrah69iZf66uQiHV9L0Hv' : ''}`}
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
                        {video.playlist && (
                          <span className="inline-block mt-2 px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">
                            Full Playlist
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-10">
            <LinkIcon className="w-8 h-8 text-amber-600" />
            <h3 className="text-3xl font-semibold text-neutral-900">Additional Resources</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 bg-gradient-to-br from-neutral-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-amber-300"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-bronze rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h4 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {link.title}
                </h4>
                <p className="text-neutral-600">{link.description}</p>
                <div className="mt-4 text-amber-600 font-medium flex items-center gap-2">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
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