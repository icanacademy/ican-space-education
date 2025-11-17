import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BUILDER_API_KEY, isBuilderConfigured } from '../../lib/builder';
import '../../components/builder/EditableHero'; // Import to register component
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const BuilderPage = () => {
  const location = useLocation();
  const isPreviewingInBuilder = useIsPreviewing();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      // Check if Builder.io is configured
      if (!isBuilderConfigured()) {
        setLoading(false);
        return;
      }

      try {
        const urlPath = location.pathname || '/';
        const builderContent = await builder
          .get('page', {
            userAttributes: {
              urlPath
            }
          })
          .toPromise();

        setContent(builderContent);
      } catch (error) {
        console.error('Error fetching Builder.io content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [location.pathname]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1BE7FF] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Builder.io content...</p>
        </div>
      </div>
    );
  }

  // Show setup instructions if not configured
  if (!isBuilderConfigured()) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="w-20 h-20 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-tools-line text-4xl text-white"></i>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Builder.io Setup Required
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              To use the visual editor, you need to set up your Builder.io account.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-left mb-8">
              <h3 className="font-bold text-yellow-900 mb-3 flex items-center">
                <i className="ri-information-line mr-2"></i>
                Quick Setup (5 minutes)
              </h3>
              <ol className="space-y-2 text-sm text-yellow-800 list-decimal list-inside">
                <li>Go to <a href="https://builder.io" target="_blank" rel="noopener noreferrer" className="text-[#1BE7FF] underline">https://builder.io</a> and create a free account</li>
                <li>Copy your API key from the account settings</li>
                <li>Open <code className="bg-yellow-100 px-2 py-1 rounded">.env</code> file in your project</li>
                <li>Replace <code className="bg-yellow-100 px-2 py-1 rounded">SETUP_REQUIRED</code> with your API key</li>
                <li>Restart your dev server: <code className="bg-yellow-100 px-2 py-1 rounded">npm run dev</code></li>
              </ol>
            </div>

            <div className="space-y-4">
              <a
                href="https://builder.io/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-white font-bold text-lg rounded-full hover:shadow-xl hover:shadow-[#1BE7FF]/30 transform hover:scale-105 transition-all"
              >
                <i className="ri-external-link-line mr-2"></i>
                Create Builder.io Account
              </a>

              <p className="text-sm text-gray-500">
                Read the full guide: <code className="bg-gray-100 px-2 py-1 rounded text-xs">BUILDER_SETUP_GUIDE.md</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show content not found if no Builder.io page exists
  if (!content && !isPreviewingInBuilder) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <i className="ri-edit-box-line text-6xl text-blue-500 mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No Builder.io content for this page
            </h2>
            <p className="text-gray-600 mb-6">
              Create a new page in Builder.io to start editing visually!
            </p>
            <div className="space-y-3">
              <a
                href={`https://builder.io/content?model=page`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#1BE7FF] text-white font-semibold rounded-lg hover:bg-[#1BE7FF]/90 transition-colors"
              >
                <i className="ri-add-line mr-2"></i>
                Create Page in Builder.io
              </a>
              <p className="text-sm text-gray-500">
                URL Path: <code className="bg-gray-100 px-2 py-1 rounded">{location.pathname}</code>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Render Builder.io content
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BuilderComponent model="page" content={content} />
      <Footer />
    </div>
  );
};

export default BuilderPage;
