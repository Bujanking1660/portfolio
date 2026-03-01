import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { useTheme } from "../../hooks/useTheme";

export const HeroVisual = () => {
  const meshRef = useRef();
  const wireframeRef = useRef();
  const { mouse } = useThree();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scroll =
      window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight);

    if (meshRef.current) {
      // Smoothly follow mouse
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        mouse.x * 2,
        0.1,
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        mouse.y * 2,
        0.1,
      );

      // Move deeper on scroll
      meshRef.current.position.z = THREE.MathUtils.lerp(
        meshRef.current.position.z,
        -scroll * 10,
        0.1,
      );

      // Rotate based on time, mouse and scroll
      meshRef.current.rotation.x = time * 0.2 + mouse.y * 0.5 + scroll * 5;
      meshRef.current.rotation.y = time * 0.3 + mouse.x * 0.5 + scroll * 2;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -time * 0.1 + scroll * 2;
      wireframeRef.current.rotation.y = -time * 0.2 + scroll * 4;
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial
          color={isDark ? "#3b82f6" : "#2563eb"}
          speed={3}
          distort={0.4}
          radius={1}
          metalness={isDark ? 0.8 : 0.6}
          roughness={isDark ? 0.2 : 0.3}
        />
      </mesh>

      {/* Add a second overlapping shape for complexity */}
      <mesh ref={wireframeRef} scale={1.6}>
        <icosahedronGeometry args={[1, 15]} />
        <MeshWobbleMaterial
          color={isDark ? "#8b5cf6" : "#7c3aed"}
          factor={0.4}
          speed={2}
          transparent
          opacity={isDark ? 0.2 : 0.4}
          wireframe
        />
      </mesh>
    </Float>
  );
};
