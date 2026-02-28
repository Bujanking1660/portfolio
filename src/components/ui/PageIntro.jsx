import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "portfolio-intro-seen";

export function PageIntro({ onComplete }) {
  const [phase, setPhase] = useState("enter"); // "enter" | "exit"
  const [mounted, setMounted] = useState(true);

  // Skip if already seen this session
  const alreadySeen =
    typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY);

  useEffect(() => {
    if (alreadySeen) {
      onComplete();
      setMounted(false);
      return;
    }

    // Phase timeline
    // 0.0s  → enter (logo animates in)
    // 2.2s  → trigger exit curtain split
    const exitTimer = setTimeout(() => {
      setPhase("exit");
    }, 2400);

    // 3.1s  → unmount & signal parent
    const doneTimer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setMounted(false);
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {mounted && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          {/* ── Top curtain ── */}
          <motion.div
            className="absolute inset-x-0 top-0 bg-[#09090b] dark:bg-[#09090b]"
            initial={{ height: "50%" }}
            animate={phase === "exit" ? { height: 0 } : { height: "50%" }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.05,
            }}
          />

          {/* ── Bottom curtain ── */}
          <motion.div
            className="absolute inset-x-0 bottom-0 bg-[#09090b] dark:bg-[#09090b]"
            initial={{ height: "50%" }}
            animate={phase === "exit" ? { height: 0 } : { height: "50%" }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.05,
            }}
          />

          {/* ── Centre content ── */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-3 select-none"
            animate={
              phase === "exit"
                ? { opacity: 0, scale: 0.92, y: -16 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            transition={{ duration: 0.45, ease: "easeIn" }}
          >
            {/* Initials badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-20 w-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center"
            >
              <span className="text-3xl font-black tracking-tighter text-white">
                RG
              </span>
            </motion.div>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.55, ease: "easeOut" }}
              className="text-white/60 text-sm font-medium tracking-[0.25em] uppercase"
            >
              Rizkya Gusnaldy
            </motion.p>

            {/* Animated line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 1.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "left center" }}
              className="h-px w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />

            {/* Role subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.5, ease: "easeOut" }}
              className="text-white/30 text-xs tracking-widest uppercase"
            >
              Portfolio
            </motion.p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
