import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CurriculumSection = () => {
  const { t } = useTranslation('home');

  const weeklyHighlights = [
    { week: 1, icon: 'ri-earth-line', color: '#1BE7FF', titleKey: 'week1', descKey: 'week1Desc' },
    { week: 2, icon: 'ri-moon-line', color: '#6C63FF', titleKey: 'week2', descKey: 'week2Desc' },
    { week: 3, icon: 'ri-robot-2-line', color: '#FFC145', titleKey: 'week3', descKey: 'week3Desc' },
    { week: 4, icon: 'ri-planet-line', color: '#FF3D7F', titleKey: 'week4', descKey: 'week4Desc' },
    { week: 5, icon: 'ri-spaceship-line', color: '#1BE7FF', titleKey: 'week5', descKey: 'week5Desc' },
    { week: 6, icon: 'ri-star-line', color: '#6C63FF', titleKey: 'week6', descKey: 'week6Desc' },
    { week: 7, icon: 'ri-braces-line', color: '#FFC145', titleKey: 'week7', descKey: 'week7Desc' },
    { week: 8, icon: 'ri-trophy-line', color: '#FF3D7F', titleKey: 'week8', descKey: 'week8Desc' }
  ];

  const programFeatures = [
    { titleKey: 'handsOnTitle', descKey: 'handsOnDesc', icon: 'ri-hand-heart-line', color: '#1BE7FF' },
    { titleKey: 'weeklyStructureTitle', descKey: 'weeklyStructureDesc', icon: 'ri-calendar-check-line', color: '#6C63FF' },
    { titleKey: 'customizedTitle', descKey: 'customizedDesc', icon: 'ri-focus-line', color: '#FFC145' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0B1E39] to-[#0A0F1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-[#1BE7FF]/20 rounded-full border border-[#1BE7FF]/40 mb-6">
            <span className="text-[#1BE7FF] font-semibold">{t('eduspaceBadge')}</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] bg-clip-text text-transparent">
              {t('eduspace8WeekTitle')}
            </span> {t('eduspaceJourneyTitle')}
          </h2>
          <div className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            {t('eduspaceSubtitle')}
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] mx-auto"></div>
        </div>

        {/* Weekly Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {weeklyHighlights.map((week) => (
            <div
              key={week.week}
              className="bg-[#0A0F1A]/50 rounded-xl p-6 border border-white/10 hover:border-[#1BE7FF]/50 transition-all group hover:transform hover:scale-105"
            >
              <div className="text-center">
                <div
                  className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${week.color}20` }}
                >
                  <i className={`${week.icon} text-2xl`} style={{ color: week.color }}></i>
                </div>

                <div className="text-xs font-bold mb-2 opacity-60">Week {week.week}</div>

                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t(week.titleKey)}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed">
                  {t(week.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Program Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {programFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <i className={`${feature.icon} text-2xl`} style={{ color: feature.color }}></i>
              </div>
              <h4 className="text-xl font-semibold mb-2" style={{ color: feature.color, fontFamily: 'Montserrat, sans-serif' }}>
                {t(feature.titleKey)}
              </h4>
              <p className="text-gray-300 text-sm">{t(feature.descKey)}</p>
            </div>
          ))}
        </div>

        {/* Daily Schedule Info */}
        <div className="bg-[#0A0F1A]/50 rounded-3xl p-12 border border-[#1BE7FF]/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('dailyScheduleTitle')} <span className="text-[#1BE7FF]">{t('dailyScheduleSubtitle')}</span>
            </h3>
            <p className="text-gray-300">{t('eduspaceSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1BE7FF] to-[#6C63FF] rounded-full flex items-center justify-center text-white mx-auto mb-3">
                <i className="ri-question-line text-xl"></i>
              </div>
              <h4 className="text-sm font-semibold text-[#1BE7FF] mb-1">{t('mondayShort')}</h4>
              <p className="text-gray-400 text-xs whitespace-pre-line">{t('mondayActivity')}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6C63FF] to-[#FFC145] rounded-full flex items-center justify-center text-white mx-auto mb-3">
                <i className="ri-search-line text-xl"></i>
              </div>
              <h4 className="text-sm font-semibold text-[#6C63FF] mb-1">{t('tuesdayShort')}</h4>
              <p className="text-gray-400 text-xs whitespace-pre-line">{t('tuesdayActivity')}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFC145] to-[#FF3D7F] rounded-full flex items-center justify-center text-white mx-auto mb-3">
                <i className="ri-lightbulb-line text-xl"></i>
              </div>
              <h4 className="text-sm font-semibold text-[#FFC145] mb-1">{t('wednesdayShort')}</h4>
              <p className="text-gray-400 text-xs whitespace-pre-line">{t('wednesdayActivity')}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF3D7F] to-[#1BE7FF] rounded-full flex items-center justify-center text-white mx-auto mb-3">
                <i className="ri-hammer-line text-xl"></i>
              </div>
              <h4 className="text-sm font-semibold text-[#FF3D7F] mb-1">{t('thursdayShort')}</h4>
              <p className="text-gray-400 text-xs whitespace-pre-line">{t('thursdayActivity')}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1BE7FF] to-[#6C63FF] rounded-full flex items-center justify-center text-white mx-auto mb-3">
                <i className="ri-presentation-line text-xl"></i>
              </div>
              <h4 className="text-sm font-semibold text-[#1BE7FF] mb-1">{t('fridayShort')}</h4>
              <p className="text-gray-400 text-xs whitespace-pre-line">{t('fridayActivity')}</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/curriculum"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-[#0A0F1A] font-bold text-lg rounded-full hover:shadow-xl hover:shadow-[#1BE7FF]/30 transform hover:scale-105 transition-all"
            >
              <i className="ri-book-open-line mr-2"></i>
              {t('viewFullCurriculum')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
