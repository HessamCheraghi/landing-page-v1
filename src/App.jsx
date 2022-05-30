import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WorldMap from "./components/WorldMap";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import CTA from "./components/CTA";

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
        <CTA />
      </main>
    </>
  );
}

export default App;
