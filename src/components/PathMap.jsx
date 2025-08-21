import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { MapIcon, BuildingLibraryIcon, PaintBrushIcon, CameraIcon } from '@heroicons/react/24/outline';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import americanYard from '../assets/images/urban_backyard.jpeg';
import cbr03273 from '../assets/images/brick_building_facade.jpeg';
import filmExport121 from '../assets/images/film_street_scene.jpeg';
import cbr03364 from '../assets/images/downtown_intersection.jpeg';
import janEcn from '../assets/images/winter_street_portrait.jpeg';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icon for photo stops
const photoStopIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="14" fill="#d97706" stroke="#fff" stroke-width="2"/>
      <path d="M12 10h6l1.5 2H21v8H9v-8h1.5L12 10z" fill="#fff"/>
      <circle cx="15" cy="15" r="2" fill="#fff"/>
    </svg>
  `),
  iconSize: [30, 30],
  iconAnchor: [15, 15],
  popupAnchor: [0, -15]
});

// Routing component
const Routing = ({ waypoints }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Dynamically import the routing machine
    import('leaflet-routing-machine').then(() => {
      // Hide the control container completely
      const container = L.DomUtil.create('div');
      container.style.display = 'none';

      const routingControl = L.Routing.control({
        waypoints: waypoints.map(coord => L.latLng(coord[0], coord[1])),
        routeWhileDragging: false,
        addWaypoints: false,
        createMarker: () => null, // Don't create markers, we'll use our own
        lineOptions: {
          styles: [{
            color: '#d97706',
            weight: 4,
            opacity: 0.7,
            dashArray: '8, 8'
          }]
        },
        show: false, // Hide the instructions panel
        fitSelectedRoutes: false,
        container: container // Use hidden container
      }).addTo(map);

      // Also hide the control container after it's added
      const controlContainer = document.querySelector('.leaflet-routing-container');
      if (controlContainer) {
        controlContainer.style.display = 'none';
      }

      return () => {
        map.removeControl(routingControl);
      };
    });
  }, [map, waypoints]);

  return null;
};

const PathMap = () => {
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    // Force map to re-render after component mounts
    const timer = setTimeout(() => {
      setMapKey(prev => prev + 1);
    }, 100);

    // Trigger resize event to fix rendering issues
    const resizeTimer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);

    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Ware Center - 42 N. Prince St, Lancaster, PA
  const wareCenter = [40.0398, -76.3067];
  const center = [40.0398, -76.3045];

  // Define waypoints for the route (corners where we turn)
  const routeWaypoints = [
    [40.0398, -76.3067], // Ware Center - Start
    [40.0410, -76.3067], // N Prince St & E Chestnut St
    [40.0410, -76.3035], // E Chestnut St & N Duke St
    [40.0398, -76.3035], // N Duke St & E Orange St
    [40.0398, -76.3020], // E Orange St & eastern point
    [40.0385, -76.3020], // Move south to E King St
    [40.0385, -76.3035], // E King St & N Duke St
    [40.0375, -76.3035], // N Duke St & Queen St
    [40.0375, -76.3067], // Queen St & N Prince St
    [40.0398, -76.3067], // Back to Ware Center
  ];

  // Key photo stops along the route
  const photoStops = [
    {
      position: [40.0410, -76.3050],
      name: "Central Market Area",
      description: "Historic market & street scenes"
    },
    {
      position: [40.0398, -76.3020],
      name: "East End Arts District",
      description: "Murals & creative spaces"
    },
    {
      position: [40.0385, -76.3035],
      name: "King Street",
      description: "Historic architecture"
    },
    {
      position: [40.0375, -76.3050],
      name: "Gallery Row",
      description: "Art galleries & cafes"
    }
  ];

  const highlights = [
    { icon: BuildingLibraryIcon, text: "Historic Architecture", image: cbr03273 },
    { icon: PaintBrushIcon, text: "Street Art & Murals", image: filmExport121 },
    { icon: CameraIcon, text: "Urban Landscapes", image: cbr03364 },
    { icon: MapIcon, text: "Local Landmarks", image: janEcn }
  ];

  return (
    <section id="pathmap" className="min-h-screen py-32 md:py-36 px-6 lg:px-20 xl:px-24 snap-section flex items-center relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${americanYard})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <MapIcon className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-gradient">Photography Route</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-bronze mx-auto mb-8"></div>
          <p className="text-lg text-neutral-200 max-w-3xl mx-auto mb-3">
            A carefully curated 1.5-mile loop through downtown Lancaster's most photogenic locations
          </p>
          <p className="text-base text-neutral-300 max-w-2xl mx-auto">
            Starting and ending at <span className="font-semibold">The Ware Center – Millersville University</span><br />
            42 N. Prince St, Lancaster, PA 17603
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 mb-10">
          {highlights.map((item, index) => (
            <div key={index} className="relative h-32 rounded-xl overflow-hidden group">
              <img
                src={item.image}
                alt={item.text}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
              <div className="absolute inset-0 flex items-center p-4">
                <item.icon className="w-8 h-8 text-amber-500 flex-shrink-0 mr-3" />
                <span className="font-semibold text-white text-lg">{item.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-bronze opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200">
            <MapContainer
              key={mapKey}
              center={center}
              zoom={16}
              style={{ height: '100%', width: '100%' }}
              className="z-10"
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              <Routing waypoints={routeWaypoints} />

              {/* Main start/end marker */}
              <Marker position={wareCenter}>
                <Popup>
                  <div className="font-semibold">The Ware Center</div>
                  <div className="text-sm text-gray-600">Millersville University</div>
                  <div className="text-sm">42 N. Prince St</div>
                  <div className="text-sm">Lancaster, PA 17603</div>
                  <div className="text-sm mt-2 font-medium text-amber-600">Start & End Point</div>
                </Popup>
              </Marker>

              {/* Photo stop markers */}
              {photoStops.map((stop, index) => (
                <Marker
                  key={index}
                  position={stop.position}
                  icon={photoStopIcon}
                >
                  <Popup>
                    <div className="font-semibold text-amber-600">{stop.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{stop.description}</div>
                    <div className="text-xs text-gray-500 mt-2">Photo Stop #{index + 1}</div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl border border-neutral-200">
            <div className="text-3xl font-bold text-amber-600 mb-2">1.5</div>
            <div className="text-neutral-600">Miles Total</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-neutral-200">
            <div className="text-3xl font-bold text-amber-600 mb-2">2</div>
            <div className="text-neutral-600">Hours Duration</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathMap;
