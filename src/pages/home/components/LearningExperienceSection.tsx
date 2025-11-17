const LearningExperienceSection = () => {
  const steps = [
    {
      icon: 'ri-eye-line',
      title: '관찰',
      subtitle: 'Observe',
      description: '우주 현상과 데이터를 세심하게 관찰하고 패턴을 발견합니다.',
      color: '#1BE7FF'
    },
    {
      icon: 'ri-question-line',
      title: '가설',
      subtitle: 'Hypothesize',
      description: '관찰한 현상에 대한 가설을 세우고 검증 방법을 설계합니다.',
      color: '#6C63FF'
    },
    {
      icon: 'ri-flask-line',
      title: '실험',
      subtitle: 'Experiment',
      description: '프로토타입을 제작하고 실험을 통해 가설을 검증합니다.',
      color: '#FFC145'
    },
    {
      icon: 'ri-check-line',
      title: '검증',
      subtitle: 'Validate',
      description: '결과를 분석하고 데이터로 검증하여 결론을 도출합니다.',
      color: '#FF3D7F'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F1A] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            스페이스 오리엔티어링 Learning Experience
          </h2>
          <div className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            관찰–가설–실험–검증을 프로젝트로 구현합니다.<br />
            언어·데이터·디자인을 연결해 탐구가 결과물로 이어집니다.
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] mx-auto"></div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-center">
                <div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-2xl transform group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: step.color }}
                >
                  <i className={step.icon}></i>
                </div>
                <h3 className="text-2xl font-bold text-[#0A0F1A] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {step.title}
                </h3>
                <div className="text-lg font-medium mb-4" style={{ color: step.color }}>
                  {step.subtitle}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform translate-x-4"></div>
              )}
            </div>
          ))}
        </div>

        {/* Integration Visual */}
        <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#0A0F1A] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                통합적 학습 접근법
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#1BE7FF] rounded-full flex items-center justify-center">
                    <i className="ri-translate-2 text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#0A0F1A] mb-1">언어 (Language)</h4>
                    <p className="text-gray-600">과학적 사고를 명확하게 표현하고 소통하는 능력</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#6C63FF] rounded-full flex items-center justify-center">
                    <i className="ri-bar-chart-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#0A0F1A] mb-1">데이터 (Data)</h4>
                    <p className="text-gray-600">정보를 수집, 분석, 시각화하여 인사이트 도출</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#FFC145] rounded-full flex items-center justify-center">
                    <i className="ri-palette-line text-[#0A0F1A] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#0A0F1A] mb-1">디자인 (Design)</h4>
                    <p className="text-gray-600">창의적 사고로 문제를 해결하고 프로토타입 제작</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Students%20working%20on%20integrated%20STEAM%20project%2C%20combining%20language%20data%20and%20design%20elements%2C%20holographic%20displays%20showing%20satellite%20data%20analysis%2C%203D%20modeling%20of%20space%20rovers%2C%20collaborative%20workspace%20with%20cosmic%20theme%2C%20modern%20educational%20technology%2C%20electric%20cyan%20and%20purple%20accents&width=600&height=400&seq=learning-experience&orientation=landscape"
                alt="통합적 학습 환경"
                className="w-full h-80 object-cover object-top rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A]/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningExperienceSection;