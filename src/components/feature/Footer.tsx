
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-[#0A0F1A] via-[#0B1E39] to-[#0A0F1A] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-rocket-line text-2xl text-[#1BE7FF]"></i>
              </div>
              <div className="text-3xl font-bold text-[#1BE7FF]" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t('common:companyName')}</div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('common:companyDescription')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#1BE7FF]/20 hover:bg-[#1BE7FF] rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-youtube-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#1BE7FF]/20 hover:bg-[#1BE7FF] rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#1BE7FF]/20 hover:bg-[#1BE7FF] rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#1BE7FF]/20 hover:bg-[#1BE7FF] rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-kakao-talk-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t('common:programs')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#1BE7FF] transition-colors cursor-pointer">{t('home:satelliteDataLiteracy')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#1BE7FF] transition-colors cursor-pointer">{t('home:roverDesignSprint')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#1BE7FF] transition-colors cursor-pointer">{t('home:spaceEconomySimulation')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#1BE7FF] transition-colors cursor-pointer">{t('home:spaceStationEcosystem')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#1BE7FF] transition-colors cursor-pointer">{t('home:customCurriculum')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t('common:support')}</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-300 hover:text-[#1BE7FF] transition-colors cursor-pointer">{t('common:consultation')}</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-[#1BE7FF] transition-colors cursor-pointer">{t('home:learningGuide')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#1BE7FF] transition-colors cursor-pointer">{t('home:parentReviews')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#1BE7FF] transition-colors cursor-pointer">{t('home:faq')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#1BE7FF] transition-colors cursor-pointer">{t('home:technicalSupport')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t('common:contactInfo')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-[#1BE7FF] mt-1"></i>
                <div className="text-gray-300 text-sm whitespace-pre-line">
                  {t('common:address')}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-[#1BE7FF]"></i>
                <a href={`tel:${t('common:phone')}`} className="text-gray-300 hover:text-[#1BE7FF] transition-colors cursor-pointer text-sm">
                  {t('common:phone')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-[#1BE7FF]"></i>
                <a href={`mailto:${t('common:email')}`} className="text-gray-300 hover:text-[#1BE7FF] transition-colors cursor-pointer text-sm">
                  {t('common:email')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-time-line text-[#1BE7FF]"></i>
                <div className="text-gray-300 text-sm whitespace-pre-line">
                  {t('common:businessHours')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1BE7FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center lg:text-left">
              {t('common:copyright')}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-[#1BE7FF] transition-colors cursor-pointer">{t('common:privacyPolicy')}</a>
              <a href="#" className="text-gray-300 hover:text-[#1BE7FF] transition-colors cursor-pointer">{t('common:termsOfService')}</a>
              <a href="#" className="text-gray-300 hover:text-[#1BE7FF] transition-colors cursor-pointer">{t('common:educationPolicy')}</a>
              <a href="https://readdy.ai/?origin=logo" className="text-gray-300 hover:text-[#1BE7FF] transition-colors cursor-pointer">{t('common:poweredBy')}</a>
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm mr-2">{t('common:certifications')}</span>
              <div className="flex gap-2">
                <div className="w-8 h-6 bg-[#1BE7FF]/20 rounded flex items-center justify-center">
                  <i className="ri-award-line text-[#1BE7FF] text-xs"></i>
                </div>
                <div className="w-8 h-6 bg-[#6C63FF]/20 rounded flex items-center justify-center">
                  <i className="ri-shield-check-line text-[#6C63FF] text-xs"></i>
                </div>
                <div className="w-8 h-6 bg-[#FFC145]/20 rounded flex items-center justify-center">
                  <i className="ri-medal-line text-[#FFC145] text-xs"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-6 border-t border-[#1BE7FF]/10">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <i className="ri-shield-check-line text-[#1BE7FF]"></i>
                <span>{t('common:safeEnvironment')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <i className="ri-customer-service-line text-[#6C63FF]"></i>
                <span>{t('common:professionalConsultants')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <i className="ri-award-line text-[#FFC145]"></i>
                <span>{t('common:certifiedProgram')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <i className="ri-global-line text-[#FF3D7F]"></i>
                <span>{t('common:internationalStandard')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
