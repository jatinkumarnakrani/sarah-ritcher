import Clients from './MainSections/Clients';
import About from './MainSections/About';
import WhyUs from './MainSections/WhyUs';
import Skills from './MainSections/Skills';
import Services from './MainSections/Services';
import CTA from './MainSections/CTA';
import Portfolio from './MainSections/Portfolio';
import Team from './MainSections/Team';
import Pricing from './MainSections/Pricing';
import FAQ from './MainSections/FAQ';
import Contact from './MainSections/Contact';
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
