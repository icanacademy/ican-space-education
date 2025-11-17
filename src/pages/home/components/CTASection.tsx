const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0A0F1A] via-[#0B1E39] to-[#0A0F1A] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-[#1BE7FF]/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-[#6C63FF]/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-[#1BE7FF] rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-[#FFC145] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              우주적 사고로 <span className="text-[#1BE7FF]">미래를 준비</span>하세요
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
              아이캔의 혁신적인 우주교육 프로그램으로<br />
              자녀의 무한한 가능성을 발견해보세요
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1BE7FF] rounded-full flex items-center justify-center text-2xl text-[#0A0F1A] mx-auto mb-4">
                  <i className="ri-calendar-check-line"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">무료 상담</h3>
                <p className="text-gray-300 text-sm">개인별 맞춤 학습 계획 수립</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#6C63FF] rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4">
                  <i className="ri-test-tube-line"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">체험 수업</h3>
                <p className="text-gray-300 text-sm">실제 프로젝트 미리 경험하기</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFC145] rounded-full flex items-center justify-center text-2xl text-[#0A0F1A] mx-auto mb-4">
                  <i className="ri-team-line"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">학부모 설명회</h3>
                <p className="text-gray-300 text-sm">교육 철학과 방법론 소개</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="#consultation-form"
                className="px-8 py-4 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-[#0A0F1A] font-bold text-lg rounded-full hover:shadow-xl hover:shadow-[#1BE7FF]/30 transform hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-calendar-line mr-2"></i>
                무료 상담 신청
              </a>
              <a 
                href="tel:02-1234-5678"
                className="px-8 py-4 border-2 border-[#1BE7FF] text-[#1BE7FF] font-bold text-lg rounded-full hover:bg-[#1BE7FF] hover:text-[#0A0F1A] transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-line mr-2"></i>
                전화 상담
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;