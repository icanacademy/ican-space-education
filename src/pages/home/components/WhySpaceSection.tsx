
import React, { useState } from 'react';

const WhySpaceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cosmic-thinking');

  const cosmicThinkingPrograms = [
    {
      id: 'language-assessment',
      title: '언어능력 평가체제',
      subtitle: '지구교육의 핵심',
      description: '아이캔의 슈퍼키즈 마인드셋을 장착하여 AMCC 슈퍼파워 영역을 키워줍니다. 회복탄력성(Resilience = Grit + Persevere)을 통해 뇌 컨트롤센터를 강화하고 언어 조음력을 AI 기반으로 정밀 평가합니다.',
      features: [
        'AMCC 슈퍼파워 영역 개발',
        'Grit + Persevere 통합 측정',
        '뇌 컨트롤센터 학습태도 분석',
        'AI 기반 언어 조음력 평가'
      ],
      icon: '🧠'
    },
    {
      id: 'space-orientation',
      title: '닥터아이캔의 스페이스 오리엔티어링',
      subtitle: '미래교육 시스템',
      description: '에드워드 중심의 스타트업으로 새로운 우주교육을 위한 AI 기반 교육시스템을 개발합니다. 우주적 사고와 학년별 난제해결 프로젝트 중심의 커리큘럼을 제공합니다.',
      features: [
        'AI 기반 교육시스템',
        '우주적 사고 개발',
        '학년별 난제해결 프로젝트',
        '개인별 맞춤 강화학습'
      ],
      icon: '🚀'
    },
    {
      id: 'dream-team',
      title: '드림팀 구성',
      subtitle: '전문가 협업',
      description: 'IT 데이터 전문가 에스라, 커리큘럼 트레이너 민, AI 교육 전문가 에드워드로 구성된 드림팀이 아이캔의 20년 교육 노하우를 AI "닥터아이캔"에 학습시켜 우주교육을 현실화합니다.',
      features: [
        'IT 데이터 전문가 에스라',
        '커리큘럼 트레이너 민',
        'AI 교육 전문가 에드워드',
        '20년 교육 노하우 AI 학습'
      ],
      icon: '👥'
    },
    {
      id: 'implementation',
      title: '2024년 12월 중순 런칭',
      subtitle: '혁신적 교육 프로젝트',
      description: '크리스천 품성 중심의 학원 문화와 수업 모니터링을 통한 인성 교육을 강조하며, AI 지원 도구를 통한 개인별 스킬 중심 커리큘럼을 설계합니다.',
      features: [
        '크리스천 품성 중심 교육',
        '수업 모니터링 시스템',
        'AI 지원 개인별 커리큘럼',
        '최적화된 학습 제공'
      ],
      icon: '⭐'
    }
  ];

  const practicalLessons = [
    {
      title: '우주 탐사 프로젝트',
      description: '아이캔의 교재와 연계하여 실제 우주 탐사 미션을 설계하고 실행하는 프로젝트 기반 학습',
      activities: [
        '화성 거주지 설계',
        '우주선 궤도 계산',
        '외계 생명체 탐사 계획',
        '우주 통신 시스템 구축'
      ],
      materials: 'ICAN EduSpace 교재, NASA 데이터베이스',
      duration: '4주 과정'
    },
    {
      title: '우주적 사고 토론',
      description: '우주의 규모와 시간을 통해 지구적 문제를 새로운 관점에서 바라보는 철학적 사고 훈련',
      activities: [
        '페르미 역설 토론',
        '우주의 나이와 인류 문명',
        '다중우주론과 가능성',
        '우주 윤리학 탐구'
      ],
      materials: 'TED Class 교재, 철학 텍스트',
      duration: '6주 과정'
    },
    {
      title: '우주 기술 응용',
      description: '우주 기술이 지구 생활에 미치는 영향을 분석하고 미래 기술을 예측하는 실습',
      activities: [
        'GPS 시스템 분석',
        '위성 통신 실험',
        '우주 태양광 발전',
        '무중력 환경 시뮬레이션'
      ],
      materials: 'Coding ST 교재, 과학 실험 키트',
      duration: '8주 과정'
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20">
      {/* 배경 애니메이션 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-[#1BE7FF]/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-[#6C63FF]/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-[#1BE7FF] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-[#FFC145] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            우주적 사고 실행수업
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            아이캔의 교육 콘텐츠와 교재를 활용하여 우주적 관점에서 사고하는 능력을 기르는 혁신적인 교육 프로그램
          </p>
        </div>

        {/* 탭 네비게이션 */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-full p-2">
            <button
              onClick={() => setActiveTab('cosmic-thinking')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'cosmic-thinking'
                  ? 'bg-[#1BE7FF] text-black font-semibold'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              우주적 사고 체계
            </button>
            <button
              onClick={() => setActiveTab('practical-lessons')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ml-2 ${
                activeTab === 'practical-lessons'
                  ? 'bg-[#1BE7FF] text-black font-semibold'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              실행수업 계획
            </button>
          </div>
        </div>

        {/* 우주적 사고 체계 */}
        {activeTab === 'cosmic-thinking' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {cosmicThinkingPrograms.map((program, index) => (
              <div
                key={program.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-[#1BE7FF]/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{program.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                    <p className="text-[#1BE7FF] font-semibold">{program.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-[#1BE7FF] rounded-full mr-3"></div>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 실행수업 계획 */}
        {activeTab === 'practical-lessons' && (
          <div className="space-y-8">
            {practicalLessons.map((lesson, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-4">{lesson.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{lesson.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {lesson.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-[#FFC145] rounded-full mr-3"></div>
                          <span className="text-white">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="text-[#1BE7FF] font-semibold mb-2">활용 교재</h4>
                      <p className="text-gray-300 text-sm">{lesson.materials}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="text-[#1BE7FF] font-semibold mb-2">수업 기간</h4>
                      <p className="text-gray-300 text-sm">{lesson.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 연계 교육 시스템 */}
        <div className="mt-16 bg-gradient-to-r from-[#1BE7FF]/20 to-[#6C63FF]/20 rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            아이캔 교육 시스템과의 연계
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1BE7FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="text-white font-semibold mb-2">기존 교재 활용</h4>
              <p className="text-gray-300 text-sm">
                EduSpace, TED Class, Coding ST 등 아이캔의 검증된 교재를 우주적 사고 교육에 통합
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6C63FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h4 className="text-white font-semibold mb-2">AI 닥터아이캔</h4>
              <p className="text-gray-300 text-sm">
                20년 교육 노하우가 담긴 AI 시스템으로 개인별 맞춤 우주적 사고 훈련 제공
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFC145] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h4 className="text-white font-semibold mb-2">슈퍼키즈 마인드셋</h4>
              <p className="text-gray-300 text-sm">
                회복탄력성과 AMCC 슈퍼파워를 통해 우주적 규모의 도전에 대응하는 마인드셋 구축
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-black font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-[#1BE7FF]/25 transition-all duration-300 transform hover:scale-105">
            우주적 사고 실행수업 시작하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhySpaceSection;
