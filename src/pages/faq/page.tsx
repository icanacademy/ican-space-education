import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'General Information',
      questions: [
        {
          question: 'What age groups do you serve?',
          answer: 'EDUSPACE Philippines primarily serves elementary students in grades 4-5. Our curriculum is specifically designed for this age group to introduce space education and cosmic thinking in an age-appropriate and engaging way.'
        },
        {
          question: 'What is the program duration?',
          answer: 'Our flagship space education program runs for 8 weeks, with each week focusing on different aspects of space science - from Earth observation and lunar exploration to robotics, Mars missions, and spacecraft design.'
        },
        {
          question: 'Where are you located?',
          answer: 'We are located at the 11th and 16th floors of Strata 100 Building, Emerald Ave., Ortigas Center, Pasig City, Philippines.'
        },
        {
          question: 'What are your operating hours?',
          answer: 'We are open weekdays from 09:00 to 21:00 and weekends from 10:00 to 18:00. Please contact us to schedule a consultation or visit.'
        }
      ]
    },
    {
      category: 'Programs & Curriculum',
      questions: [
        {
          question: 'What programs do you offer?',
          answer: 'We offer several space education programs including: Satellite Data Literacy, Rover Design Sprint, Space Economy Simulation, Space Station Ecosystem Design, and Custom Curriculum tailored to your child\'s interests and learning goals.'
        },
        {
          question: 'What will my child learn?',
          answer: 'Students will explore topics such as Earth science and climate analysis, lunar exploration, robotics and rover design, Mars missions, spacecraft engineering, space station ecosystems, and more. Our curriculum emphasizes hands-on learning and real-world applications.'
        },
        {
          question: 'Do you offer online or in-person classes?',
          answer: 'We offer both online and in-person consultation and learning options. Please contact us to discuss which format best suits your needs.'
        },
        {
          question: 'Can the curriculum be customized?',
          answer: 'Yes! We offer custom curriculum options that can be tailored to your child\'s specific interests and learning objectives. Our professional consultants will work with you to create an optimized learning plan.'
        }
      ]
    },
    {
      category: 'Enrollment & Consultation',
      questions: [
        {
          question: 'How do I enroll my child?',
          answer: 'Start by scheduling a consultation through our Contact page. Our professional consultants will discuss your child\'s interests, learning goals, and recommend the best program for them.'
        },
        {
          question: 'What consultation options are available?',
          answer: 'We offer online consultation, visit consultation (at our office), and phone consultation. You can select your preferred time slot when you apply through our contact form.'
        },
        {
          question: 'How can I contact you?',
          answer: 'You can reach us at +632 5310 5375 (11th Floor office), email us at teachers.ican@gmail.com, or fill out the consultation form on our Contact page. We typically respond within 24 hours during business days.'
        }
      ]
    },
    {
      category: 'Learning Experience',
      questions: [
        {
          question: 'What makes ICAN different from other programs?',
          answer: 'ICAN uses cosmic thinking and space exploration as a framework for developing real-world competencies. Our curriculum emphasizes exploratory learning, hands-on projects, critical thinking, and problem-solving skills that extend beyond traditional education.'
        },
        {
          question: 'What materials or equipment are needed?',
          answer: 'Specific materials vary by program. Our consultants will provide a detailed list of required materials during your consultation. Many programs use readily available materials along with specialized learning kits that we provide.'
        },
        {
          question: 'Will my child work on real projects?',
          answer: 'Absolutely! Students complete hands-on projects such as building climate models, designing lunar bases, programming rovers, creating Mars mission plans, and developing space station ecosystems. These signature projects help students apply what they learn.'
        }
      ]
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionCounter = 0;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0A0F1A] via-[#0B1E39] to-[#0A0F1A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-[#1BE7FF]/20 rounded-full mb-6">
              <span className="text-[#1BE7FF] font-semibold">EDUSPACE Philippines</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Frequently Asked <span className="text-[#1BE7FF]">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our space education programs
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {faqs.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-2 h-8 bg-[#1BE7FF] mr-4"></div>
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((faq, qIndex) => {
                const currentIndex = questionCounter++;
                const isOpen = openIndex === currentIndex;
                return (
                  <div
                    key={qIndex}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => toggleQuestion(currentIndex)}
                      className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      <i
                        className={`ri-arrow-${isOpen ? 'up' : 'down'}-s-line text-2xl text-[#1BE7FF] flex-shrink-0`}
                      ></i>
                    </button>
                    {isOpen && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#1BE7FF]/10 to-[#6C63FF]/10 rounded-2xl p-8 text-center border border-[#1BE7FF]/20">
          <i className="ri-question-answer-line text-5xl text-[#1BE7FF] mb-4"></i>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team is here to help! Contact us for more information about our programs or to schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#1BE7FF]/25 transition-all"
            >
              Contact Us
            </Link>
            <a
              href="tel:+63253105375"
              className="inline-block px-8 py-3 border-2 border-[#1BE7FF] text-[#1BE7FF] font-semibold rounded-full hover:bg-[#1BE7FF] hover:text-white transition-all"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQPage;
