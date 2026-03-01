import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const SoundManager = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Using a high-quality minimalist ambient track
    audioRef.current = new Audio("/sound.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleSound = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
      setIsMuted(false);
    } else {
      if (isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
      } else {
        audioRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <motion.button
        onClick={toggleSound}
        className="flex items-center gap-3 bg-card/80 backdrop-blur-md border border-border/50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative h-5 w-5 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isPlaying || isMuted ? (
              <motion.div
                key="muted"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <VolumeX className="h-5 w-5 text-muted-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="unmuted"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-0.5"
              >
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-primary"
                    animate={{ height: [4, 12, 6, 14, 4] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider pr-2 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
          {!isPlaying ? "Play Ambience" : isMuted ? "Unmute" : "Mute"}
        </span>
      </motion.button>
    </div>
  );
};
