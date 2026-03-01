import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  Selection,
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Background3D } from "./Background3D";
import { HeroVisual } from "./HeroVisual";
import { useTheme } from "../../hooks/useTheme";

export const Scene = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]} // Performance optimization
        gl={{ antialias: false, alpha: true }}
      >
        <Suspense fallback={null}>
          <Selection>
            <Background3D />
            <HeroVisual />

            <EffectComposer disableNormalPass>
              <Bloom
                luminanceThreshold={isDark ? 1 : 0.8}
                mipmapBlur
                intensity={isDark ? 0.5 : 0.15}
                radius={0.4}
              />
              <Noise opacity={isDark ? 0.05 : 0.02} />
              <Vignette
                eskil={false}
                offset={0.1}
                darkness={isDark ? 1.1 : 0.5}
              />
            </EffectComposer>
          </Selection>
        </Suspense>
      </Canvas>
    </div>
  );
};
