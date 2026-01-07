import { useState, useRef, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import Confetti from '@/components/Confetti';
import * as THREE from 'three';

// 3D Birthday Cake Component
const Cake3D = ({ onBlow }: { onBlow: () => void }) => {
  const [candlesLit, setCandlesLit] = useState(true);

  const handleClick = () => {
    if (candlesLit) {
      setCandlesLit(false);
      onBlow();
      setTimeout(() => setCandlesLit(true), 4000);
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group onClick={handleClick}>
        {/* Base plate */}
        <mesh position={[0, -0.6, 0]}>
          <cylinderGeometry args={[2.2, 2.3, 0.1, 32]} />
          <meshStandardMaterial color="#f5e6d3" metalness={0.3} roughness={0.5} />
        </mesh>

        {/* Bottom layer - chocolate */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[1.8, 1.9, 0.7, 32]} />
          <meshStandardMaterial color="#5c3d2e" roughness={0.6} />
        </mesh>

        {/* Middle layer - pink */}
        <mesh position={[0, 0.35, 0]}>
          <cylinderGeometry args={[1.4, 1.5, 0.6, 32]} />
          <meshStandardMaterial color="#e8a4c9" roughness={0.5} />
        </mesh>

        {/* Top layer - cream */}
        <mesh position={[0, 0.8, 0]}>
          <cylinderGeometry args={[1, 1.1, 0.5, 32]} />
          <meshStandardMaterial color="#fff5eb" roughness={0.4} />
        </mesh>

        {/* Frosting swirls */}
        {[...Array(8)].map((_, i) => (
          <mesh key={i} position={[Math.cos(i * Math.PI / 4) * 1.6, 0.15, Math.sin(i * Math.PI / 4) * 1.6]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#ffb6c1" roughness={0.3} />
          </mesh>
        ))}

        {/* Candles */}
        {[...Array(5)].map((_, i) => {
          const angle = (i / 5) * Math.PI * 2;
          const x = Math.cos(angle) * 0.5;
          const z = Math.sin(angle) * 0.5;
          return (
            <group key={i} position={[x, 1.3, z]}>
              {/* Candle body */}
              <mesh>
                <cylinderGeometry args={[0.06, 0.06, 0.4, 16]} />
                <meshStandardMaterial color="#e8a4c9" />
              </mesh>
              {/* Flame */}
              {candlesLit && (
                <mesh position={[0, 0.3, 0]}>
                  <coneGeometry args={[0.08, 0.2, 16]} />
                  <meshStandardMaterial 
                    color="#ffaa00" 
                    emissive="#ff6600" 
                    emissiveIntensity={2}
                  />
                </mesh>
              )}
            </group>
          );
        })}

        {/* Cherry on top */}
        <mesh position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#c41e3a" roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
};

const CakePage = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: 390, height: 844 }
      });
      setCameraStream(stream);
      setShowCamera(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Camera error:', err);
      alert('Unable to access camera. Please allow camera permissions.');
    }
  };

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
    setShowCamera(false);
  };

  useEffect(() => {
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [cameraStream]);

  useEffect(() => {
    if (videoRef.current && cameraStream) {
      videoRef.current.srcObject = cameraStream;
    }
  }, [cameraStream, showCamera]);

  const handleBlow = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 100);
  };

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <Confetti trigger={showConfetti} />

      {/* Back button */}
      <Link 
        to="/" 
        className="fixed top-4 left-4 z-50 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-full p-3 text-foreground active:scale-95 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </Link>

      {showCamera ? (
        /* AR Camera View */
        <div className="fixed inset-0 z-40">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* 3D Cake Overlay */}
          <div className="absolute inset-0">
            <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} />
              
              <Suspense fallback={null}>
                <Cake3D onBlow={handleBlow} />
              </Suspense>
              
              <OrbitControls enableZoom={true} enablePan={false} />
            </Canvas>
          </div>

          {/* UI Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 safe-area-bottom">
            <div className="bg-card/90 backdrop-blur-md rounded-3xl p-4 border border-primary/20">
              <p className="text-center text-foreground font-semibold mb-3">
                ✨ Tap the cake to blow candles! ✨
              </p>
              <button
                onClick={stopCamera}
                className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-2xl active:scale-95 transition-transform"
              >
                Close Camera
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Default View */
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
          {/* 3D Cake Preview */}
          <div className="w-full max-w-sm aspect-square mb-8">
            <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} />
              
              <Suspense fallback={null}>
                <Cake3D onBlow={handleBlow} />
              </Suspense>
              
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
          </div>

          <div className="text-center max-w-sm">
            <h1 className="font-handwritten text-4xl text-primary text-glow mb-2">
              🎂 Birthday Cake 🎂
            </h1>
            <p className="text-muted-foreground mb-6">
              Open your camera to see the floating 3D cake in AR! Tap to blow the candles ✨
            </p>
            
            <button
              onClick={startCamera}
              className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold py-4 rounded-2xl glow-pulse active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                <circle cx="12" cy="13" r="3"/>
              </svg>
              Open AR Camera
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default CakePage;
