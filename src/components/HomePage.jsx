import { Helmet } from "react-helmet";
import About from "./About";
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
import Terms from "./legal/Terms";
import ContactSection from "./ContactSection";

function HomePage() {
  return (
    <div className="hidden-upper pt-[80px]">  
      <Helmet>
        <title>Dakawou Transport Limited</title>
        <meta
          name="description"
          content="Since 1985, Dakawou Transport Ltd has provided reliable and professional transport services across the region."
        />
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

      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="counter"><CounterSection /></div>
      <div id="values"><Values /></div>
      <div id="goals"><Goals /></div>
      <div id="mission"><MissionVision /></div>
      <div id="services"><Services /></div>
      <AwardingBodies />
      <div id="awards"><Awards /></div>
      <div id="gallery"><Gallery /></div>
      <Partners />
      <div id="coverage"><Coverage /></div>
      <div id="testimonials"><Testimonials /></div>
      <FAQSection />
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default HomePage;
