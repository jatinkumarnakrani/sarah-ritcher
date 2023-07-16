import About from './MainSections/About';
import CTA from './MainSections/CTA';
import Clients from './MainSections/Clients';
import Contact from './MainSections/Contact';
import Portfolio from './MainSections/Portfolio';
import Services from './MainSections/Services';
import Skills from './MainSections/Skills';
import Team from './MainSections/Team';
import WhyUs from './MainSections/WhyUs';
import FAQ from './MainSections/FAQ';
import Pricing from './MainSections/Pricing';
function Main() {
  return (
    <main id='main'>
      <Clients />
      <About />
      <WhyUs />
      <Skills />
      <Services />
      <CTA />
      <Portfolio />
      <Team />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}

export default Main;
