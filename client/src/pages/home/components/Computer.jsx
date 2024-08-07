import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../../../components/loader/CanvasLoader";
import { scene } from "../../../assets";

const Computer = () => {
  const computer = useGLTF(scene);
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight inteensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={1.0}
        position={[0, -2.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <div style={{ height: "30vh", width: "70vw" }}>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computer />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputerCanvas;
