import About from "../components/About";
import AppNav from "../components/AppNav";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Services from "../components/Services";
import SubNav from "../components/SubNav";
import Track from "../components/Track";
import SponsorsLogo from "../components/SponsorsLogos";
import Questions from "../components/Questions";
import Team from "../components/Team";
import Check from "../components/Check";
import Client from "../components/Client";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ArrowQuotation from "../components/ArrowQuotation";

function Home() {
  return (
    <>
      <SubNav />
      <AppNav />
      <Hero />
      <Track />
      <About />
      <Services />
      <Container />
      <SponsorsLogo />
      <Questions />
      <Team />
      <Check />
      <Client />
      <Contact />
      <Footer />
      <ArrowQuotation />
    </>
  );
}

export default Home;
