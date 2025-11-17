import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const RoadmapSection = () => {
  const { t } = useTranslation('home');
  const navigate = useNavigate();

  const roadmapSteps = [
    {
      id: 1,
      titleKey: 'roadmap.steps.step1.title',
      descriptionKey: 'roadmap.steps.step1.description',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-400',
      icon: 'ri-brain-line'
    },
    {
      id: 2,
      titleKey: 'roadmap.steps.step2.title',
      descriptionKey: 'roadmap.steps.step2.description',
      color: 'bg-gradient-to-br from-purple-500 to-pink-400',
      icon: 'ri-book-open-line'
    },
    {
      id: 3,
      titleKey: 'roadmap.steps.step3.title',
      descriptionKey: 'roadmap.steps.step3.description',
      color: 'bg-gradient-to-br from-green-500 to-teal-400',
      icon: 'ri-telescope-line'
    },
    {
      id: 4,
      titleKey: 'roadmap.steps.step4.title',
      descriptionKey: 'roadmap.steps.step4.description',
      color: 'bg-gradient-to-br from-orange-500 to-red-400',
      icon: 'ri-rocket-line'
    }
  ];

  return (
    <section id="roadmap-section" className="py-20 bg-gradient-to-b from-[#0A0F1A] to-[#1a1a2e] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI3LCAxOTksIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('roadmap.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('roadmap.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connecting line */}
              {index < roadmapSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-[#1BE7FF] to-transparent z-0"></div>
              )}
              
              {/* Step card */}
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                  <i className={`${step.icon} text-2xl text-white`}></i>
                </div>
                
                <div className="text-center">
                  <div className="w-8 h-8 bg-[#1BE7FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#0A0F1A] font-bold text-sm">{step.id}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {t(step.titleKey)}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {t(step.descriptionKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('roadmap.cta.title')}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('roadmap.cta.description')}
            </p>
            <div className="flex space-x-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-[#0A0F1A] font-bold text-lg rounded-full hover:shadow-xl hover:shadow-[#1BE7FF]/30 transform hover:scale-105 transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-rocket-2-line mr-2"></i>{t('roadmap.startButton')}
              </button>
              <button 
                onClick={() => navigate('/roadmap')}
                className="px-8 py-4 border-2 border-[#1BE7FF] text-[#1BE7FF] font-bold text-lg rounded-full hover:bg-[#1BE7FF] hover:text-[#0A0F1A] transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-roadmap-line mr-2"></i>{t('roadmap.detailsButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
