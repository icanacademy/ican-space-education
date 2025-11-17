import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0A0F1A] via-[#0B1E39] to-[#0A0F1A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Terms of <span className="text-[#1BE7FF]">Service</span>
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
              Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to ICAN Space Education. These Terms of Service ("Terms") govern your use of our website and educational services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree to these Terms, please do not use our services.
            </p>
          </section>

          {/* Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#6C63FF] mr-4"></div>
              Our Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ICAN Space Education provides:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Space education programs for elementary students (grades 4-5)</li>
              <li>Educational consultations and program planning</li>
              <li>Curriculum including Satellite Data Literacy, Rover Design, Space Economy Simulation, and more</li>
              <li>Custom curriculum tailored to individual student needs</li>
              <li>Both online and in-person educational services</li>
            </ul>
          </section>

          {/* Enrollment */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#FFC145] mr-4"></div>
              Enrollment and Participation
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Eligibility</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our programs are designed for elementary students in grades 4-5. Parent or legal guardian consent is required for enrollment.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Enrollment Process</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Enrollment requires:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Completion of consultation form with accurate information</li>
              <li>Attendance at a consultation session</li>
              <li>Agreement to program terms and payment of applicable fees</li>
              <li>Parental consent for student participation</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Responsibilities</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Students are expected to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Attend scheduled sessions and complete assigned projects</li>
              <li>Treat instructors, staff, and fellow students with respect</li>
              <li>Use learning materials appropriately and safely</li>
              <li>Follow program guidelines and safety protocols</li>
            </ul>
          </section>

          {/* Payment and Fees */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#FF3D7F] mr-4"></div>
              Payment and Fees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Program fees and payment terms will be communicated during your consultation. Please note:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Fees vary by program and are determined during consultation</li>
              <li>Payment terms and schedules will be clearly outlined</li>
              <li>Refund policies will be explained at enrollment</li>
              <li>Additional materials or equipment may incur separate costs</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#1BE7FF] mr-4"></div>
              Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All curriculum materials, educational content, and learning resources provided by ICAN Space Education are protected by copyright and intellectual property laws. You may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Reproduce or distribute our materials without permission</li>
              <li>Use our content for commercial purposes</li>
              <li>Modify or create derivative works from our curriculum</li>
              <li>Remove copyright or proprietary notices</li>
            </ul>
          </section>

          {/* Code of Conduct */}
          <section className="mb-12 bg-[#1BE7FF]/10 p-6 rounded-lg border border-[#1BE7FF]/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <i className="ri-shield-check-line text-3xl text-[#1BE7FF] mr-3"></i>
              Code of Conduct
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We maintain a safe, respectful, and inclusive learning environment. The following behaviors are prohibited:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Harassment, bullying, or discrimination of any kind</li>
              <li>Disruptive behavior that interferes with learning</li>
              <li>Misuse of learning materials or equipment</li>
              <li>Violation of safety protocols</li>
              <li>Any illegal or inappropriate conduct</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Violation of our code of conduct may result in suspension or termination from the program.
            </p>
          </section>

          {/* Cancellation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#6C63FF] mr-4"></div>
              Cancellation and Withdrawal
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>By Students/Parents:</strong> You may withdraw from a program by providing written notice. Refund eligibility will be determined based on the timing of withdrawal and program policies discussed during enrollment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>By ICAN:</strong> We reserve the right to cancel programs due to insufficient enrollment, instructor availability, or unforeseen circumstances. In such cases, enrolled students will receive a full refund or transfer to another program.
            </p>
          </section>

          {/* Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#FFC145] mr-4"></div>
              Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we take every precaution to ensure student safety and program quality:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>We are not liable for injuries resulting from student negligence or failure to follow instructions</li>
              <li>We are not responsible for loss or damage to personal property</li>
              <li>We cannot guarantee specific educational outcomes or results</li>
              <li>Our liability is limited to the fees paid for the program</li>
            </ul>
          </section>

          {/* Website Use */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#FF3D7F] mr-4"></div>
              Website Use
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Use automated systems to access the website without permission</li>
              <li>Transmit viruses or malicious code</li>
              <li>Collect user information without consent</li>
            </ul>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#1BE7FF] mr-4"></div>
              Changes to These Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-[#6C63FF] mr-4"></div>
              Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of the Philippines. Any disputes arising from these Terms or our services will be resolved in the courts of Pasig City, Philippines.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12 bg-gradient-to-r from-[#1BE7FF]/10 to-[#6C63FF]/10 p-8 rounded-2xl border border-[#1BE7FF]/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <i className="ri-customer-service-line text-3xl text-[#1BE7FF] mr-3"></i>
              Questions About These Terms?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfServicePage;
