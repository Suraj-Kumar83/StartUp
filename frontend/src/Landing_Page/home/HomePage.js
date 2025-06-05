import Benefits from "./BenefitsSection";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import "./HomePage.css";



function HomePage() {
  return (
    <div className="homepage-background">
      <Hero />
      <Benefits />
      <Features />
      <Footer />
    </div>
  );
}

export default HomePage;