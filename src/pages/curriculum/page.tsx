import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CurriculumPage = () => {
  const { t } = useTranslation('curriculum');
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);

  const weeklyTopics = [
    {
      week: 1,
      titleKey: 'week1Title',
      descriptionKey: 'week1Description',
      color: '#1BE7FF',
      icon: 'ri-earth-line',
      activities: ['week1Day1', 'week1Day2', 'week1Day3', 'week1Day4', 'week1Day5']
    },
    {
      week: 2,
      titleKey: 'week2Title',
      descriptionKey: 'week2Description',
      color: '#6C63FF',
      icon: 'ri-moon-line',
      activities: ['week2Day1', 'week2Day2', 'week2Day3', 'week2Day4', 'week2Day5']
    },
    {
      week: 3,
      titleKey: 'week3Title',
      descriptionKey: 'week3Description',
      color: '#FFC145',
      icon: 'ri-robot-2-line',
      activities: ['week3Day1', 'week3Day2', 'week3Day3', 'week3Day4', 'week3Day5']
    },
    {
      week: 4,
      titleKey: 'week4Title',
      descriptionKey: 'week4Description',
      color: '#FF3D7F',
      icon: 'ri-planet-line',
      activities: ['week4Day1', 'week4Day2', 'week4Day3', 'week4Day4', 'week4Day5']
    },
    {
      week: 5,
      titleKey: 'week5Title',
      descriptionKey: 'week5Description',
      color: '#1BE7FF',
      icon: 'ri-spaceship-line',
      activities: ['week5Day1', 'week5Day2', 'week5Day3', 'week5Day4', 'week5Day5']
    },
    {
      week: 6,
      titleKey: 'week6Title',
      descriptionKey: 'week6Description',
      color: '#6C63FF',
      icon: 'ri-star-line',
      activities: ['week6Day1', 'week6Day2', 'week6Day3', 'week6Day4', 'week6Day5']
    },
    {
      week: 7,
      titleKey: 'week7Title',
      descriptionKey: 'week7Description',
      color: '#FFC145',
      icon: 'ri-braces-line',
      activities: ['week7Day1', 'week7Day2', 'week7Day3', 'week7Day4', 'week7Day5']
    },
    {
      week: 8,
      titleKey: 'week8Title',
      descriptionKey: 'week8Description',
      color: '#FF3D7F',
      icon: 'ri-trophy-line',
      activities: ['week8Day1', 'week8Day2', 'week8Day3', 'week8Day4', 'week8Day5']
    }
  ];

  const dailySchedule = [
    {
      dayKey: 'monday',
      focusKey: 'mondayFocus',
      icon: 'ri-question-line',
      color: '#1BE7FF',
      descriptionKey: 'mondayDescription'
    },
    {
      dayKey: 'tuesday',
      focusKey: 'tuesdayFocus',
      icon: 'ri-search-line',
      color: '#6C63FF',
      descriptionKey: 'tuesdayDescription'
    },
    {
      dayKey: 'wednesday',
      focusKey: 'wednesdayFocus',
      icon: 'ri-lightbulb-line',
      color: '#FFC145',
      descriptionKey: 'wednesdayDescription'
    },
    {
      dayKey: 'thursday',
      focusKey: 'thursdayFocus',
      icon: 'ri-hammer-line',
      color: '#FF3D7F',
      descriptionKey: 'thursdayDescription'
    },
    {
      dayKey: 'friday',
      focusKey: 'fridayFocus',
      icon: 'ri-presentation-line',
      color: '#1BE7FF',
      descriptionKey: 'fridayDescription'
    }
  ];

  const programFeatures = [
    {
      titleKey: 'feature1Title',
      descriptionKey: 'feature1Description',
      icon: 'ri-hands-on-line',
      color: '#1BE7FF'
    },
    {
      titleKey: 'feature2Title',
      descriptionKey: 'feature2Description',
      icon: 'ri-team-line',
      color: '#6C63FF'
    },
    {
      titleKey: 'feature3Title',
      descriptionKey: 'feature3Description',
      icon: 'ri-file-list-3-line',
      color: '#FFC145'
    },
    {
      titleKey: 'feature4Title',
      descriptionKey: 'feature4Description',
      icon: 'ri-presentation-fill',
      color: '#FF3D7F'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0F1A] via-[#0B1E39] to-[#0A0F1A]">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#1BE7FF]/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-[#6C63FF]/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-6 py-2 bg-[#1BE7FF]/20 rounded-full border border-[#1BE7FF]/40 mb-6">
            <span className="text-[#1BE7FF] font-semibold">{t('programBadge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] bg-clip-text text-transparent">
              {t('heroTitle')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-[#1BE7FF]/20 rounded-full border border-[#1BE7FF]/40">
              <span className="text-[#1BE7FF] font-semibold"><i className="ri-user-line mr-2"></i>{t('badge1')}</span>
            </div>
            <div className="px-6 py-3 bg-[#6C63FF]/20 rounded-full border border-[#6C63FF]/40">
              <span className="text-[#6C63FF] font-semibold"><i className="ri-calendar-line mr-2"></i>{t('badge2')}</span>
            </div>
            <div className="px-6 py-3 bg-[#FFC145]/20 rounded-full border border-[#FFC145]/40">
              <span className="text-[#FFC145] font-semibold"><i className="ri-book-line mr-2"></i>{t('badge3')}</span>
            </div>
            <div className="px-6 py-3 bg-[#FF3D7F]/20 rounded-full border border-[#FF3D7F]/40">
              <span className="text-[#FF3D7F] font-semibold"><i className="ri-trophy-line mr-2"></i>{t('badge4')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('dailyScheduleTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('dailyScheduleSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {dailySchedule.map((schedule, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-gray-100 hover:border-[#1BE7FF]/50 p-6 transition-all hover:shadow-lg"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${schedule.color}20` }}
                >
                  <i className={`${schedule.icon} text-2xl`} style={{ color: schedule.color }}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t(schedule.dayKey)}
                </h3>
                <p className="text-sm font-semibold mb-3" style={{ color: schedule.color }}>
                  {t(schedule.focusKey)}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(schedule.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Topics */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('weeklyTopicsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('weeklyTopicsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeklyTopics.map((topic) => (
              <div
                key={topic.week}
                className="group bg-white rounded-xl border-2 border-gray-100 hover:border-[#1BE7FF]/50 p-6 transition-all duration-300 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedWeek(selectedWeek === topic.week ? null : topic.week)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${topic.color}20` }}
                  >
                    <i className={`${topic.icon} text-2xl`} style={{ color: topic.color }}></i>
                  </div>
                  <div className="text-sm font-bold px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                    {t('weekLabel')} {topic.week}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t(topic.titleKey)}
                </h3>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {t(topic.descriptionKey)}
                </p>

                {/* Expandable Daily Activities */}
                {selectedWeek === topic.week && (
                  <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                    <div className="text-xs font-bold text-gray-700 mb-3">{t('weeklyActivities')}</div>
                    {topic.activities.map((activityKey, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: topic.color }}
                        ></div>
                        <p className="text-xs text-gray-600">
                          {t(activityKey)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  className="mt-4 text-sm font-semibold flex items-center transition-colors"
                  style={{ color: topic.color }}
                >
                  {selectedWeek === topic.week ? t('collapse') : t('seeDetails')}
                  <i className={`ml-1 ${selectedWeek === topic.week ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('programFeaturesTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('programFeaturesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1BE7FF] to-[#6C63FF] rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform">
                  <i className={`${feature.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t(feature.titleKey)}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0F1A] via-[#0B1E39] to-[#0A0F1A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-6 py-2 bg-[#1BE7FF]/20 rounded-full border border-[#1BE7FF]/40 mb-6">
            <span className="text-[#1BE7FF] font-semibold">{t('ctaBadge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('ctaTitle')}<br />
            <span className="text-[#1BE7FF]">{t('ctaHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            {t('ctaSubtitle')}
          </p>
          <p className="text-lg text-gray-400 mb-8">
            {t('ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-[#0A0F1A] font-bold text-lg rounded-full hover:shadow-xl hover:shadow-[#1BE7FF]/30 transform hover:scale-105 transition-all"
            >
              <i className="ri-send-plane-line mr-2"></i>
              {t('ctaButton1')}
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 border-2 border-[#1BE7FF] text-[#1BE7FF] font-bold text-lg rounded-full hover:bg-[#1BE7FF] hover:text-[#0A0F1A] transition-all"
            >
              <i className="ri-gallery-line mr-2"></i>
              {t('ctaButton2')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CurriculumPage;
