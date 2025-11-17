
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const ContactPage = () => {
  const { t } = useTranslation('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Form submission logic can be added here
    alert(`${t('successMessageKo')}\n\n${t('successMessage')}`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0A0F1A] via-[#0B1E39] to-[#0A0F1A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-6 py-2 bg-[#1BE7FF]/20 rounded-full border border-[#1BE7FF]/40 mb-6">
            <span className="text-[#1BE7FF] font-semibold">{t('badge')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] bg-clip-text text-transparent">
              {t('heroTitle')}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('getInTouch')}</h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1BE7FF] to-[#6C63FF] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('addressLabel')}</h3>
                  <p className="text-gray-600">
                    {t('addressLine1')}<br />
                    {t('addressLine2')}<br />
                    {t('addressLine3')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6C63FF] to-[#FFC145] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('phoneLabel')}</h3>
                  <p className="text-gray-600">{t('phoneNumber')}</p>
                  <p className="text-sm text-gray-500 mt-1">{t('phoneNote')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFC145] to-[#FF3D7F] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('emailLabel')}</h3>
                  <p className="text-gray-600">{t('emailAddress')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF3D7F] to-[#1BE7FF] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('hoursLabel')}</h3>
                  <p className="text-gray-600">
                    {t('hoursWeekdays')}<br />
                    {t('hoursWeekends')}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('followUs')}</h3>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-facebook-fill"></i>
                </button>
                <button className="w-10 h-10 bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-twitter-fill"></i>
                </button>
                <button className="w-10 h-10 bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-instagram-fill"></i>
                </button>
                <button className="w-10 h-10 bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('formTitle')}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('nameLabel')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BE7FF] focus:border-transparent text-sm"
                  placeholder={t('namePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('emailLabel')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BE7FF] focus:border-transparent text-sm"
                  placeholder={t('emailPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('subjectLabel')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BE7FF] focus:border-transparent text-sm"
                  placeholder={t('subjectPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('messageLabel')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BE7FF] focus:border-transparent text-sm resize-none"
                  placeholder={t('messagePlaceholder')}
                />
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 {t('characterCount')}</p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-[#0A0F1A] py-4 px-6 rounded-lg hover:shadow-xl hover:shadow-[#1BE7FF]/30 transform hover:scale-105 transition-all cursor-pointer whitespace-nowrap font-bold text-lg"
              >
                <i className="ri-send-plane-line mr-2"></i>
                {t('submitButton')}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('mapTitle')} <span className="text-[#1BE7FF]">{t('mapTitleHighlight')}</span>
          </h2>
          <div className="bg-gray-100 rounded-lg overflow-hidden h-96 border-2 border-[#1BE7FF]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3227654321!2d121.0565!3d14.5858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c839c5c0f0c3%3A0x1234567890abcdef!2sStrata%20100%2C%20Emerald%20Avenue%2C%20Ortigas%20Center%2C%20Pasig%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EDUSPACE Philippines - Strata 100 Building, Ortigas Center"
            />
          </div>
          <p className="text-center text-gray-600 mt-4">
            <i className="ri-building-line text-[#1BE7FF] mr-2"></i>
            {t('mapLocation')}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
