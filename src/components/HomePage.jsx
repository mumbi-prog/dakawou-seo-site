import { Helmet } from "react-helmet";
import About from "./About";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Coverage from "./Coverage";
import Values from "./Values";
import Goals from "./Goals";
import MissionVision from "./MissionVision";
import Awards from "./Awards";
import Services from "./Services";
import Gallery from "./Gallery";
import Partners from "./Partners";
import CounterSection from "./CounterSection";
import AwardingBodies from "./AwardingBodies";
import FAQSection from "./FAQSection";
import Contact from "./Contact";
import Testimonials from "../components/resources/Testimonials";
import Privacy from "./legal/Privacy";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Dakawou Transport Limited</title>
        <meta name="description" content="Since 1985, Dakawou Transport Ltd has provided reliable and professional transport services across the region." />
        <meta property="og:title" content="Dakawou Transport Limited" />
        <meta property="og:description" content="Since 1985, Dakawou Transport Ltd has provided reliable and professional transport services across the region." />
        <meta property="og:image" content="https://dakawou.com/images/seo/s1.jpg" />
        <meta property="og:url" content="https://dakawou.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dakawou Transport Limited" />
        <meta name="twitter:description" content="Since 1985, Dakawou Transport Ltd has provided reliable and professional transport services across the region." />
        <meta name="twitter:image" content="https://dakawou.com/images/seo/s1.jpg" />
      </Helmet>

      {/* <NavBar />
      <Hero />
      <About />
      <CounterSection />
      <Values />
      <Goals />
      <MissionVision />
      <Services />
      <AwardingBodies />
      <Awards />
      <Gallery />
      <Partners />
      <Coverage />
      <Testimonials />
      <FAQSection />
      <Contact /> */}
      <Privacy />
      
    </div>
  );
}

export default HomePage;


// // final commit, wueh!!