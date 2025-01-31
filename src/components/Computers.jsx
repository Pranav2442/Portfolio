import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Preload, useGLTF } from "@react-three/drei";

function Model(props) {
  const [scale, setScale] = useState(1)
  const [yPosition, setYPosition] = useState(-6)
 
  const group = useRef()

  const calculateScaleAndPosition = () => {
    const width = window.innerWidth
    if (width <= 480) { // Mobile
      return {
        scale: 0.30,
        yPosition: -7 // Lower position for mobile
      }
    } else if (width <= 768) { // Tablet
      return {
        scale: 0.30,
        yPosition: -6.5
      }
    } else if (width <= 1024) { // Small laptop
      return {
        scale: 0.30,
        yPosition: -6.2
      }
    } else { // Desktop and larger
      return {
        scale: 0.5,
        yPosition: -6
      }
    }
  }


  useEffect(() => {
    const handleResize = () => {
      const { scale: newScale, yPosition: newYPosition } = calculateScaleAndPosition()
      setScale(newScale)
      setYPosition(newYPosition)
    }

    // Set initial scale and position
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005 // Adjust this value to control rotation speed
    }
  })

  const { nodes, materials } = useGLTF('./desk/gamingroomaa.glb')
  return (
    <group scale={scale}>
    <group ref={group} {...props} position={[0, yPosition, 0]} dispose={null}>
      <group 
        position={[-0.45313001, 2.52297854, -3.10002923]}
        rotation={[-Math.PI / 2, -3e-8, 0.30338417]}
        scale={[3.21989298, 3.21989322, 3.21989322]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, -0.00000959, 0]}>
            <group position={[0, -0.00000959, 0]}>
              <group position={[0, -0.00000959, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials.MAT_Plastic}
                  position={[0, -0.00000959, 0]}
                />
              </group>
              <group position={[0, -0.00000959, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.MAT_Emission}
                  position={[0, -0.00000959, 0]}
                />
              </group>
              <group position={[0, -0.00000959, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_15.geometry}
                  material={materials.MAT_Details}
                  position={[0, -0.00000959, 0]}
                />
              </group>
              <group position={[0, -0.00000959, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.MAT_Plastic}
                  position={[0, -0.00000959, 0]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
      <group
        position={[0.25271416, 0.58510852, -2.9383502]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.14044116, 0.02908049, 0.11602581]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials['Material.005']}
        />
      </group>
      <group
        position={[-1.54811907, 2.56502056, -2.53824067]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.40009063, 0.40009069, 0.40009069]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 0, -0.00006104]}>
            <group
              position={[52.67376709, 0, -128.04730225]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[100, 99.99998474, 99.99998474]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_60.geometry}
                material={materials['Material.009']}
                position={[-0.87737679, 0, 0]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[-1.54811907, 2.46939373, -4.01587963]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.24174353, 0.24174356, 0.24174356]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.5699873, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_66.geometry}
              material={materials.phong1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_68.geometry}
              material={materials['Material.017']}
            />
          </group>
        </group>
      </group>
      <group
        position={[1.02304089, 5.92346096, -3.99716902]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.26594627, 0.2659463, 0.2659463]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-4.38767481, 0.12734032, 0]} scale={[1.28127062, 1.2812705, 1.2812705]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_75.geometry}
              material={materials.aiStandardSurface3SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_76.geometry}
              material={materials.aiStandardSurface3SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_77.geometry}
              material={materials.aiStandardSurface2SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_78.geometry}
              material={materials.aiStandardSurface1SG}
            />
          </group>
        </group>
      </group>
      <group
        position={[-1.77729654, 5.63714981, -4.14957666]}
        rotation={[-Math.PI / 2, 5e-8, -0.56657427]}
        scale={0.01547862}>
        <group position={[0.00000956, 0.00000349, 0.00001447]} rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.00000956, -0.00006867, -0.00001428]}>
            <group
              position={[-1.33236504, -0.0000692, -11.30866528]}
              rotation={[-Math.PI / 2, -1.1e-7, -0.86858317]}
              scale={[10.02005482, 10.02005482, 10.02005386]}>
              <group
                position={[0, 0, 2.54332304]}
                rotation={[-0.33676862, -0.14013085, 0.37959646]}>
                <group position={[-0.00000238, -0.70477772, -0.88248682]}>
                  <group
                    position={[5.11602211, 4.60933924, 3.01761866]}
                    rotation={[0.28422952, -0.35531445, 1.34566665]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_86.geometry}
                      material={materials.Metall_rough}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_87.geometry}
                      material={materials.Metall}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_88.geometry}
                      material={materials.Middle}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_89.geometry}
                      material={materials['material.001']}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group
        position={[-1.50970745, 5.63162279, -3.95463157]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.29475832, 4.2947588, 4.2947588]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0.00000381, 0, 0]}>
            <group position={[0.00000381, 0, 0]}>
              <group position={[0.00000381, 0, 0]}>
                <group position={[0.00000381, 0, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_96.geometry}
                    material={materials.Dial_2}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_97.geometry}
                    material={materials.Glass}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_98.geometry}
                    material={materials.Metal}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_99.geometry}
                    material={materials.Rubber}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_100.geometry}
                    material={materials.Screen}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_101.geometry}
                    material={materials.Lens}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_102.geometry}
                    material={materials.Button}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_103.geometry}
                    material={materials.Dial}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_104.geometry}
                    material={materials.Lens_Grip}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_105.geometry}
                    material={materials.Lens_Outer}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_106.geometry}
                    material={materials.Camera_Outer}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_107.geometry}
                    material={materials.Back_Outer}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group
        position={[-2.20872235, 5.81241989, -3.96263504]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.03303728, 0.00880548, 0.03303729]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_109.geometry}
          material={materials.aButton1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_110.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_111.geometry}
          material={materials.blinn3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_112.geometry}
          material={materials.blinn2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_113.geometry}
          material={materials.yButton1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_114.geometry}
          material={materials.bButton1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_115.geometry}
          material={materials.xButton1}
        />
      </group>
      <group
        position={[-4.97074938, 2.50552225, -3.64397645]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-0.01344566, 0.01344567, 0.01344567]}>
        <group position={[0, -0.00005555, -0.00000936]} rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.00003052, 0.00001526, 0]}>
            <group
              position={[-91.38430786, 63.43534851, 16.80967712]}
              rotation={[-Math.PI / 2, 0, 0]}>
              <group position={[85.71200562, 1.80971313, -63.43532944]}>
                <group position={[-487.13793945, 0.00000548, -0.00001138]} scale={[-1, 1, 1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_128.geometry}
                    material={materials['03_-_Default']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_129.geometry}
                    material={materials['12_-_Default']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_130.geometry}
                    material={materials['04_-_Default']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_131.geometry}
                    material={materials['07_-_Default']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_132.geometry}
                    material={materials.Material_26}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_133.geometry}
                    material={materials['11_-_Default']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_134.geometry}
                    material={materials['05_-_Default']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_135.geometry}
                    material={materials.Box002__0}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_136.geometry}
                    material={materials['06_-_Default']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_137.geometry}
                    material={materials['10_-_Default']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_138.geometry}
                    material={materials['08_-_Default']}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group
        position={[-3.52732706, 1.60759854, -2.0392065]}
        rotation={[-Math.PI, 0.62150671, -Math.PI]}
        scale={0.03227134}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_140.geometry}
          material={materials.Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_141.geometry}
          material={materials.ShinyPlastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_142.geometry}
          material={materials.LeatherCougar2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_143.geometry}
          material={materials.LeatherCougar}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_144.geometry}
          material={materials.Metallic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_145.geometry}
          material={materials.Leather}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_146.geometry}
          material={materials.Orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_147.geometry}
          material={materials['Leather.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_148.geometry}
          material={materials['Leather.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_149.geometry}
          material={materials.Belt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_150.geometry}
          material={materials['Metallic.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.material_0}
        position={[0, 0.41192749, 0]}
        scale={4.37795067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials['Material.011']}
        position={[0, 0.41192749, 0]}
        scale={4.37795067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials['Material.010']}
        position={[0, 0.41192749, 0]}
        scale={4.37795067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials['Material.012']}
        position={[0, 0.41192749, 0]}
        scale={4.37795067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials['Material.019']}
        position={[-4.37795067, 0.41192749, -4.37795067]}
        scale={[0.19038522, 3.98491096, 0.19038522]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials['Material.014']}
        position={[-1.54811907, 2.50557399, -3.10002923]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.55771452, 1, 1.70333898]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials['Material.008']}
        position={[-4.19806194, 2.45640445, -2.38607931]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 2.57018638]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials['Material.005']}
        position={[-3.52106714, 0.58510852, -2.9383502]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.14044116, 0.02908049, 0.11602581]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials['Material.001']}
        position={[0.25271416, 0.58510852, -2.9383502]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.14044116, 0.02908049, 0.11602581]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials.material_0}
        position={[0.25271416, 0.58510852, -2.9383502]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.14044116, 0.02908049, 0.11602581]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials.material_0}
        position={[0.25271416, 0.58510852, -2.9383502]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.14044116, 0.02908049, 0.11602581]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_46.geometry}
        material={materials.material_0}
        position={[0.25271416, 0.58510852, -2.9383502]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.14044116, 0.02908049, 0.11602581]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_48.geometry}
        material={materials.material_0}
        position={[0.25271416, 0.58510852, -2.9383502]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.14044116, 0.02908049, 0.11602581]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_50.geometry}
        material={materials.material_0}
        position={[0.25271416, 0.58510852, -2.9383502]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.14044116, 0.02908049, 0.11602581]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_52.geometry}
        material={materials['Material.006']}
        position={[-3.52106714, 0.58510852, -2.9383502]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.14044116, 0.02908049, 0.11602581]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_54.geometry}
        material={materials['Material.007']}
        position={[-4.19806194, 2.45640445, -2.38607931]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 2.57018638]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_70.geometry}
        material={materials['Material.013']}
        position={[-1.54811907, 5.63510513, -4.01155615]}
        scale={[1.76276374, 1, 0.38800442]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_117.geometry}
        material={materials['Material.015']}
        position={[-1.43797266, 7.08308411, -4.29555655]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.47720602, 0.60900456, 0.60900456]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_119.geometry}
        material={materials['Material.016']}
        position={[-1.43797266, 7.08308411, -4.28872919]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.47720602, 0.60900456, 0.60900456]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_121.geometry}
        material={materials['Material.018']}
        position={[-4.3776722, 4.76337385, -1.90651667]}
        rotation={[Math.PI / 2, 6e-8, -Math.PI / 2]}
      />
    </group>
    </group>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef();
  const canvasRef = useRef();
  const [isRotating, setIsRotating] = useState(false);
  const touchRef = useRef({ startX: 0, startY: 0 });

  // Handle mobile screen detection
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Handle touch events
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e) => {
      touchRef.current = {
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
        scrollY: window.scrollY
      };
    };

    const handleTouchMove = (e) => {
      if (!e.touches[0]) return;
      
      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;
      const deltaX = touchRef.current.startX - touchX;
      const deltaY = touchRef.current.startY - touchY;
      
      // Determine if the movement is more horizontal or vertical
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        // Vertical movement - handle scrolling
        e.preventDefault();
        window.scrollTo(0, touchRef.current.scrollY + deltaY);
        setIsRotating(false);
      } else if (Math.abs(deltaX) > 10) {
        // Horizontal movement - handle rotation
        setIsRotating(true);
        // The OrbitControls component will handle the actual rotation
      }
    };

    const handleTouchEnd = () => {
      setIsRotating(false);
    };

    // Add event listeners to the container
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full touch-pan-y"
      style={{ 
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Canvas 
        ref={canvasRef}
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ 
          position: "absolute",
          top: 0,
          left: 0,
          touchAction: "none",
        }}
      >
        <React.Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <Environment preset="sunset" />

          <OrbitControls 
            enableZoom={false}
            enablePan={false} 
            enableRotate={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            maxAzimuthAngle={Math.PI / 4}
            minAzimuthAngle={-Math.PI / 4}
            makeDefault
            enabled={isRotating || !isMobile}  // Enable controls during rotation or on desktop
          />

          <Model />
        </React.Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

useGLTF.preload("./desk/gamingroomaa.glb");
export default ComputersCanvas;