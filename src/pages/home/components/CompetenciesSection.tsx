import { useState } from 'react';

const CompetenciesSection = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      title: "언어 조음력 기초",
      subtitle: "Language Articulation Foundation",
      description: "지구교육의 기반이 되는 이중언어 조음력을 체계적으로 평가하고 개발합니다.",
      icon: "ri-speak-line",
      color: "#1BE7FF",
      level: "기초 단계",
      assessments: [
        "사이트워즈 정확성 및 유창성 평가",
        "기본 의사소통 문장 구성 능력",
        "서술과 묘사 능력 진단",
        "학년별 어휘력 수준 측정"
      ],
      skills: [
        "정확한 발음과 빠른 구사력",
        "기본 문장 패턴 활용",
        "상황별 적절한 표현 선택",
        "감정을 담은 언어 표현"
      ]
    },
    {
      title: "통합 지식 체계",
      subtitle: "Integrated Knowledge Schema",
      description: "Common Core Knowledge를 영어로 체화하여 논리적 사고와 표현 능력을 확장합니다.",
      icon: "ri-brain-line",
      color: "#6C63FF",
      level: "응용 단계",
      assessments: [
        "교과지식의 영어 표현 능력",
        "스토리텔링과 설명 능력",
        "접속사 활용 및 문장 연결",
        "형용사·부사 활용 묘사력"
      ],
      skills: [
        "지식 융합 설명 능력",
        "논리적 구조화 표현",
        "문화적 맥락 이해",
        "학술적 어휘 활용"
      ]
    },
    {
      title: "우주적 사고 전환",
      subtitle: "Cosmic Thinking Transition",
      description: "지구 중심적 사고에서 벗어나 우주적 관점으로 문제를 해결하는 역량을 개발합니다.",
      icon: "ri-rocket-2-line",
      color: "#FFC145",
      level: "전환 단계",
      assessments: [
        "국제학교 수준 토론 능력",
        "프레젠테이션 및 설득력",
        "레토릭 활용 스피치",
        "창의적 문제 해결 표현"
      ],
      skills: [
        "미지 영역 탐구 언어",
        "가설 설정 및 검증 표현",
        "우주적 관점 서술",
        "혁신적 아이디어 전달"
      ]
    },
    {
      title: "우주 과제 해결",
      subtitle: "Space Challenge Resolution",
      description: "형이상학적 사고력과 차별화된 오리엔티어링 스킬로 우주 문제를 해결합니다.",
      icon: "ri-planet-line",
      color: "#FF3D7F",
      level: "마스터 단계",
      assessments: [
        "복합 문제 분석 및 해결",
        "다차원적 사고 표현",
        "리더십 커뮤니케이션",
        "글로벌 협업 능력"
      ],
      skills: [
        "우주 과제 정의 및 해결",
        "형이상학적 통찰 표현",
        "미래 비전 제시",
        "인류적 관점 소통"
      ]
    }
  ];

  const evaluationCriteria = [
    {
      category: "슈퍼키즈 마인드셋",
      subtitle: "AMCC 슈퍼파워 영역",
      items: [
        "회복탄력성(Resilience) 평가",
        "Grit + Persevere 통합 측정",
        "뇌 컨트롤센터 학습태도 분석",
        "도전과제 완수 능력 진단"
      ],
      description: "힘들고 어려운 상황에서도 끝까지 해내는 슈퍼파워를 키워줍니다"
    },
    {
      category: "사이트워즈 & 기초 구사력",
      subtitle: "언어 조음력 기반 평가",
      items: [
        "정확성과 유창성 (5점 척도)",
        "기본 문장 구성 능력",
        "발화 안정성 (1-2학년 특별 고려)",
        "다면적 조사 결과 종합 평가"
      ],
      description: "체계적인 언어능력 진단을 통한 포텐셜 발굴"
    },
    {
      category: "서술 & 묘사 능력",
      subtitle: "스토리텔링 역량 분석",
      items: [
        "문장 수와 접속사 활용 분석",
        "형용사·부사 사용 패턴",
        "학년별 어휘 수준 평가",
        "스토리텔링 구조화 능력"
      ],
      description: "논리적 표현과 창의적 서술 능력 개발"
    },
    {
      category: "교과 지식 융합",
      subtitle: "Common Core Knowledge 적용",
      items: [
        "Common Core Knowledge 적용",
        "논리적 설명 및 논증",
        "레시피 설명 등 실용적 표현",
        "사회적 이슈 의견 제시"
      ],
      description: "지식을 융합하여 실생활 문제 해결 능력 강화"
    },
    {
      category: "국제 수준 비교",
      subtitle: "글로벌 스탠다드 평가",
      items: [
        "미국 현지 학생 대비 어휘력",
        "표현의 다양성과 문화적 이해",
        "학술적 토론 능력",
        "프레젠테이션 및 설득력"
      ],
      description: "국제학교 수준의 언어능력 달성 목표"
    },
    {
      category: "닥터아이캔 AI 시스템",
      subtitle: "개인별 맞춤 강화학습",
      items: [
        "AI 기반 개인별 스킬 분석",
        "학년별 난제해결 프로젝트",
        "우주적 사고 커리큘럼 적용",
        "실시간 학습 최적화 제공"
      ],
      description: "20년 교육 노하우가 담긴 AI 시스템으로 우주교육 현실화"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F1A] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            언어 조음력 기반 <span className="text-[#1BE7FF]">우주인 커뮤니케이션 능력 개발</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] mx-auto mb-8"></div>
          <p className="text-lg leading-relaxed" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            지구교육에서 우주교육으로 나아가는 체계적 언어능력 개발 로드맵<br />
            <strong className="text-[#6C63FF]">조음력 평가</strong>를 통한 <strong className="text-[#1BE7FF]">포텐셜 발굴</strong>과 <strong className="text-[#FFC145]">비쥬얼라이징훈련을 통한 우주적 상상력</strong> 확장
          </p>
        </div>

        {/* Stage Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {stages.map((stage, index) => (
            <button
              key={index}
              onClick={() => setActiveStage(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeStage === index
                  ? 'text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
              style={{
                backgroundColor: activeStage === index ? stage.color : undefined
              }}
            >
              {stage.level}
            </button>
          ))}
        </div>

        {/* Active Stage Content */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl"
                  style={{ backgroundColor: stages[activeStage].color }}
                >
                  <i className={stages[activeStage].icon}></i>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {stages[activeStage].level}
                  </div>
                  <h3 className="text-3xl font-bold text-[#0A0F1A]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {stages[activeStage].title}
                  </h3>
                  <div className="text-lg font-medium" style={{ color: stages[activeStage].color }}>
                    {stages[activeStage].subtitle}
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {stages[activeStage].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-[#0A0F1A] mb-4">평가 항목</h4>
                  <div className="space-y-3">
                    {stages[activeStage].assessments.map((assessment, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: stages[activeStage].color }}
                        ></div>
                        <span className="text-gray-600 text-sm">{assessment}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#0A0F1A] mb-4">개발 역량</h4>
                  <div className="space-y-3">
                    {stages[activeStage].skills.map((skill, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: stages[activeStage].color }}
                        ></div>
                        <span className="text-gray-600 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={`https://readdy.ai/api/search-image?query=Students%20developing%20language%20articulation%20skills%20for%20space%20education%2C%20$%7Bstages%5BactiveStage%5D.title%7D%20stage%2C%20bilingual%20learning%20assessment%2C%20cosmic%20thinking%20development%2C%20futuristic%20classroom%20with%20space%20themes%2C%20students%20engaged%20in%20communication%20activities%2C%20modern%20educational%20technology&width=600&height=400&seq=stage-${activeStage}&orientation=landscape`}
                alt={`${stages[activeStage].title} 단계`}
                className="w-full h-80 object-cover object-center rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A]/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Evaluation Criteria */}
        <div className="bg-gradient-to-br from-[#0A0F1A] to-[#0B1E39] rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              아이캔 언어능력 평가 체계
            </h3>
            <p className="text-gray-300 text-lg">
              슈퍼키즈 마인드셋과 조음력 중심의 체계적 평가로 우주교육 포텐셜을 발굴합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {evaluationCriteria.map((criteria, index) => (
              <div key={index} className="bg-[#0A0F1A]/50 rounded-xl p-6 border border-[#1BE7FF]/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-[#1BE7FF] rounded-full"></div>
                  <h4 className="text-xl font-semibold text-[#1BE7FF]">
                    {criteria.category}
                  </h4>
                </div>
                <div className="text-sm text-[#FFC145] font-medium mb-3">
                  {criteria.subtitle}
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {criteria.description}
                </p>
                <div className="space-y-3">
                  {criteria.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#FFC145] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Dr. I-CAN AI System Highlight */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-[#1BE7FF]/20 to-[#6C63FF]/20 rounded-2xl p-8 border border-[#1BE7FF]/30">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] rounded-full flex items-center justify-center">
                      <i className="ri-robot-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-[#1BE7FF]">
                        닥터아이캔의 스페이스 오리엔티어링
                      </h4>
                      <div className="text-[#FFC145] font-medium">AI 기반 우주교육 시스템</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    에드워드 중심의 드림팀이 개발한 혁신적인 AI 교육시스템으로, 
                    아이캔의 20년 교육 노하우를 학습한 '닥터아이캔'이 
                    개인별 맞춤 강화학습을 제공합니다.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-[#1BE7FF]"></i>
                        <span className="text-sm text-gray-300">우주적 사고 커리큘럼</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-[#1BE7FF]"></i>
                        <span className="text-sm text-gray-300">학년별 난제해결 프로젝트</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-[#1BE7FF]"></i>
                        <span className="text-sm text-gray-300">개인별 스킬 중심 설계</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-[#1BE7FF]"></i>
                        <span className="text-sm text-gray-300">크리스천 품성 교육</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-[#0A0F1A]/30 rounded-xl p-6 border border-[#6C63FF]/20">
                    <div className="text-[#FFC145] text-sm font-medium mb-2">시작 </div>
                    <div className="text-3xl font-bold text-white mb-2">2024년 12월 중순</div>
                    <div className="text-gray-300 text-sm">혁신적인 교육 프로젝트 런칭</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-[#0A0F1A]/30 rounded-2xl p-8 border border-[#6C63FF]/20">
              <h4 className="text-2xl font-bold text-[#6C63FF] mb-4">
                평가 결과 활용
              </h4>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                개별 학생의 언어 조음력 평가 결과를 바탕으로 맞춤형 학습 계획을 수립하고,<br />
                지구교육에서 우주교육으로의 전환을 위한 체계적 로드맵을 제공합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-[#0A0F1A] font-bold text-lg rounded-full hover:shadow-xl hover:shadow-[#1BE7FF]/30 transform hover:scale-105 transition-all cursor-pointer whitespace-nowrap">
                  <i className="ri-assessment-line mr-2"></i>
                  평가 신청하기
                </button>
                <button 
                  onClick={() => {
                    const roadmapSection = document.getElementById('curriculum-roadmap');
                    if (roadmapSection) {
                      roadmapSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-8 py-4 border-2 border-[#1BE7FF] text-[#1BE7FF] font-bold text-lg rounded-full hover:bg-[#1BE7FF] hover:text-[#0A0F1A] transition-all cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-roadmap-line mr-2"></i>
                  로드맵 상세보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetenciesSection;
