
const PlatonicEducationSection = () => {
  const stages = [
    {
      level: 1,
      title: "슈퍼키즈 마인드셋",
      subtitle: "Super Kids Mindset",
      description: "AMCC 슈퍼파워 영역을 통해 회복탄력성(Resilience)을 기르며, Grit + Persevere로 끝까지 해내는 힘을 키웁니다.",
      icon: "ri-mind-map",
      color: "#FF3D7F",
      activities: ["회복탄력성 측정", "뇌 컨트롤센터 훈련", "학습태도 개선"],
      metaphor: "힘들고 어려운 상황에서도 끝까지 해내어 슈퍼파워를 얻는 단계"
    },
    {
      level: 2,
      title: "언어능력 평가체제",
      subtitle: "Language Assessment System",
      description: "지구교육의 핵심인 언어 조음력을 AI 기반으로 정밀 평가하여 개인별 맞춤 강화학습을 제공합니다.",
      icon: "ri-speak-line",
      color: "#FFC145",
      activities: ["언어 조음력 평가", "발음 정확도 측정", "표현력 분석"],
      metaphor: "정확한 언어 구사력으로 소통의 기초를 다지는 단계"
    },
    {
      level: 3,
      title: "닥터아이캔 AI 시스템",
      subtitle: "Dr. ICAN AI System",
      description: "아이캔의 20년 교육 노하우를 학습한 AI가 학년별 난제해결 프로젝트와 개인별 맞춤 커리큘럼을 제공합니다.",
      icon: "ri-robot-line",
      color: "#6C63FF",
      activities: ["AI 맞춤 개발역량 강화학습", "난제해결 프로젝트", "스킬및 부족역량 중심 커리큘럼"],
      metaphor: "AI와 함께 우주적 사고로 문제를 해결하는 단계"
    },
    {
      level: 4,
      title: "스페이스 오리엔티어링",
      subtitle: "Space Orienteering",
      description: "우주적 사고와 크리스천 품성을 바탕으로 미래 우주교육의 새로운 패러다임을 경험합니다.",
      icon: "ri-rocket-2-line",
      color: "#1BE7FF",
      activities: ["우주적 사고 훈련", "품성 교육", "미래 설계"],
      metaphor: "우주교육의 혁신적 미래를 열어가는 단계"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A0F1A] via-[#0B1E39] to-[#0A0F1A] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 border border-[#1BE7FF]/10 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 border border-[#6C63FF]/10 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] bg-clip-text text-transparent">
              아이캔
            </span>
            <br />
            <span className="text-white">"우주인 적합테스트" 이중언어 평가체제 구축</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            지구교육의 핵심인 <strong className="text-[#1BE7FF]">언어능력 평가체제</strong>로 <br />
            <strong className="text-[#6C63FF]">슈퍼키즈 마인드셋</strong>과 <strong className="text-[#FFC145]">회복탄력성</strong>을 기릅니다.
          </p>
        </div>

        {/* ICAN Philosophy Visual */}
        <div className="mb-20">
          <div className="relative bg-gradient-to-r from-[#0A0F1A] to-[#0B1E39] rounded-3xl p-8 border border-[#1BE7FF]/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-[#1BE7FF] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  아이캔의 "우주인"미래교육 철학
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    <strong className="text-[#FFC145]">AMCC 슈퍼파워 영역</strong>을 통해 아이들에게 
                    <strong className="text-[#1BE7FF]"> 회복탄력성(Resilience)</strong>을 키워줍니다.
                  </p>
                  <p>
                    <strong className="text-[#6C63FF]">Grit + Persevere</strong>가 합쳐져 만들어지는 회복탄력성으로 
                    힘들고 어려운 상황에서도 <strong className="text-[#FF3D7F]">끝까지 해내어 결과</strong>를 만들어냅니다.
                  </p>
                  <p>
                    <strong className="text-[#1BE7FF]">뇌 안의 컨트롤센터</strong>를 학습 전반에 걸쳐 
                    수업태도로 우리 아이들에게 키워주려 합니다.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=ICAN%20education%20philosophy%20with%20super%20kids%20mindset%2C%20children%20developing%20resilience%20and%20grit%20through%20space%20education%2C%20AI-powered%20learning%20system%2C%20brain%20control%20center%20training%2C%20Korean%20educational%20innovation%20with%20cosmic%20thinking%2C%20futuristic%20classroom%20with%20holographic%20displays&width=600&height=400&seq=ican-philosophy&orientation=landscape"
                  alt="아이캔의 교육 철학"
                  className="w-full h-80 object-cover object-center rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A]/40 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Dr. ICAN Introduction */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-[#0B1E39] to-[#0A0F1A] rounded-3xl p-12 border border-[#6C63FF]/20">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold text-[#6C63FF] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                닥터아이캔의 "우주인 슈퍼키즈" 
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#1BE7FF] mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                에드워드 중심의 스타트업으로 새로운 우주교육을 위한 AI 기반 교육시스템
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4">
                  <i className="ri-team-line"></i>
                </div>
                <h4 className="text-xl font-semibold text-[#1BE7FF] mb-2">드림팀 구성</h4>
                <p className="text-gray-300 text-sm">IT 데이터 전문가 에스라, 커리큘럼 트레이너 민, AI 교육 전문가 에드워드</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#6C63FF] to-[#FF3D7F] rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4">
                  <i className="ri-brain-line"></i>
                </div>
                <h4 className="text-xl font-semibold text-[#6C63FF] mb-2">AI 학습 시스템</h4>
                <p className="text-gray-300 text-sm">아이캔의 20년 교육 노하우를 AI '닥터아이캔'에 학습시켜 우주교육 현실화</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#FFC145] to-[#FF3D7F] rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4">
                  <i className="ri-calendar-line"></i>
                </div>
                <h4 className="text-xl font-semibold text-[#FFC145] mb-2">2024년 12월 런칭</h4>
                <p className="text-gray-300 text-sm">2024년 12월부터 혁신적인 교육 프로젝트 런칭 완료</p>
              </div>
            </div>

            <div className="bg-[#0A0F1A]/50 rounded-xl p-8 border border-[#1BE7FF]/20">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">핵심 특징</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#1BE7FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-star-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-[#1BE7FF] mb-2">우주적 사고와 난제해결</h5>
                    <p className="text-gray-300 text-sm">학년별 난제해결 프로젝트 중심의 커리큘럼 구성</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#6C63FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-user-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-[#6C63FF] mb-2">개인별 맞춤 강화학습</h5>
                    <p className="text-gray-300 text-sm">학년별 스킬과 콘텐츠를 빠르게 구축하여 맞춤 학습 제공</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#FFC145] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-heart-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-[#FFC145] mb-2">크리스천 품성 교육</h5>
                    <p className="text-gray-300 text-sm">크리스천 품성 중심의 학원 문화와 수업 모니터링을 통한 인성 교육</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#FF3D7F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-tools-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-[#FF3D7F] mb-2">AI 지원 도구</h5>
                    <p className="text-gray-300 text-sm">개인별 스킬 중심 커리큘럼 설계 및 최적화된 학습 제공</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stages */}
        <div className="space-y-16">
          {stages.map((stage, index) => (
            <div key={index} className={`relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-12 items-center`}>
              {/* Stage Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl"
                    style={{ backgroundColor: stage.color }}
                  >
                    <i className={stage.icon}></i>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                      Stage {stage.level}
                    </div>
                    <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {stage.title}
                    </h3>
                    <div className="text-lg font-medium" style={{ color: stage.color }}>
                      {stage.subtitle}
                    </div>
                  </div>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  {stage.description}
                </p>

                <div className="bg-[#0A0F1A]/50 rounded-xl p-6 border border-gray-700/30">
                  <h4 className="text-lg font-semibold text-white mb-4">핵심 평가 요소</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {stage.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-center space-x-2">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: stage.color }}
                        ></div>
                        <span className="text-gray-300">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-400 italic">
                  <i className="ri-quote-text mr-2"></i>
                  {stage.metaphor}
                </div>
              </div>

              {/* Stage Visual */}
              <div className="flex-1 relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=ICAN%20education%20stage%20$%7Bstage.level%7D%20$%7Bstage.title%7D%2C%20Korean%20students%20developing%20$%7Bstage.activities.join%28%20%29%7D%2C%20modern%20educational%20technology%20with%20$%7Bstage.color%7D%20lighting%2C%20AI-powered%20learning%20environment%2C%20resilience%20and%20grit%20training%2C%20space%20education%20innovation&width=600&height=400&seq=ican-stage-${stage.level}&orientation=landscape`}
                    alt={`${stage.title} 단계`}
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A]/60 to-transparent"></div>
                  
                  {/* Stage Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                      style={{ backgroundColor: stage.color }}
                    >
                      {stage.level}
                    </div>
                  </div>
                </div>

                {/* Connection Arrow */}
                {index < stages.length - 1 && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center animate-bounce"
                      style={{ backgroundColor: stages[index + 1].color }}
                    >
                      <i className="ri-arrow-down-line text-white"></i>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#0A0F1A] to-[#0B1E39] rounded-3xl p-12 border border-[#1BE7FF]/20">
            <h3 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              아이캔과 함께 슈퍼키즈로 성장하세요
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              언어능력 평가체제와 닥터아이캔 AI 시스템을 통해 <br />
              회복탄력성과 우주적 사고력을 함께 기워보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-[#0A0F1A] font-bold text-lg rounded-full hover:shadow-xl hover:shadow-[#1BE7FF]/30 transform hover:scale-105 transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-rocket-2-line mr-2"></i>
                슈퍼키즈 여정 시작하기
              </button>
              <button className="px-8 py-4 border-2 border-[#1BE7FF] text-[#1BE7FF] font-bold text-lg rounded-full hover:bg-[#1BE7FF] hover:text-[#0A0F1A] transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-book-open-line mr-2"></i>
                평가체제 자세히 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatonicEducationSection;