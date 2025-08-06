import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DataPoint {
  id: number;
  lat: number;
  lng: number;
  name: string;
  color: string;
}

interface Arc {
  id: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
}

export function CyberGlobe() {
  const [dataPoints] = useState<DataPoint[]>([
    { id: 1, lat: 40.7128, lng: -74.0060, name: "New York", color: "#ffffff" },
    { id: 2, lat: 51.5074, lng: -0.1278, name: "London", color: "#ffffff" },
    { id: 3, lat: 35.6762, lng: 139.6503, name: "Tokyo", color: "#ffffff" },
    { id: 4, lat: -33.8688, lng: 151.2093, name: "Sydney", color: "#ffffff" },
    { id: 5, lat: 55.7558, lng: 37.6176, name: "Moscow", color: "#ffffff" },
    { id: 6, lat: 28.6139, lng: 77.2090, name: "Delhi", color: "#ffffff" },
    { id: 7, lat: -23.5505, lng: -46.6333, name: "São Paulo", color: "#ffffff" },
    { id: 8, lat: 1.3521, lng: 103.8198, name: "Singapore", color: "#ffffff" },
    { id: 9, lat: 37.7749, lng: -122.4194, name: "San Francisco", color: "#ffffff" },
    { id: 10, lat: -26.2041, lng: 28.0473, name: "Johannesburg", color: "#ffffff" },
    { id: 11, lat: 25.2048, lng: 55.2708, name: "Dubai", color: "#ffffff" },
    { id: 12, lat: 52.5200, lng: 13.4050, name: "Berlin", color: "#ffffff" },
  ]);

  const [arcs, setArcs] = useState<Arc[]>([]);
  const [rings, setRings] = useState<Array<DataPoint & { timestamp: number }>>([]);

  useEffect(() => {
    const generateArcs = () => {
      const newArcs: Arc[] = [];
      for (let i = 0; i < 15; i++) {
        const from = dataPoints[Math.floor(Math.random() * dataPoints.length)];
        const to = dataPoints[Math.floor(Math.random() * dataPoints.length)];
        if (from.id !== to.id) {
          newArcs.push({
            id: i,
            startLat: from.lat,
            startLng: from.lng,
            endLat: to.lat,
            endLng: to.lng,
            color: "#ffffff"
          });
        }
      }
      return newArcs;
    };

    const generateRings = () => {
      const numRings = Math.floor((dataPoints.length * 4) / 5);
      const ringPoints: Array<DataPoint & { timestamp: number }> = [];
      for (let i = 0; i < numRings; i++) {
        const point = dataPoints[Math.floor(Math.random() * dataPoints.length)];
        ringPoints.push({ ...point, timestamp: Date.now() + i });
      }
      return ringPoints;
    };

    setArcs(generateArcs());
    setRings(generateRings());
    
    const arcInterval = setInterval(() => {
      setArcs(generateArcs());
    }, 8000);

    const ringInterval = setInterval(() => {
      setRings(generateRings());
    }, 3000);

    return () => {
      clearInterval(arcInterval);
      clearInterval(ringInterval);
    };
  }, [dataPoints]);

  // Convert lat/lng to 2D coordinates for front-facing projection
  const project = (lat: number, lng: number, rotation = 0) => {
    const radius = 180;
    const adjustedLng = lng + rotation;
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (adjustedLng + 180) * (Math.PI / 180);
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    
    return { 
      x: x / 2, 
      y: y / 2, 
      z: z / 2,
      visible: z > -80 // Show points on front hemisphere
    };
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      <div className="relative w-96 h-96 perspective-1000">
        
        {/* Main Globe Container */}
        <motion.div
          className="relative w-full h-full preserve-3d"
          animate={{ rotateY: 360 }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Globe Base */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20 overflow-hidden"
               style={{
                 background: `
                   radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 50%),
                   radial-gradient(circle at 70% 70%, rgba(255,255,255,0.08) 0%, transparent 50%),
                   linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)
                 `,
                 boxShadow: `
                   inset 0 0 80px rgba(255,255,255,0.1),
                   0 0 120px rgba(255,255,255,0.08)
                 `
               }}>
            
            {/* Latitude Grid Lines */}
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`lat-${i}`}
                className="absolute border-white/10"
                style={{
                  top: `${i * 12.5}%`,
                  left: '5%',
                  right: '5%',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                  borderRadius: '50%',
                }}
              />
            ))}
            
            {/* Longitude Grid Lines */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`lng-${i}`}
                className="absolute border-white/8"
                style={{
                  left: `${5 + i * 7.5}%`,
                  top: '0%',
                  bottom: '0%',
                  width: '1px',
                  background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
                }}
              />
            ))}

            {/* Hexagon Pattern */}
            <div className="absolute inset-0 opacity-30">
              {Array.from({ length: 200 }).map((_, i) => {
                const size = 2 + Math.random() * 4;
                const opacity = 0.1 + Math.random() * 0.2;
                return (
                  <div
                    key={i}
                    className="absolute border border-white rounded-sm"
                    style={{
                      left: `${Math.random() * 90}%`,
                      top: `${Math.random() * 90}%`,
                      width: `${size}px`,
                      height: `${size}px`,
                      opacity: opacity,
                      transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Data Points Layer */}
          <div className="absolute inset-0">
            {dataPoints.map((point) => {
              const coords = project(point.lat, point.lng);
              
              if (!coords.visible) return null;
              
              return (
                <motion.div
                  key={point.id}
                  className="absolute"
                  style={{
                    left: `${50 + (coords.x / 200) * 100}%`,
                    top: `${50 - (coords.y / 200) * 100}%`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: Math.floor(coords.z + 200),
                  }}
                >
                  <motion.div
                    className="w-3 h-3 bg-white rounded-full relative"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: point.id * 0.2,
                    }}
                  >
                    {/* Ping effect */}
                    <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20" />
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                      {point.name}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Connection Arcs */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {arcs.map((arc) => {
              const startCoords = project(arc.startLat, arc.startLng);
              const endCoords = project(arc.endLat, arc.endLng);
              
              if (!startCoords.visible || !endCoords.visible) return null;
              
              const x1 = 50 + (startCoords.x / 200) * 100;
              const y1 = 50 - (startCoords.y / 200) * 100;
              const x2 = 50 + (endCoords.x / 200) * 100;
              const y2 = 50 - (endCoords.y / 200) * 100;
              
              // Create curved path
              const midX = (x1 + x2) / 2;
              const midY = (y1 + y2) / 2 - Math.abs(x1 - x2) * 0.2;
              
              return (
                <motion.path
                  key={arc.id}
                  d={`M ${x1}% ${y1}% Q ${midX}% ${midY}% ${x2}% ${y2}%`}
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  strokeDasharray="8,4"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
              );
            })}
          </svg>

          {/* Ring Effects */}
          <div className="absolute inset-0">
            {rings.map((ring, index) => {
              const coords = project(ring.lat, ring.lng);
              
              if (!coords.visible) return null;
              
              return (
                <motion.div
                  key={`ring-${ring.timestamp}-${index}`}
                  className="absolute border border-white/30 rounded-full"
                  style={{
                    left: `${50 + (coords.x / 200) * 100}%`,
                    top: `${50 - (coords.y / 200) * 100}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    scale: [0, 3],
                    opacity: [0.6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  initial={{ scale: 0, opacity: 0.6 }}
                />
              );
            })}
          </div>
        </motion.div>

        {/* Outer Orbital Rings */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute border border-white/10 rounded-full"
            style={{
              inset: `${-20 - i * 15}px`,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ 
              duration: 60 + i * 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}

        {/* Ambient Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -15, 0],
                x: [0, Math.random() * 10 - 5, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CyberGlobe;