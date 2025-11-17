
import { useTranslation } from 'react-i18next';

const ConsultationFormSection = () => {
  const { t } = useTranslation('common');

  return (
    <section id="consultation-form" className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F1A] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('consultationTitle')} <span className="text-[#1BE7FF]">{t('consultationHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            {t('consultationDescription')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form 
            id="consultation-form-element"
            data-readdy-form
            action="https://readdy.ai/api/form/d44ngckkal0v4krbmcq0"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="parent_name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('parentNameRequired')}
                </label>
                <input
                  type="text"
                  id="parent_name"
                  name="parent_name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1BE7FF] focus:border-transparent text-sm"
                  placeholder={t('parentNamePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('phoneRequired')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1BE7FF] focus:border-transparent text-sm"
                  placeholder={t('phonePlaceholder')}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="student_name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('studentNameRequired')}
                </label>
                <input
                  type="text"
                  id="student_name"
                  name="student_name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1BE7FF] focus:border-transparent text-sm"
                  placeholder={t('studentNamePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="student_age" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('studentAgeRequired')}
                </label>
                <select
                  id="student_age"
                  name="student_age"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1BE7FF] focus:border-transparent text-sm pr-8"
                >
                  <option value="">{t('studentAgePlaceholder')}</option>
                  <option value="8-10">{t('age8to10')}</option>
                  <option value="11-13">{t('age11to13')}</option>
                  <option value="14-16">{t('age14to16')}</option>
                  <option value="17-19">{t('age17to19')}</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1BE7FF] focus:border-transparent text-sm"
                placeholder={t('emailPlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="interests" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('interests')}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="interests" value={t('dataAnalysis')} className="text-[#1BE7FF] focus:ring-[#1BE7FF]" />
                  <span className="text-sm">{t('dataAnalysis')}</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="interests" value={t('robotics')} className="text-[#1BE7FF] focus:ring-[#1BE7FF]" />
                  <span className="text-sm">{t('robotics')}</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="interests" value={t('programming')} className="text-[#1BE7FF] focus:ring-[#1BE7FF]" />
                  <span className="text-sm">{t('programming')}</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="interests" value={t('spaceScience')} className="text-[#1BE7FF] focus:ring-[#1BE7FF]" />
                  <span className="text-sm">{t('spaceScience')}</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="interests" value={t('environmentalEngineering')} className="text-[#1BE7FF] focus:ring-[#1BE7FF]" />
                  <span className="text-sm">{t('environmentalEngineering')}</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="interests" value={t('design')} className="text-[#1BE7FF] focus:ring-[#1BE7FF]" />
                  <span className="text-sm">{t('design')}</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="consultation_type" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('consultationTypeRequired')}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="consultation_type" value={t('onlineConsultation')} required className="text-[#1BE7FF] focus:ring-[#1BE7FF]" />
                  <span className="text-sm">{t('onlineConsultation')}</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="consultation_type" value={t('visitConsultation')} required className="text-[#1BE7FF] focus:ring-[#1BE7FF]" />
                  <span className="text-sm">{t('visitConsultation')}</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="consultation_type" value={t('phoneConsultation')} required className="text-[#1BE7FF] focus:ring-[#1BE7FF]" />
                  <span className="text-sm">{t('phoneConsultation')}</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="preferred_time" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('preferredTime')}
              </label>
              <select
                id="preferred_time"
                name="preferred_time"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1BE7FF] focus:border-transparent text-sm pr-8"
              >
                <option value="">{t('preferredTimePlaceholder')}</option>
                <option value={t('weekdayMorning')}>{t('weekdayMorning')}</option>
                <option value={t('weekdayAfternoon')}>{t('weekdayAfternoon')}</option>
                <option value={t('weekdayEvening')}>{t('weekdayEvening')}</option>
                <option value={t('weekendMorning')}>{t('weekendMorning')}</option>
                <option value={t('weekendAfternoon')}>{t('weekendAfternoon')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('additionalMessage')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1BE7FF] focus:border-transparent text-sm resize-none"
                placeholder={t('messagePlaceholder')}
              ></textarea>
              <div className="text-xs text-gray-500 mt-1">{t('characterCount')}</div>
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="privacy_agree"
                name="privacy_agree"
                required
                className="mt-1 text-[#1BE7FF] focus:ring-[#1BE7FF]"
              />
              <label htmlFor="privacy_agree" className="text-sm text-gray-600 cursor-pointer">
                {t('privacyAgreement')}
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-white font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-[#1BE7FF]/25 transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-send-plane-line mr-2"></i>
              {t('submitConsultation')}
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-[#1BE7FF] rounded-full flex items-center justify-center">
                <i className="ri-phone-line text-white text-xl"></i>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">{t('phoneConsultationLabel')}</div>
                <div className="text-gray-600 text-sm">{t('phone')}</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-[#6C63FF] rounded-full flex items-center justify-center">
                <i className="ri-mail-line text-white text-xl"></i>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">{t('emailInquiry')}</div>
                <div className="text-gray-600 text-sm">{t('email')}</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-[#FFC145] rounded-full flex items-center justify-center">
                <i className="ri-time-line text-[#0A0F1A] text-xl"></i>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">{t('consultationHours')}</div>
                <div className="text-gray-600 text-sm">{t('consultationHoursTime')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationFormSection;
