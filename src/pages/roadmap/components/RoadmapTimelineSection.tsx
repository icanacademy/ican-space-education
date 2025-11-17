import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const RoadmapTimelineSection = () => {
  const { t } = useTranslation('roadmap');
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 0,
      title: t('phases.foundation.title'),
      duration: t('phases.foundation.duration'),
      description: t('phases.foundation.description'),
      skills: t('phases.foundation.skills', { returnObjects: true }),
      color: 'from-[#1BE7FF] to-[#6C63FF]',
      icon: 'ri-seedling-line'
    },
    {
      id: 1,
      title: t('phases.development.title'),
      duration: t('phases.development.duration'),
      description: t('phases.development.description'),
      skills: t('phases.development.skills', { returnObjects: true }),
      color: 'from-[#6C63FF] to-[#FF6B9D]',
      icon: 'ri-plant-line'
    },
    {
      id: 2,
      title: t('phases.expansion.title'),
      duration: t('phases.expansion.duration'),
      description: t('phases.expansion.description'),
      skills: t('phases.expansion.skills', { returnObjects: true }),
      color: 'from-[#FF6B9D] to-[#FFD93D]',
      icon: 'ri-tree-line'
    },
    {
      id: 3,
      title: t('phases.mastery.title'),
      duration: t('phases.mastery.duration'),
      description: t('phases.mastery.description'),
      skills: t('phases.mastery.skills', { returnObjects: true }),
      color: 'from-[#FFD93D] to-[#1BE7FF]',
      icon: 'ri-rocket-2-line'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('timeline.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('timeline.subtitle')}
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {phases.map((phase, index) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activePhase === index
                  ? 'bg-gradient-to-r ' + phase.color + ' text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
              }`}
            >
              <i className={`${phase.icon} mr-2`}></i>
              {phase.title}
            </button>
          ))}
        </div>

        {/* Active Phase Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${phases[activePhase].color}`}></div>
            
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${phases[activePhase].color} rounded-full flex items-center justify-center mr-4`}>
                      <i className={`${phases[activePhase].icon} text-2xl text-white`}></i>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{phases[activePhase].title}</h3>
                      <p className="text-lg text-gray-600">{phases[activePhase].duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {phases[activePhase].description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">핵심 개발 영역</h4>
                    {Array.isArray(phases[activePhase].skills) && phases[activePhase].skills.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-3 h-3 bg-gradient-to-r ${phases[activePhase].color} rounded-full mr-3`}></div>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=Children%20in%20futuristic%20space%20classroom%20developing%20$%7Bphases%5BactivePhase%5D.title.toLowerCase%28%29%7D%20skills%2C%20interactive%20holographic%20learning%20displays%2C%20AI%20teaching%20assistants%2C%20cosmic%20educational%20environment%20with%20stars%20and%20galaxies%2C%20modern%20minimalist%20design%2C%20bright%20and%20inspiring%20atmosphere&width=600&height=400&seq=phase-${activePhase}&orientation=landscape`}
                    alt={phases[activePhase].title}
                    className="w-full h-[400px] object-cover object-top rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">학습 진행도</h4>
            <div className="relative">
              <div className="flex justify-between items-center">
                {phases.map((phase, index) => (
                  <div key={phase.id} className="flex flex-col items-center relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all ${
                      index <= activePhase 
                        ? 'bg-gradient-to-r ' + phase.color + ' border-white shadow-lg' 
                        : 'bg-gray-200 border-gray-300'
                    }`}>
                      <i className={`${phase.icon} text-lg ${index <= activePhase ? 'text-white' : 'text-gray-500'}`}></i>
                    </div>
                    <span className={`mt-2 text-sm font-medium ${index <= activePhase ? 'text-gray-900' : 'text-gray-500'}`}>
                      {phase.title}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute top-6 left-6 right-6 h-1 bg-gray-200 -z-10">
                <div 
                  className="h-full bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] transition-all duration-500"
                  style={{ width: `${(activePhase / (phases.length - 1)) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapTimelineSection;