import { TinaCMS } from 'tinacms';
import { TinaProvider } from 'tinacms/dist/react';
import { useEffect } from 'react';

const AdminPage = () => {
  useEffect(() => {
    // Load TinaCMS admin interface
    const loadTina = async () => {
      const { default: TinaCMSConfig } = await import('../../../tina/config');
      const cms = new TinaCMS({
        enabled: true,
        sidebar: true,
      });

      // You can configure more CMS options here
      return cms;
    };

    loadTina();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-lg shadow-lg p-12">
          <div className="w-20 h-20 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-edit-line text-4xl text-white"></i>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            TinaCMS Editor
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Visual content editing is being set up. To start editing:
          </p>

          <div className="space-y-4 text-left bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#1BE7FF] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-gray-900">Navigate to your homepage</p>
                <p className="text-sm text-gray-600">Go to <a href="/" className="text-[#1BE7FF] underline">http://localhost:3000/</a></p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#1BE7FF] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-gray-900">Edit content directly</p>
                <p className="text-sm text-gray-600">You can now edit <code className="bg-gray-200 px-2 py-1 rounded">content/home.json</code> to change the Hero section</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#1BE7FF] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-gray-900">Full TinaCMS setup (optional)</p>
                <p className="text-sm text-gray-600">Run <code className="bg-gray-200 px-2 py-1 rounded">npm run dev</code> to start the dev server</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="/"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-white font-bold text-lg rounded-full hover:shadow-xl hover:shadow-[#1BE7FF]/30 transform hover:scale-105 transition-all"
            >
              <i className="ri-home-line mr-2"></i>
              Go to Homepage
            </a>

            <p className="text-sm text-gray-500 mt-6">
              Content location: <code className="bg-gray-100 px-2 py-1 rounded text-xs">content/home.json</code>
            </p>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
          <h3 className="font-bold text-blue-900 mb-3 flex items-center">
            <i className="ri-information-line mr-2"></i>
            How to Edit Content
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>• <strong>Quick Edit:</strong> Modify <code className="bg-blue-100 px-1 rounded">content/home.json</code> directly in your code editor</li>
            <li>• <strong>File Location:</strong> All editable content is in the <code className="bg-blue-100 px-1 rounded">/content</code> folder</li>
            <li>• <strong>Changes Reflect Immediately:</strong> Save the file and refresh your browser to see updates</li>
            <li>• <strong>What You Can Edit:</strong> Titles, descriptions, button text, images, statistics, and more</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
