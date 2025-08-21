import { PhotoIcon } from '@heroicons/react/24/outline';
import filmExport114 from '../assets/images/film_urban_landscape.jpeg';
import filmExport121 from '../assets/images/film_street_scene.jpeg';
import cbr03273 from '../assets/images/brick_building_facade.jpeg';
import cbr03364 from '../assets/images/downtown_intersection.jpeg';
import cbr06319 from '../assets/images/historic_lancaster_building.jpeg';
import cbr09867 from '../assets/images/street_candid_moment.jpeg';
import part2 from '../assets/images/city_life_documentary.jpeg';
import rriff from '../assets/images/abstract_urban_pattern.jpeg';
import janEcn1 from '../assets/images/winter_street_portrait.jpeg';
import janEcn2 from '../assets/images/winter_urban_scene.jpeg';
import street from '../assets/images/street_photography.jpeg';
import old645 from '../assets/images/vintage_film_portrait.jpeg';
import freshstart18 from '../assets/images/morning_light_street.jpeg';
import freshstart22 from '../assets/images/golden_hour_cityscape.jpeg';

const PhotoGallery = () => {
  const photos = [
    { src: filmExport114, alt: "Urban landscape", category: "Street" },
    { src: cbr03273, alt: "Architecture detail", category: "Architecture" },
    { src: part2, alt: "City life", category: "People" },
    { src: cbr03364, alt: "Street scene", category: "Street" },
    { src: janEcn1, alt: "Urban texture", category: "Details" },
    { src: cbr06319, alt: "Lancaster streets", category: "Architecture" },
    { src: filmExport121, alt: "Downtown view", category: "Street" },
    { src: rriff, alt: "Creative perspective", category: "Abstract" },
    { src: cbr09867, alt: "City moments", category: "People" },
    { src: janEcn2, alt: "Urban details", category: "Details" },
    { src: street, alt: "Street photography", category: "Street" },
    { src: old645, alt: "Film photography", category: "Film" },
    { src: freshstart18, alt: "Fresh perspective", category: "Creative" },
    { src: freshstart22, alt: "Urban exploration", category: "Street" },
  ];

  return (
    <section id="gallery" className="min-h-screen py-32 md:py-36 px-6 lg:px-20 xl:px-24 snap-section bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <PhotoIcon className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Photo <span className="text-gradient">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-bronze mx-auto mb-8"></div>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            A collection of moments captured during our Lancaster photo walks
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium">{photo.alt}</p>
                  <p className="text-amber-400 text-sm">{photo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-neutral-400 text-lg">
            Every photo tells a story. Join us to create your own.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;