import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const RoadmapAssessmentSection = () => {
  const { t } = useTranslation('roadmap');
  const [selectedLevel, setSelectedLevel] = useState(0);

  const assessmentLevels = [
    {
      id: 0,
      title: '기초 언어 능력 평가',
      description: '아이의 현재 언어 발달 수준을 정확히 파악합니다',
      areas: ['어휘력 측정', '문법 이해도', '발음 정확성', '의사소통 능력'],
      color: 'from-[#1BE7FF] to-[#6C63FF]',
      icon: 'ri-chat-3-line'
    },
    {
      id: 1,
      title: '창의적 사고 평가',
      description: '논리적 사고와 창의성 발달 정도를 측정합니다',
      areas: ['문제 해결 능력', '상상력 발달', '논리적 추론', '창의적 표현'],
      color: 'from-[#6C63FF] to-[#FF6B9D]',
      icon: 'ri-lightbulb-line'
    },
    {
      id: 2,
      title: '우주적 사고 평가',
      description: '글로벌 관점과 우주적 사고력을 종합 평가합니다',
      areas: ['다차원적 사고', '시공간 인식', '우주적 관점', '미래 지향성'],
      color: 'from-[#FF6B9D] to-[#FFD93D]',
      icon: 'ri-planet-line'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A0F1A] via-[#1A1F2E] to-[#2A1F3D] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#1BE7FF]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-[#6C63FF]/10 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-[#FF6B9D]/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            개인 맞춤 학습 평가
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            아이의 현재 수준을 정확히 파악하여 최적의 학습 경로를 제시합니다
          </p>
        </div>

        {/* Assessment Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {assessmentLevels.map((level, index) => (
            <div 
              key={level.id}
              onClick={() => setSelectedLevel(index)}
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all cursor-pointer ${
                selectedLevel === index 
                  ? 'border-[#1BE7FF] shadow-xl shadow-[#1BE7FF]/20 transform scale-105' 
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${level.color} rounded-full flex items-center justify-center mb-6`}>
                <i className={`${level.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{level.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{level.description}</p>
              
              <div className="space-y-3">
                {level.areas.map((area, areaIndex) => (
                  <div key={areaIndex} className="flex items-center">
                    <div className={`w-2 h-2 bg-gradient-to-r ${level.color} rounded-full mr-3`}></div>
                    <span className="text-gray-300 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Assessment View */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${assessmentLevels[selectedLevel].color} rounded-full flex items-center justify-center mr-4`}>
                    <i className={`${assessmentLevels[selectedLevel].icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-3xl font-bold text-white">{assessmentLevels[selectedLevel].title}</h3>
                </div>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {assessmentLevels[selectedLevel].description}
                </p>

                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-white mb-4">평가 영역</h4>
                  {assessmentLevels[selectedLevel].areas.map((area, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">{area}</span>
                        <div className="flex items-center">
                          <div className="w-24 h-2 bg-white/20 rounded-full mr-3">
                            <div 
                              className={`h-full bg-gradient-to-r ${assessmentLevels[selectedLevel].color} rounded-full`}
                              style={{ width: `${Math.random() * 40 + 60}%` }}
                            ></div>
                          </div>
                          <span className="text-gray-300 text-sm">우수</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className={`mt-8 px-8 py-4 bg-gradient-to-r ${assessmentLevels[selectedLevel].color} text-white font-bold text-lg rounded-full hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer whitespace-nowrap`}>
                  <i className="ri-play-circle-line mr-2"></i>
                  평가 시작하기
                </button>
              </div>

              <div className="relative">
                <img 
                  src={`https://readdy.ai/api/search-image?query=Children%20taking%20futuristic%20educational%20assessment%20in%20space%20academy%2C%20holographic%20testing%20interface%2C%20AI%20evaluation%20system%2C%20cosmic%20learning%20environment%20with%20interactive%20displays%2C%20modern%20assessment%20tools%2C%20bright%20and%20encouraging%20atmosphere&width=600&height=500&seq=assessment-${selectedLevel}&orientation=portrait`}
                  alt={assessmentLevels[selectedLevel].title}
                  className="w-full h-[500px] object-cover object-top rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path Recommendation */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#1BE7FF]/20 to-[#6C63FF]/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-6">맞춤형 학습 경로 추천</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              평가 결과를 바탕으로 아이에게 최적화된 학습 로드맵을 제공하여 
              언어능력부터 우주적 사고까지 체계적으로 발달시킵니다
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-search-line text-2xl text-white"></i>
                </div>
                <h4 className="text-white font-semibold mb-2">정밀 분석</h4>
                <p className="text-gray-300 text-sm">현재 수준 정확 파악</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6C63FF] to-[#FF6B9D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-route-line text-2xl text-white"></i>
                </div>
                <h4 className="text-white font-semibold mb-2">경로 설계</h4>
                <p className="text-gray-300 text-sm">개인 맞춤 로드맵</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B9D] to-[#FFD93D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-trophy-line text-2xl text-white"></i>
                </div>
                <h4 className="text-white font-semibold mb-2">목표 달성</h4>
                <p className="text-gray-300 text-sm">단계별 성취 확인</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FFD93D] to-[#1BE7FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-rocket-2-line text-2xl text-white"></i>
                </div>
                <h4 className="text-white font-semibold mb-2">우주적 도약</h4>
                <p className="text-gray-300 text-sm">최종 목표 완성</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapAssessmentSection;