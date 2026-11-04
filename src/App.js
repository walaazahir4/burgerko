import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import PopularDishes from "./components/PopularDishes/PopularDishes";
import SpecialOffer from "./components/SpecialOffer/SpecialOffer";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Footer from "./components/Footer/Footer";
import CTA from "./components/CTA/CTA";

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Navbar onContactClick={() => setContactOpen(true)} />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <Categories />
      </section>
      <section id="service">
        <PopularDishes />
      </section>
      <SpecialOffer />
      <WhyChooseUs />
      <section id="contact">
        <CTA isOpen={contactOpen} />
      </section>
      <Footer />
    </>
  );
}

export default App;
