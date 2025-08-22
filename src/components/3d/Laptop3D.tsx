import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export function Laptop3D() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef} scale={[0.8, 0.8, 0.8]}>
      {/* Laptop Base */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[2, 1.5, 0.1]} />
        <meshStandardMaterial color="#2D3748" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Laptop Screen */}
      <mesh position={[0, 0.2, -0.7]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[2, 1.2, 0.05]} />
        <meshStandardMaterial color="#1A202C" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Screen Content */}
      <mesh position={[0, 0.21, -0.695]} rotation={[-0.3, 0, 0]}>
        <planeGeometry args={[1.8, 1.0]} />
        <meshStandardMaterial 
          color="#667EEA" 
          emissive="#667EEA" 
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Keyboard */}
      <mesh position={[0, -0.45, 0.2]}>
        <boxGeometry args={[1.6, 0.05, 0.8]} />
        <meshStandardMaterial color="#4A5568" />
      </mesh>
    </group>
  );
}