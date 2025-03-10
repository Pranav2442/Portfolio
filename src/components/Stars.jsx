import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({ isMobile }) => {
  const ref = useRef();

  const particleCount = isMobile ? 1000 : 2000;

  const [sphere] = useState(() => {
    return random.inSphere(new Float32Array(particleCount * 3), {
      radius: 1.2,
    });
  });

  const [colors] = useState(() => {
    const palette = [
      [1.0, 1.0, 1.0],
      [0.7, 0.2, 0.9],
    ];

    const array = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const color = palette[Math.floor(Math.random() * palette.length)];
      array[i * 3] = color[0];
      array[i * 3 + 1] = color[1];
      array[i * 3 + 2] = color[2];
    }
    return array;
  });

  useFrame((state, delta) => {
    if (!ref.current) return;

    const rotationSpeed = isMobile ? 0.03 : 0.05;
    ref.current.rotation.x -= delta * rotationSpeed;
    ref.current.rotation.y -= delta * rotationSpeed;
  });

  return (
    <group rotation={[0, 0, Math.PI / 2]}>
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
          size={isMobile ? 0.006 : 0.005}
          sizeAttenuation={true}
          depthWrite={false}
          alphaTest={0.1}
          opacity={0.8}
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
        camera={{ position: [0, 0, 1], fov: isMobile ? 90 : 75 }}
        dpr={[1, isMobile ? 1.5 : 2]}
        style={{
          touchAction: "none",
          WebkitTapHighlightColor: "transparent",
        }}
        performance={{ min: 0.1, max: isMobile ? 0.5 : 1 }}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          alpha: false,
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
