import { useCallback, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import SectionHeading from './components/SectionHeading';
import BMICalculator from './components/BMICalculator';
import CalorieCalculator from './components/CalorieCalculator';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = useCallback((plan) => {
    setSelectedPlan(plan);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const clearPlan = useCallback(() => setSelectedPlan(null), []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Trainers />
        <Membership onSelectPlan={handleSelectPlan} />

        <section className="section section--alt" id="tools">
          <div className="container">
            <SectionHeading
              eyebrow="Your Health, Your Numbers"
              title={
                <>
                  Know Your <span>Body.</span>
                </>
              }
              description="Use our quick tools to get a better understanding of your body and daily energy needs."
            />
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-6">
                <BMICalculator />
              </div>
              <div className="col-lg-6">
                <CalorieCalculator />
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <Gallery />
        <Contact selectedPlan={selectedPlan} onPlanHandled={clearPlan} />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
