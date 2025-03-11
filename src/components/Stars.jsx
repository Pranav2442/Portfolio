import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({ isMobile }) => {
  const ref = useRef();
  
  const particleCount = isMobile ? 400 : 1800;
  const radius = isMobile ? 1.6 : 2.0;
  
  const [sphere] = useState(() => {
    return random.inSphere(new Float32Array(particleCount * 3), {
      radius: radius,
    });
  });

  const [sizes] = useState(() => {
    const array = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random();
      if (size < 0.6) array[i] = 0.4 + (Math.random() * 0.3);
      else if (size < 0.9) array[i] = 0.7 + (Math.random() * 0.4);
      else array[i] = 1.1 + (Math.random() * 0.5);
    }
    return array;
  });

  const [colors] = useState(() => {
    const palette = [
      [1.0, 1.0, 1.0],
      [0.9, 0.9, 1.0],
      [1.0, 0.9, 0.7],
      [1.0, 0.8, 0.6],
      [1.0, 0.6, 0.4],
      [0.8, 0.6, 1.0],
      [0.6, 0.8, 1.0],
      [0.2, 0.5, 1.0],
      [1.0, 0.7, 0.8],
      [0.1, 0.8, 0.6],
    ];
    
    const weights = [0.25, 0.2, 0.15, 0.08, 0.06, 0.07, 0.08, 0.05, 0.04, 0.02];
    
    const array = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random();
      let colorIndex = 0;
      let sum = 0;
      
      for (let j = 0; j < weights.length; j++) {
        sum += weights[j];
        if (rand < sum) {
          colorIndex = j;
          break;
        }
      }
      
      const color = palette[colorIndex];
      array[i * 3] = color[0];
      array[i * 3 + 1] = color[1];
      array[i * 3 + 2] = color[2];
    }
    return array;
  });

  useFrame((state, delta) => {
    if (!ref.current) return;

    const rotationSpeed = isMobile ? 0.01 : 0.015;
    ref.current.rotation.x -= delta * rotationSpeed;
    ref.current.rotation.y -= delta * rotationSpeed;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        colors={colors}
      >
        <PointMaterial
          transparent
          vertexColors
          size={isMobile ? 0.008 : 0.006}
          sizeAttenuation={true}
          depthWrite={false}
          alphaTest={0.25}
          opacity={0.8}
          roundness={1.0}
          blending={2}
        />
      </Points>
    </group>
  );
};

const StarBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-screen fixed inset-0 z-[-1] overflow-hidden bg-black">
      <Canvas
        camera={{ position: [0, 0, 1], fov: isMobile ? 70 : 55 }}
        dpr={[1, isMobile ? 1.2 : 1.5]} 
        style={{
          touchAction: "none",
          WebkitTapHighlightColor: "transparent",
        }}
        performance={{ min: 0.1, max: isMobile ? 0.3 : 0.6 }}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          alpha: false,
          stencil: false,
          depth: true,
        }}
      >
        <Suspense fallback={null}>
          <Stars isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarBackground;