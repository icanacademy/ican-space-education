import { Link } from 'react-router-dom';
import { Builder } from '@builder.io/react';

interface EditableHeroProps {
  mainTitle?: string;
  mainSubtitle?: string;
  brandText?: string;
  description?: string;
  descriptionHighlight?: string;
  descriptionEnd?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  primaryButtonIcon?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  secondaryButtonIcon?: string;
  backgroundImage?: string;
  stats?: Array<{
    value: string;
    label: string;
    color: string;
  }>;
}

const EditableHero = ({
  mainTitle = "우주를 배우다,",
  mainSubtitle = "미래를 바꾼다",
  brandText = "닥터아이캔 에듀스페이스 : 아이들의 언어 차원을 도약시키다",
  description = "탐험하는 배움이 데이터·문제해결·디자인 역량으로 이어지도록,",
  descriptionHighlight = "우주적 사고",
  descriptionEnd = "로 커리큘럼을 설계합니다.",
  primaryButtonText = "상담 신청",
  primaryButtonLink = "/contact",
  primaryButtonIcon = "ri-calendar-line",
  secondaryButtonText = "커리큘럼 보기",
  secondaryButtonLink = "/curriculum",
  secondaryButtonIcon = "ri-book-open-line",
  backgroundImage = "https://readdy.ai/api/search-image?query=Futuristic%20space%20school%20classroom&width=1920&height=1080&seq=hero-space-school&orientation=landscape",
  stats = [
    { value: "100+", label: "프로젝트 완성", color: "#1BE7FF" },
    { value: "95%", label: "학습 만족도", color: "#6C63FF" },
    { value: "24개월", label: "평균 학습 기간", color: "#FFC145" }
  ]
}: EditableHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0F1A] via-[#0B1E39] to-[#0A0F1A]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('${backgroundImage}')`
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
              {mainTitle}
            </span>
            <br />
            <span className="text-white">{mainSubtitle}</span>
          </h1>

          {/* Brand */}
          <div className="text-2xl md:text-3xl font-semibold text-[#1BE7FF] mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {brandText}
          </div>

          {/* Subcopy */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            {description} <strong className="text-[#1BE7FF]">데이터·문제해결·디자인 역량</strong>으로 이어지도록,<br />
            아이캔은 <strong className="text-[#4C46D6]"><span className="text-white font-bold">{descriptionHighlight}</span></strong>{descriptionEnd}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to={primaryButtonLink}
              className="px-8 py-4 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-[#0A0F1A] font-bold text-lg rounded-full hover:shadow-xl hover:shadow-[#1BE7FF]/30 transform hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
            >
              <i className={`${primaryButtonIcon} mr-2`}></i>
              {primaryButtonText}
            </Link>
            <Link
              to={secondaryButtonLink}
              className="px-8 py-4 border-2 border-[#1BE7FF] text-[#1BE7FF] font-bold text-lg rounded-full hover:bg-[#1BE7FF] hover:text-[#0A0F1A] transition-all cursor-pointer whitespace-nowrap"
            >
              <i className={`${secondaryButtonIcon} mr-2`}></i>
              {secondaryButtonText}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats?.map((stat, index) => (
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

// Register component with Builder.io
Builder.registerComponent(EditableHero, {
  name: 'Hero Section',
  inputs: [
    {
      name: 'mainTitle',
      type: 'string',
      defaultValue: '우주를 배우다,',
      helperText: 'Main headline (first line)'
    },
    {
      name: 'mainSubtitle',
      type: 'string',
      defaultValue: '미래를 바꾼다',
      helperText: 'Main headline (second line)'
    },
    {
      name: 'brandText',
      type: 'longText',
      defaultValue: '닥터아이캔 에듀스페이스 : 아이들의 언어 차원을 도약시키다',
      helperText: 'Brand tagline'
    },
    {
      name: 'description',
      type: 'longText',
      defaultValue: '탐험하는 배움이 데이터·문제해결·디자인 역량으로 이어지도록,',
      helperText: 'Description paragraph (part 1)'
    },
    {
      name: 'descriptionHighlight',
      type: 'string',
      defaultValue: '우주적 사고',
      helperText: 'Highlighted text in description'
    },
    {
      name: 'descriptionEnd',
      type: 'string',
      defaultValue: '로 커리큘럼을 설계합니다.',
      helperText: 'Description paragraph (part 2)'
    },
    {
      name: 'backgroundImage',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg', 'webp'],
      defaultValue: 'https://readdy.ai/api/search-image?query=Futuristic%20space%20school%20classroom&width=1920&height=1080&seq=hero-space-school&orientation=landscape',
      helperText: 'Background image for hero section'
    },
    {
      name: 'primaryButtonText',
      type: 'string',
      defaultValue: '상담 신청',
      helperText: 'Primary button text'
    },
    {
      name: 'primaryButtonLink',
      type: 'string',
      defaultValue: '/contact',
      helperText: 'Primary button link'
    },
    {
      name: 'primaryButtonIcon',
      type: 'string',
      defaultValue: 'ri-calendar-line',
      helperText: 'Primary button icon class (Remix Icon)'
    },
    {
      name: 'secondaryButtonText',
      type: 'string',
      defaultValue: '커리큘럼 보기',
      helperText: 'Secondary button text'
    },
    {
      name: 'secondaryButtonLink',
      type: 'string',
      defaultValue: '/curriculum',
      helperText: 'Secondary button link'
    },
    {
      name: 'secondaryButtonIcon',
      type: 'string',
      defaultValue: 'ri-book-open-line',
      helperText: 'Secondary button icon class (Remix Icon)'
    },
    {
      name: 'stats',
      type: 'list',
      defaultValue: [
        { value: "100+", label: "프로젝트 완성", color: "#1BE7FF" },
        { value: "95%", label: "학습 만족도", color: "#6C63FF" },
        { value: "24개월", label: "평균 학습 기간", color: "#FFC145" }
      ],
      subFields: [
        {
          name: 'value',
          type: 'string',
          defaultValue: '100+',
          helperText: 'Statistic value'
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: '프로젝트 완성',
          helperText: 'Statistic label'
        },
        {
          name: 'color',
          type: 'color',
          defaultValue: '#1BE7FF',
          helperText: 'Statistic color'
        }
      ]
    }
  ],
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/rocket.png',
  friendlyName: 'Hero Section (ICAN Space Education)',
  description: 'Editable hero section with title, description, buttons, and statistics'
});

export default EditableHero;
