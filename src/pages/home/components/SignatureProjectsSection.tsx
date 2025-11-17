const SignatureProjectsSection = () => {
  const projects = [
    {
      icon: 'ri-earth-line',
      title: '위성 데이터로 기후 패턴 분석',
      subtitle: 'Climate Pattern Analysis',
      description: 'NASA 위성 데이터를 활용하여 지구 온난화와 기후 변화 패턴을 분석하고 시각화합니다.',
      image: 'https://readdy.ai/api/search-image?query=Students%20analyzing%20satellite%20climate%20data%20on%20large%20displays%2C%20weather%20patterns%20visualization%2C%20global%20warming%20analysis%2C%20futuristic%20data%20center%20with%20holographic%20earth%20models%2C%20electric%20cyan%20and%20purple%20lighting%2C%20scientific%20research%20environment&width=400&height=300&seq=climate-analysis&orientation=landscape',
      skills: ['데이터 분석', 'Python', '시각화', '통계학'],
      duration: '6주',
      color: '#1BE7FF'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: '소행성 채굴 경제성 시뮬레이션',
      subtitle: 'Asteroid Mining Economics',
      description: '소행성 자원 채굴의 경제적 타당성을 분석하고 비즈니스 모델을 시뮬레이션합니다.',
      image: 'https://readdy.ai/api/search-image?query=Economic%20simulation%20of%20asteroid%20mining%20operations%2C%203D%20asteroid%20models%20with%20resource%20analysis%2C%20financial%20charts%20and%20projections%2C%20space%20mining%20equipment%20design%2C%20futuristic%20business%20planning%20interface%2C%20cosmic%20background&width=400&height=300&seq=asteroid-mining&orientation=landscape',
      skills: ['경제학', '시뮬레이션', '모델링', '발표'],
      duration: '8주',
      color: '#6C63FF'
    },
    {
      icon: 'ri-robot-line',
      title: '탐사 로버 설계·테스트',
      subtitle: 'Rover Design & Testing',
      description: '화성 탐사 로버를 설계하고 프로토타입을 제작하여 실제 환경에서 테스트합니다.',
      image: 'https://readdy.ai/api/search-image?query=Students%20building%20and%20testing%20Mars%20rover%20prototypes%2C%20robotic%20engineering%20workshop%2C%203D%20printing%20and%20assembly%2C%20testing%20on%20simulated%20Mars%20terrain%2C%20collaborative%20STEM%20project%2C%20modern%20maker%20space&width=400&height=300&seq=rover-design&orientation=landscape',
      skills: ['로봇공학', '3D 설계', '프로그래밍', '테스트'],
      duration: '10주',
      color: '#FFC145'
    },
    {
      icon: 'ri-plant-line',
      title: '우주정거장 생태계 모델링',
      subtitle: 'Space Station Ecosystem',
      description: '우주정거장 내 자급자족 생태계를 설계하고 생명 유지 시스템을 모델링합니다.',
      image: 'https://readdy.ai/api/search-image?query=Space%20station%20ecosystem%20modeling%2C%20hydroponic%20gardens%20in%20space%2C%20life%20support%20systems%20design%2C%20closed-loop%20environmental%20systems%2C%20students%20working%20on%20biological%20simulations%2C%20futuristic%20greenhouse%20modules&width=400&height=300&seq=space-ecosystem&orientation=landscape',
      skills: ['생물학', '환경공학', '시스템 설계', '지속가능성'],
      duration: '12주',
      color: '#FF3D7F'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F1A] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Signature <span className="text-[#1BE7FF]">Projects</span>
          </h2>
          <div className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            실제 우주 미션을 기반으로 우주인 슈퍼키즈 프로젝트로 이론을 실습으로 연결합니다
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-gray-100 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                    style={{ backgroundColor: project.color }}
                  >
                    <i className={project.icon}></i>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {project.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A0F1A] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {project.title}
                </h3>
                <div 
                  className="text-sm font-medium mb-3 opacity-80"
                  style={{ color: project.color }}
                >
                  {project.subtitle}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button 
                  className="w-full py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-lg hover:border-[#1BE7FF] hover:text-[#1BE7FF] transition-colors cursor-pointer"
                >
                  프로젝트 상세보기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Outcomes */}
        <div className="mt-20 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#0A0F1A] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              프로젝트 성과물
            </h3>
            <p className="text-gray-600">모든 프로젝트는 구체적이고 측정 가능한 결과물로 완성됩니다</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1BE7FF] rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4">
                <i className="ri-presentation-line"></i>
              </div>
              <h4 className="font-semibold text-[#0A0F1A] mb-2">캡스톤 전시</h4>
              <p className="text-gray-600 text-sm">프로젝트 결과를 공개 전시로 발표</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#6C63FF] rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4">
                <i className="ri-file-text-line"></i>
              </div>
              <h4 className="font-semibold text-[#0A0F1A] mb-2">기술 리포트</h4>
              <p className="text-gray-600 text-sm">과학적 방법론에 따른 상세 보고서</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFC145] rounded-full flex items-center justify-center text-[#0A0F1A] text-xl mx-auto mb-4">
                <i className="ri-slideshow-line"></i>
              </div>
              <h4 className="font-semibold text-[#0A0F1A] mb-2">피치 덱</h4>
              <p className="text-gray-600 text-sm">투자자 대상 사업 제안서 형태</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF3D7F] rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4">
                <i className="ri-code-box-line"></i>
              </div>
              <h4 className="font-semibold text-[#0A0F1A] mb-2">코드 리포지터리</h4>
              <p className="text-gray-600 text-sm">GitHub를 통한 코드 공유와 협업</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1BE7FF] rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4">
                <i className="ri-dashboard-line"></i>
              </div>
              <h4 className="font-semibold text-[#0A0F1A] mb-2">데이터 대시보드</h4>
              <p className="text-gray-600 text-sm">실시간 데이터 시각화 플랫폼</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureProjectsSection;