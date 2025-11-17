import { useTranslation } from 'react-i18next';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const { t } = useTranslation('about');

  const stats = [
    { valueKey: 'stat1Value', labelKey: 'stat1Label', icon: 'ri-calendar-check-line', color: '#1BE7FF' },
    { valueKey: 'stat2Value', labelKey: 'stat2Label', icon: 'ri-user-heart-line', color: '#6C63FF' },
    { valueKey: 'stat3Value', labelKey: 'stat3Label', icon: 'ri-rocket-line', color: '#FFC145' },
    { valueKey: 'stat4Value', labelKey: 'stat4Label', icon: 'ri-hand-heart-line', color: '#FF3D7F' }
  ];

  const values = [
    {
      titleKey: 'value1Title',
      descriptionKey: 'value1Description',
      icon: 'ri-lightbulb-flash-line',
      color: '#1BE7FF'
    },
    {
      titleKey: 'value2Title',
      descriptionKey: 'value2Description',
      icon: 'ri-hand-heart-line',
      color: '#6C63FF'
    },
    {
      titleKey: 'value3Title',
      descriptionKey: 'value3Description',
      icon: 'ri-book-open-line',
      color: '#FFC145'
    },
    {
      titleKey: 'value4Title',
      descriptionKey: 'value4Description',
      icon: 'ri-user-star-line',
      color: '#FF3D7F'
    }
  ];

  const team = [
    {
      nameKey: 'team1Name',
      roleKey: 'team1Role',
      descriptionKey: 'team1Description',
      image: 'https://ui-avatars.com/api/?name=김우주&background=1BE7FF&color=fff&size=200',
      expertiseKeys: ['team1Skill1', 'team1Skill2', 'team1Skill3']
    },
    {
      nameKey: 'team2Name',
      roleKey: 'team2Role',
      descriptionKey: 'team2Description',
      image: 'https://ui-avatars.com/api/?name=이지혜&background=6C63FF&color=fff&size=200',
      expertiseKeys: ['team2Skill1', 'team2Skill2', 'team2Skill3']
    },
    {
      nameKey: 'team3Name',
      roleKey: 'team3Role',
      descriptionKey: 'team3Description',
      image: 'https://ui-avatars.com/api/?name=박데이터&background=FFC145&color=0A0F1A&size=200',
      expertiseKeys: ['team3Skill1', 'team3Skill2', 'team3Skill3']
    },
    {
      nameKey: 'team4Name',
      roleKey: 'team4Role',
      descriptionKey: 'team4Description',
      image: 'https://ui-avatars.com/api/?name=최혁신&background=FF3D7F&color=fff&size=200',
      expertiseKeys: ['team4Skill1', 'team4Skill2', 'team4Skill3']
    }
  ];

  const timeline = [
    {
      yearKey: 'timeline1Year',
      titleKey: 'timeline1Title',
      descriptionKey: 'timeline1Description'
    },
    {
      yearKey: 'timeline2Year',
      titleKey: 'timeline2Title',
      descriptionKey: 'timeline2Description'
    },
    {
      yearKey: 'timeline3Year',
      titleKey: 'timeline3Title',
      descriptionKey: 'timeline3Description'
    },
    {
      yearKey: 'timeline4Year',
      titleKey: 'timeline4Title',
      descriptionKey: 'timeline4Description'
    },
    {
      yearKey: 'timeline5Year',
      titleKey: 'timeline5Title',
      descriptionKey: 'timeline5Description'
    }
  ];

  const partners = [
    { nameKey: 'partner1Name', descriptionKey: 'partner1Description' },
    { nameKey: 'partner2Name', descriptionKey: 'partner2Description' },
    { nameKey: 'partner3Name', descriptionKey: 'partner3Description' },
    { nameKey: 'partner4Name', descriptionKey: 'partner4Description' },
    { nameKey: 'partner5Name', descriptionKey: 'partner5Description' },
    { nameKey: 'partner6Name', descriptionKey: 'partner6Description' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0F1A] via-[#0B1E39] to-[#0A0F1A]">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#1BE7FF]/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-[#6C63FF]/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1BE7FF] to-[#6C63FF] rounded-full flex items-center justify-center">
                <i className="ri-rocket-line text-3xl text-white"></i>
              </div>
              <h1 className="text-6xl font-bold text-[#1BE7FF]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('heroTitle')}
              </h1>
            </div>
          </div>
          <p className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('heroSubtitle')}
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            {t('heroDescription')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('missionTitle')} <span className="text-[#1BE7FF]">{t('missionTitleHighlight')}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('missionParagraph1')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('missionParagraph2')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#1BE7FF]/50 hover:shadow-lg transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <i className={`${stat.icon} text-2xl`} style={{ color: stat.color }}></i>
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
                    {t(stat.valueKey)}
                  </div>
                  <div className="text-gray-600 font-medium">{t(stat.labelKey)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('valuesTitle')} <span className="text-[#1BE7FF]">{t('valuesTitleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-600">
              {t('valuesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <i className={`${value.icon} text-3xl`} style={{ color: value.color }}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t(value.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(value.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('teamTitle')} <span className="text-[#1BE7FF]">{t('teamTitleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-600">
              {t('teamSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden border-2 border-gray-100 hover:border-[#1BE7FF]/50 hover:shadow-xl transition-all"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={t(member.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {t(member.nameKey)}
                  </h3>
                  <div className="text-sm text-[#1BE7FF] font-semibold mb-3">{t(member.roleKey)}</div>
                  <p className="text-sm text-gray-600 mb-4">{t(member.descriptionKey)}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertiseKeys.map((skillKey, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600"
                      >
                        {t(skillKey)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-[#0A0F1A] via-[#0B1E39] to-[#0A0F1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="text-[#1BE7FF]">{t('timelineTitleHighlight')}</span> {t('timelineTitle')}
            </h2>
            <p className="text-xl text-gray-300">
              {t('timelineSubtitle')}
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#1BE7FF] to-[#6C63FF]"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 ml-8 lg:ml-0">
                      <div className="text-2xl font-bold text-[#1BE7FF] mb-2">{t(item.yearKey)}</div>
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {t(item.titleKey)}
                      </h3>
                      <p className="text-gray-300">{t(item.descriptionKey)}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#1BE7FF] to-[#6C63FF] rounded-full border-4 border-[#0A0F1A] flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('partnersTitle')} <span className="text-[#1BE7FF]">{t('partnersTitleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-600">
              {t('partnersSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1BE7FF]/20 to-[#6C63FF]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <i className="ri-building-line text-2xl text-[#1BE7FF]"></i>
                </div>
                <div className="font-bold text-gray-900 mb-1">{t(partner.nameKey)}</div>
                <div className="text-xs text-gray-500">{t(partner.descriptionKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0A0F1A] via-[#0B1E39] to-[#0A0F1A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('ctaTitle')} <span className="text-[#1BE7FF]">{t('ctaTitleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-[#0A0F1A] font-bold text-lg rounded-full hover:shadow-xl hover:shadow-[#1BE7FF]/30 transform hover:scale-105 transition-all"
            >
              <i className="ri-phone-line mr-2"></i>
              {t('ctaButton1')}
            </Link>
            <Link
              to="/curriculum"
              className="px-8 py-4 border-2 border-[#1BE7FF] text-[#1BE7FF] font-bold text-lg rounded-full hover:bg-[#1BE7FF] hover:text-[#0A0F1A] transition-all"
            >
              <i className="ri-book-open-line mr-2"></i>
              {t('ctaButton2')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
