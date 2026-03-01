import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  animate,
} from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";

/* ─────────────────────────────────────────────
   FadeIn — classic fade + rise on scroll
───────────────────────────────────────────── */
export const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────
   StaggerContainer / StaggerItem
───────────────────────────────────────────── */
export const StaggerContainer = ({ children, className = "" }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   SlideUp — smooth ease-out slide
───────────────────────────────────────────── */
export const SlideUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────
   ScaleIn — scale + fade (cards, icons)
───────────────────────────────────────────── */
export const ScaleIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.88 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────
   HoverCard — spring-lift hover
───────────────────────────────────────────── */
export const HoverCard = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 350, damping: 22 }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────
   RevealText — word-by-word masked reveal on scroll
───────────────────────────────────────────── */
export const RevealText = ({
  children,
  className = "",
  delay = 0,
  as: Component = "h2", // eslint-disable-line no-unused-vars
}) => {
  const { ref, isInView } = useScrollReveal({ margin: "-60px" });
  const words = String(children).split(" ");

  return (
    <Component ref={ref} className={className} style={{ overflow: "hidden" }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            marginRight: "0.25em",
          }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.55,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};

/* ─────────────────────────────────────────────
   DrawLine — self-drawing separator line
───────────────────────────────────────────── */
export const DrawLine = ({
  direction = "horizontal",
  className = "",
  delay = 0,
}) => {
  const { ref, isInView } = useScrollReveal({ margin: "-40px" });

  const style =
    direction === "horizontal"
      ? { height: "1px", width: "100%" }
      : { width: "1px", height: "100%" };

  const initial = direction === "horizontal" ? { scaleX: 0 } : { scaleY: 0 };
  const animate = direction === "horizontal" ? { scaleX: 1 } : { scaleY: 1 };

  const origin = direction === "horizontal" ? "left center" : "top center";

  return (
    <div ref={ref} style={style} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ ...style, transformOrigin: origin }}
        className="bg-border"
        initial={initial}
        animate={isInView ? animate : {}}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};

/* ─────────────────────────────────────────────
   CountUp — animated number counter on scroll
───────────────────────────────────────────── */
export const CountUp = ({
  to,
  suffix = "",
  className = "",
  duration = 1.6,
  delay = 0,
}) => {
  const { ref, isInView } = useScrollReveal({ margin: "-60px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.01,
  });
  const display = useTransform(springValue, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, to, {
        duration,
        delay,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, to, duration, delay, motionValue]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
};

/* ─────────────────────────────────────────────
   ParallaxSection — scroll-linked vertical offset
───────────────────────────────────────────── */
export const ParallaxSection = ({ children, className = "" }) => {
  return (
    <div className={className} style={{ position: "relative" }}>
      {children}
    </div>
  );
};
