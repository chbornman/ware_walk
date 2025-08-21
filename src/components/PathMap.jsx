import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import { MapIcon, BuildingLibraryIcon, PaintBrushIcon, CameraIcon, ClockIcon } from '@heroicons/react/24/outline';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const PathMap = () => {
  // Ware Center - 42 N. Prince St, Lancaster, PA
  const wareCenter = [40.0398, -76.3067];
  const center = wareCenter;
  
  const pathCoordinates = [
    [40.0398, -76.3067], // Ware Center - 42 N. Prince St
    [40.0410, -76.3067], // North on Prince St to Chestnut St
    [40.0410, -76.3050], // East on Chestnut St
    [40.0410, -76.3035], // Continue East to Duke St
    [40.0398, -76.3035], // South on Duke St to Orange St
    [40.0398, -76.3020], // East on Orange St
    [40.0385, -76.3020], // South to King St
    [40.0385, -76.3035], // West on King St
    [40.0375, -76.3035], // South to Queen St
    [40.0375, -76.3050], // West on Queen St
    [40.0375, -76.3067], // West to Prince St
    [40.0385, -76.3067], // North on Prince St
    [40.0398, -76.3067], // Return to Ware Center
  ];

  const highlights = [
    { icon: BuildingLibraryIcon, text: "Historic Architecture" },
    { icon: PaintBrushIcon, text: "Street Art & Murals" },
    { icon: CameraIcon, text: "Urban Landscapes" },
    { icon: MapIcon, text: "Local Landmarks" }
  ];

  return (
    <section className="min-h-screen py-20 md:py-28 px-6 bg-neutral-50 snap-section flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <MapIcon className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Our <span className="text-gradient">Photography Route</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-bronze mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-3">
            A carefully curated 1.5-mile loop through downtown Lancaster's most photogenic locations
          </p>
          <p className="text-base text-neutral-500 max-w-2xl mx-auto">
            Starting and ending at <span className="font-semibold">The Ware Center – Millersville University</span><br/>
            42 N. Prince St, Lancaster, PA 17603
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 mb-10">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-neutral-200">
              <item.icon className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <span className="font-medium text-neutral-800">{item.text}</span>
            </div>
          ))}
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-bronze opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200">
            <MapContainer 
              center={center} 
              zoom={15} 
              style={{ height: '100%', width: '100%' }}
              className="z-10"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Polyline 
                pathOptions={{ 
                  color: '#d97706', 
                  weight: 5, 
                  opacity: 0.8,
                  dashArray: '10, 10',
                  lineCap: 'round',
                  lineJoin: 'round'
                }} 
                positions={pathCoordinates} 
              />
              <Marker position={wareCenter}>
                <Popup>
                  <div className="font-semibold">The Ware Center</div>
                  <div className="text-sm text-gray-600">Millersville University</div>
                  <div className="text-sm">42 N. Prince St</div>
                  <div className="text-sm">Lancaster, PA 17603</div>
                  <div className="text-sm mt-2 font-medium text-amber-600">Start & End Point</div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl border border-neutral-200">
            <div className="text-3xl font-bold text-amber-600 mb-2">1.5</div>
            <div className="text-neutral-600">Miles Total</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-neutral-200">
            <div className="text-3xl font-bold text-amber-600 mb-2">2</div>
            <div className="text-neutral-600">Hours Duration</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-neutral-200">
            <div className="text-3xl font-bold text-amber-600 mb-2">10+</div>
            <div className="text-neutral-600">Photo Spots</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathMap;