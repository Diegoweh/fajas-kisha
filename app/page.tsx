import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NeedsSection from "./components/NeedsSection";
import Quiz from "./components/Quiz";
import Bestsellers from "./components/Bestsellers";
import SizingSection from "./components/SizingSection";
import Testimonials from "./components/Testimonials";
import StoreSection from "./components/StoreSection";
import FaqSection from "./components/FaqSection";
import Promises from "./components/Promises";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="home">
        <Hero />
        <NeedsSection />
        <Quiz />
        <Bestsellers />
        <SizingSection />
        <Testimonials />
        <StoreSection />
        <FaqSection />
        {/* <Promises /> */}
      </main>
      <Footer />
    </>
  ); 
}
