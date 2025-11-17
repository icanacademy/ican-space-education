import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const { t } = useTranslation('projects');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'All', labelKey: 'categoryAll' },
    { id: 'Earth Science', labelKey: 'categoryEarthScience' },
    { id: 'Moon', labelKey: 'categoryMoon' },
    { id: 'Rovers', labelKey: 'categoryRovers' },
    { id: 'Mars', labelKey: 'categoryMars' },
    { id: 'Space Life', labelKey: 'categorySpaceLife' },
    { id: 'Stars', labelKey: 'categoryStars' },
    { id: 'AI', labelKey: 'categoryAI' }
  ];

  const projects = [
    {
      id: 1,
      titleKey: 'project1Title',
      category: 'Earth Science',
      studentsKey: 'project1Students',
      descriptionKey: 'project1Description',
      achievementKey: 'project1Achievement',
      image: 'https://readdy.ai/api/search-image?query=elementary%20students%20presenting%20earth%20climate%20model%20with%20diagrams&width=600&height=400&seq=project1&orientation=landscape',
      tagsKeys: ['project1Tag1', 'project1Tag2', 'project1Tag3'],
      color: '#1BE7FF'
    },
    {
      id: 2,
      titleKey: 'project2Title',
      category: 'Moon',
      studentsKey: 'project2Students',
      descriptionKey: 'project2Description',
      achievementKey: 'project2Achievement',
      image: 'https://readdy.ai/api/search-image?query=elementary%20students%20building%20moon%20base%20model&width=600&height=400&seq=project2&orientation=landscape',
      tagsKeys: ['project2Tag1', 'project2Tag2', 'project2Tag3'],
      color: '#6C63FF'
    },
    {
      id: 3,
      titleKey: 'project3Title',
      category: 'Rovers',
      studentsKey: 'project3Students',
      descriptionKey: 'project3Description',
      achievementKey: 'project3Achievement',
      image: 'https://readdy.ai/api/search-image?query=elementary%20students%20building%20mars%20rover%20robot&width=600&height=400&seq=project3&orientation=landscape',
      tagsKeys: ['project3Tag1', 'project3Tag2', 'project3Tag3'],
      color: '#FFC145'
    },
    {
      id: 4,
      titleKey: 'project4Title',
      category: 'Mars',
      studentsKey: 'project4Students',
      descriptionKey: 'project4Description',
      achievementKey: 'project4Achievement',
      image: 'https://readdy.ai/api/search-image?query=elementary%20students%20presenting%20mars%20survival%20plan%20with%20posters&width=600&height=400&seq=project4&orientation=landscape',
      tagsKeys: ['project4Tag1', 'project4Tag2', 'project4Tag3'],
      color: '#FF3D7F'
    },
    {
      id: 5,
      titleKey: 'project5Title',
      category: 'Space Life',
      studentsKey: 'project5Students',
      descriptionKey: 'project5Description',
      achievementKey: 'project5Achievement',
      image: 'https://readdy.ai/api/search-image?query=elementary%20students%20designing%20space%20food%20system&width=600&height=400&seq=project5&orientation=landscape',
      tagsKeys: ['project5Tag1', 'project5Tag2', 'project5Tag3'],
      color: '#1BE7FF'
    },
    {
      id: 6,
      titleKey: 'project6Title',
      category: 'Stars',
      studentsKey: 'project6Students',
      descriptionKey: 'project6Description',
      achievementKey: 'project6Achievement',
      image: 'https://readdy.ai/api/search-image?query=elementary%20students%20drawing%20constellation%20map%20with%20stars&width=600&height=400&seq=project6&orientation=landscape',
      tagsKeys: ['project6Tag1', 'project6Tag2', 'project6Tag3'],
      color: '#6C63FF'
    },
    {
      id: 7,
      titleKey: 'project7Title',
      category: 'AI',
      studentsKey: 'project7Students',
      descriptionKey: 'project7Description',
      achievementKey: 'project7Achievement',
      image: 'https://readdy.ai/api/search-image?query=elementary%20students%20using%20computers%20with%20AI%20programs&width=600&height=400&seq=project7&orientation=landscape',
      tagsKeys: ['project7Tag1', 'project7Tag2', 'project7Tag3'],
      color: '#FFC145'
    },
    {
      id: 8,
      titleKey: 'project8Title',
      category: 'Mars',
      studentsKey: 'project8Students',
      descriptionKey: 'project8Description',
      achievementKey: 'project8Achievement',
      image: 'https://readdy.ai/api/search-image?query=elementary%20students%20presenting%20final%20space%20project&width=600&height=400&seq=project8&orientation=landscape',
      tagsKeys: ['project8Tag1', 'project8Tag2', 'project8Tag3'],
      color: '#FF3D7F'
    }
  ];

  const testimonials = [
    {
      nameKey: 'testimonial1Name',
      gradeKey: 'testimonial1Grade',
      projectKey: 'testimonial1Project',
      quoteKey: 'testimonial1Quote',
      image: 'https://ui-avatars.com/api/?name=김서준&background=1BE7FF&color=fff&size=80'
    },
    {
      nameKey: 'testimonial2Name',
      gradeKey: 'testimonial2Grade',
      projectKey: 'testimonial2Project',
      quoteKey: 'testimonial2Quote',
      image: 'https://ui-avatars.com/api/?name=박지우&background=6C63FF&color=fff&size=80'
    },
    {
      nameKey: 'testimonial3Name',
      gradeKey: 'testimonial3Grade',
      projectKey: 'testimonial3Project',
      quoteKey: 'testimonial3Quote',
      image: 'https://ui-avatars.com/api/?name=이하은&background=FFC145&color=0A0F1A&size=80'
    }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0F1A] via-[#0B1E39] to-[#0A0F1A]">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#1BE7FF]/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-[#6C63FF]/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              <span className="text-[#1BE7FF] font-semibold">{t('badge1')}</span>
            </div>
            <div className="px-6 py-3 bg-[#6C63FF]/20 rounded-full border border-[#6C63FF]/40">
              <span className="text-[#6C63FF] font-semibold">{t('badge2')}</span>
            </div>
            <div className="px-6 py-3 bg-[#FFC145]/20 rounded-full border border-[#FFC145]/40">
              <span className="text-[#FFC145] font-semibold">{t('badge3')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#1BE7FF]'
                }`}
              >
                {t(category.labelKey)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden border-2 border-gray-100 hover:border-[#1BE7FF]/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className="absolute top-4 right-4 px-4 py-2 rounded-full text-white text-sm font-semibold"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{t(project.studentsKey)}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t(project.descriptionKey)}
                  </p>

                  {/* Achievement */}
                  <div className="flex items-center space-x-2 mb-4 p-3 bg-gray-50 rounded-lg">
                    <i className="ri-trophy-line text-[#FFC145]"></i>
                    <span className="text-sm text-gray-700">{t(project.achievementKey)}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tagsKeys.map((tagKey, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600"
                      >
                        {t(tagKey)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('testimonialsTitle')} <span className="text-[#1BE7FF]">{t('testimonialsTitleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-600">
              {t('testimonialsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={t(testimonial.nameKey)}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{t(testimonial.nameKey)}</div>
                    <div className="text-sm text-gray-500">{t(testimonial.gradeKey)}</div>
                  </div>
                </div>
                <div className="text-sm text-[#1BE7FF] mb-3 font-semibold">{t(testimonial.projectKey)}</div>
                <p className="text-gray-600 italic leading-relaxed">
                  "{t(testimonial.quoteKey)}"
                </p>
                <div className="flex text-[#FFC145] mt-4">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <i className="ri-rocket-line mr-2"></i>
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

export default ProjectsPage;
