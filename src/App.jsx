import styles from "./App.module.scss";

import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import WorldMap from "./sections/WorldMap";
import Reviews from "./sections/Reviews";
import Services from "./sections/Services";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <WorldMap />
        <Reviews />
        <Services />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
