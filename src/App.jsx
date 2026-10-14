import { MotionConfig } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Highlights } from "./sections/Highlights";
import { EventDetails } from "./sections/EventDetails";
import { FinalCTA } from "./sections/FinalCTA";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <EventDetails />
        <FinalCTA />
      </main>
    </MotionConfig>
  );
}
