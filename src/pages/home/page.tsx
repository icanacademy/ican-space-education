import Header from '../../components/feature/Header';
import HeroSection from './components/HeroSection';
import WhySpaceSection from './components/WhySpaceSection';
import LearningExperienceSection from './components/LearningExperienceSection';
import CompetenciesSection from './components/CompetenciesSection';
import SignatureProjectsSection from './components/SignatureProjectsSection';
import CurriculumSection from './components/CurriculumSection';
import CTASection from './components/CTASection';
import ConsultationFormSection from './components/ConsultationFormSection';
import Footer from '../../components/feature/Footer';
import PlatonicEducationSection from './components/PlatonicEducationSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhySpaceSection />
      <PlatonicEducationSection />
      <LearningExperienceSection />
      <CompetenciesSection />
      <SignatureProjectsSection />
      <CurriculumSection />
      <CTASection />
      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default HomePage;
