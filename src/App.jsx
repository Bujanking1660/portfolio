import { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { PageIntro } from "./components/ui/PageIntro";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen flex flex-col">
        {/* Cinematic intro — manages its own lifecycle */}
        <PageIntro onComplete={() => setIntroComplete(true)} />

        {/* Main content fades in once intro is done */}
        <AnimatePresence>
          {introComplete && (
            <motion.div
              className="flex flex-col flex-grow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Header />
              <main className="flex-grow">
                <Hero />
                <About />
                <Projects />
                <Experience />
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
