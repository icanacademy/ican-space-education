import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0A0F1A] via-[#0B1E39] to-[#0A0F1A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Privacy <span className="text-[#1BE7FF]">Policy</span>
            </h1>
            <p className="text-gray-300">
              Last Updated: November 2024
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#1BE7FF] mr-4"></div>
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ICAN Space Education ("we," "our," or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#6C63FF] mr-4"></div>
              Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you apply for consultation or enroll in our programs, we may collect:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
              <li>Parent/Guardian name and contact information</li>
              <li>Student name and age</li>
              <li>Email address and phone number</li>
              <li>Areas of interest and educational background</li>
              <li>Preferred consultation method and time</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>IP address</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#FFC145] mr-4"></div>
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>To provide and improve our educational services</li>
              <li>To schedule and conduct consultations</li>
              <li>To communicate with you about our programs</li>
              <li>To customize our curriculum to your child's needs</li>
              <li>To send updates, newsletters, and educational resources (with your consent)</li>
              <li>To analyze and improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* Data Protection for Minors */}
          <section className="mb-12 bg-[#1BE7FF]/10 p-6 rounded-lg border border-[#1BE7FF]/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <i className="ri-shield-user-line text-3xl text-[#1BE7FF] mr-3"></i>
              Protection of Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to protecting the privacy of children. Our services are designed for elementary students, and we take special care to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Only collect information with parental consent</li>
              <li>Limit data collection to what is necessary for educational purposes</li>
              <li>Never share children's information with third parties for marketing</li>
              <li>Maintain strict security measures to protect student data</li>
              <li>Allow parents to review and request deletion of their child's information</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#FF3D7F] mr-4"></div>
              Information Sharing and Disclosure
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our website and services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of all or a portion of our business</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#1BE7FF] mr-4"></div>
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#6C63FF] mr-4"></div>
              Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Object to processing of your personal information</li>
              <li>Request a copy of your personal information</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#FFC145] mr-4"></div>
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookies through your browser settings.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#FF3D7F] mr-4"></div>
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12 bg-gradient-to-r from-[#1BE7FF]/10 to-[#6C63FF]/10 p-8 rounded-2xl border border-[#1BE7FF]/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <i className="ri-mail-line text-3xl text-[#1BE7FF] mr-3"></i>
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>ICAN Space Education</strong></p>
              <p>11F and 16F Strata 100 Building</p>
              <p>Emerald Ave., Ortigas Center</p>
              <p>Pasig City, Philippines</p>
              <p className="mt-4">
                <strong>Email:</strong> <a href="mailto:teachers.ican@gmail.com" className="text-[#1BE7FF] hover:underline">teachers.ican@gmail.com</a>
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+63253105375" className="text-[#1BE7FF] hover:underline">+632 5310 5375</a>
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#1BE7FF]/25 transition-all"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
