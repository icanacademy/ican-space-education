import { useTranslation } from 'react-i18next';

const RoadmapDetailSection = () => {
  const { t } = useTranslation('roadmap');

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-[#0A0F1A] via-[#1A1F2E] to-[#2A1F3D] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#1BE7FF]/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#6C63FF]/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-[#FF6B9D]/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-20">
          <img 
            src="https://readdy.ai/api/search-image?query=Futuristic%20space%20academy%20classroom%20with%20diverse%20children%20learning%20cosmic%20thinking%2C%20holographic%20displays%20showing%20galaxy%20formations%2C%20AI%20teaching%20robots%20guiding%20students%20through%20language%20development%20exercises%2C%20children%20building%20space%20models%20while%20developing%20communication%20skills%2C%20cosmic%20educational%20environment%20with%20stars%20and%20planets%2C%20modern%20minimalist%20design&width=1200&height=600&seq=roadmap-hero&orientation=landscape"
            alt="우주적 사고 개발 로드맵"
            className="w-full h-[600px] object-cover object-top rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] rounded-full flex items-center justify-center mb-6">
              <i className="ri-brain-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('overview.cognitive.title')}</h3>
            <p className="text-gray-300 leading-relaxed">{t('overview.cognitive.description')}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-[#6C63FF] to-[#FF6B9D] rounded-full flex items-center justify-center mb-6">
              <i className="ri-speak-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('overview.language.title')}</h3>
            <p className="text-gray-300 leading-relaxed">{t('overview.language.description')}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B9D] to-[#1BE7FF] rounded-full flex items-center justify-center mb-6">
              <i className="ri-rocket-2-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('overview.cosmic.title')}</h3>
            <p className="text-gray-300 leading-relaxed">{t('overview.cosmic.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapDetailSection;