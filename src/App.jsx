// import styles from "./App.module.scss";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WorldMap from "./components/WorldMap";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

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
