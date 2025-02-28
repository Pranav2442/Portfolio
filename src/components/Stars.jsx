import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    return random.inSphere(new Float32Array(2000), { radius: 1.2 });
  });

  useFrame((state, delta) => {
    if (!ref.current) return;

    const animate = () => {
      if (!ref.current) return;

      const baseSpeed = 0.15;
      ref.current.rotation.x -= delta * baseSpeed;
      ref.current.rotation.y -= delta * baseSpeed;
    };

    requestAnimationFrame(animate);
  });

  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="red"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          alphaTest={0.5}
          alphaToCoverage={true}
        />
      </Points>
    </group>
  );
};

const StarBackground = () => {
  return (
    <div className="w-full h-screen fixed inset-0 z-[-1] overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]} // Optimize for device pixel ratio
        style={{
          touchAction: "none",
          WebkitTapHighlightColor: "transparent", // Prevent tap highlight on mobile
        }}
        performance={{ min: 0.1 }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarBackground;
