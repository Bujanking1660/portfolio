import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import { useTheme } from "../../hooks/useTheme";

export const Background3D = () => {
  const meshRef = useRef();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.2;
      meshRef.current.rotation.y = Math.cos(time * 0.1) * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh
          ref={meshRef}
          position={[0, 0, -3]}
          scale={15}
          rotation={[-0.5, 0, 0]}
        >
          <planeGeometry args={[4, 4, 32, 32]} />
          <MeshDistortMaterial
            color={isDark ? "#050505" : "#e5e7eb"}
            speed={1.5}
            distort={0.2}
            radius={1}
            metalness={isDark ? 0.5 : 0.2}
            roughness={isDark ? 0.5 : 0.8}
            transparent
            opacity={isDark ? 0.8 : 0.4}
          />
        </mesh>
      </Float>

      {/* Subtle particle field for depth */}
      <Points isDark={isDark} />
    </>
  );
};

const count = 1000;
const positions = new Float32Array(count * 3);
for (let i = 0; i < count; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 20;
  positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
}

const Points = ({ isDark }) => {
  const pointsRef = useRef();

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={isDark ? "#ffffff" : "#000000"}
        transparent
        opacity={isDark ? 0.5 : 0.2}
        sizeAttenuation
      />
    </points>
  );
};
