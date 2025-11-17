import { Link } from 'react-router-dom';
import homeContent from '../../../../content/home.json';

const HeroSection = () => {
  const { hero } = homeContent;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0F1A] via-[#0B1E39] to-[#0A0F1A]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('${hero.backgroundImage}')`
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Orbital Lines */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#1BE7FF]/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-[#6C63FF]/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

        {/* Floating Particles */}
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-[#1BE7FF] rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-[#FFC145] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#FF3D7F] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] bg-clip-text text-transparent">
              {hero.mainTitle}
            </span>
            <br />
            <span className="text-white">{hero.mainSubtitle}</span>
          </h1>

          {/* Brand */}
          <div className="text-2xl md:text-3xl font-semibold text-[#1BE7FF] mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {hero.brandText}
          </div>

          {/* Subcopy */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            {hero.description} <strong className="text-[#1BE7FF]">데이터·문제해결·디자인 역량</strong>으로 이어지도록,<br />
            아이캔은 <strong className="text-[#4C46D6]"><span className="text-white font-bold">{hero.descriptionHighlight}</span></strong>{hero.descriptionEnd}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to={hero.primaryButtonLink}
              className="px-8 py-4 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-[#0A0F1A] font-bold text-lg rounded-full hover:shadow-xl hover:shadow-[#1BE7FF]/30 transform hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
            >
              <i className={`${hero.primaryButtonIcon} mr-2`}></i>
              {hero.primaryButtonText}
            </Link>
            <Link
              to={hero.secondaryButtonLink}
              className="px-8 py-4 border-2 border-[#1BE7FF] text-[#1BE7FF] font-bold text-lg rounded-full hover:bg-[#1BE7FF] hover:text-[#0A0F1A] transition-all cursor-pointer whitespace-nowrap"
            >
              <i className={`${hero.secondaryButtonIcon} mr-2`}></i>
              {hero.secondaryButtonText}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {hero.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#1BE7FF] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#1BE7FF] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
