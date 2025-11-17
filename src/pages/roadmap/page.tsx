import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import RoadmapDetailSection from './components/RoadmapDetailSection';
import RoadmapTimelineSection from './components/RoadmapTimelineSection';
import RoadmapAssessmentSection from './components/RoadmapAssessmentSection';

const RoadmapPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <RoadmapDetailSection />
      <RoadmapTimelineSection />
      <RoadmapAssessmentSection />
      <Footer />
    </div>
  );
};

export default RoadmapPage;