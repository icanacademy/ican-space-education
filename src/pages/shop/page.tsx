
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useCart } from '../../hooks/useCart';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedProducts, setAddedProducts] = useState<number[]>([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'iPad Pro M2',
      price: 1099,
      originalPrice: 1299,
      image:
        'https://readdy.ai/api/search-image?query=Modern%20sleek%20iPad%20Pro%20M2%20tablet%20computer%20with%20advanced%20display%20technology%2C%20minimalist%20design%2C%20pure%20white%20background%2C%20centered%20composition%2C%20professional%20product%20photography%20style%2C%20no%20shadows%2C%20high-tech%20aesthetic&width=400&height=400&seq=shop1&orientation=squarish',
      category: 'Tablets',
    },
    {
      id: 2,
      name: 'Dyson Supersonic',
      price: 429,
      originalPrice: 499,
      image:
        'https://readdy.ai/api/search-image?query=Futuristic%20Dyson%20Supersonic%20hair%20dryer%20with%20innovative%20design%2C%20premium%20materials%2C%20sleek%20curves%2C%20pure%20white%20background%2C%20centered%20composition%2C%20professional%20product%20photography%20style%2C%20no%20shadows%2C%20high-tech%20beauty%20device&width=400&height=400&seq=shop2&orientation=squarish',
      category: 'Hairdressing',
    },
    {
      id: 3,
      name: 'Razer RZ Camera',
      price: 899,
      originalPrice: 1099,
      image:
        'https://readdy.ai/api/search-image?query=Professional%20gaming%20brand%20camera%20with%20Razer%20aesthetic%2C%20black%20and%20green%20accents%2C%20advanced%20photography%20technology%2C%20pure%20white%20background%2C%20centered%20composition%2C%20professional%20product%20photography%20style%2C%20no%20shadows%2C%20high-tech%20camera%20equipment&width=400&height=400&seq=shop3&orientation=squarish',
      category: 'Cameras',
    },
    {
      id: 4,
      name: 'Vitamix Blender',
      price: 549,
      originalPrice: 649,
      image:
        'https://readdy.ai/api/search-image?query=High-performance%20kitchen%20blender%20with%20powerful%20motor%2C%20premium%20materials%2C%20modern%20design%2C%20stainless%20steel%20and%20black%20finish%2C%20pure%20white%20background%2C%20centered%20composition%2C%20professional%20product%20photography%20style%2C%20no%20shadows%2C%20kitchen%20appliance&width=400&height=400&seq=shop4&orientation=squarish',
      category: 'Kitchen',
    },
    {
      id: 5,
      name: 'iPhone 15 Pro',
      price: 999,
      originalPrice: 1199,
      image:
        'https://readdy.ai/api/search-image?query=Latest%20iPhone%2015%20Pro%20smartphone%20with%20titanium%20finish%2C%20advanced%20camera%20system%2C%20premium%20materials%2C%20sleek%20design%20pure%20white%20background%2C%20centered%20composition%2C%20professional%20product%20photography%20style%2C%20no%20shadows%2C%20cutting-edge%20mobile%20technology&width=400&height=400&seq=shop5&orientation=squarish',
      category: 'Phones',
    },
    {
      id: 6,
      name: 'LG 4K Monitor',
      price: 799,
      originalPrice: 999,
      image:
        'https://readdy.ai/api/search-image?query=Ultra-wide%204K%20monitor%20display%20with%20thin%20bezels%2C%20modern%20stand%2C%20professional%20grade%20screen%2C%20sleek%20black%20design%2C%20pure%20white%20background%2C%20centered%20composition%2C%20professional%20product%20photography%20style%2C%20no%20shadows%2C%20computer%20display%20technology&width=400&height=400&seq=shop6&orientation=squarish',
      category: 'Monitors',
    },
    {
      id: 7,
      name: 'MacBook Pro M3 Pro',
      price: 1999,
      originalPrice: 2299,
      image:
        'https://readdy.ai/api/search-image?query=MacBook%20Pro%20laptop%20computer%20with%20M3%20Pro%20chip%2C%20space%20gray%20aluminum%20finish%2C%20premium%20build%20quality%2C%20thin%20profile%2C%20pure%20white%20background%2C%20centered%20composition%2C%20professional%20product%20photography%20style%2C%20no%20shadows%2C%20professional%20computing%20device&width=400&height=400&seq=shop7&orientation=squarish',
      category: 'Laptops',
    },
    {
      id: 8,
      name: 'Linksys Router',
      price: 299,
      originalPrice: 399,
      image:
        'https://readdy.ai/api/search-image?query=High-speed%20WiFi%20router%20with%20multiple%20antennas%2C%20modern%20black%20design%2C%20LED%20indicators%20advanced%20networking%20technology%2C%20pure%20white%20background%2C%20centered%20composition%2C%20professional%20product%20photography%20style%2C%20no%20shadows%2C%20networking%20equipment&width=400&height=400&seq=shop8&orientation=squarish',
      category: 'Networking',
    },
  ];

  const categories = [
    'All',
    'Tablets',
    'Hairdressing',
    'Cameras',
    'Kitchen',
    'Phones',
    'Monitors',
    'Laptops',
    'Networking',
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Defensive typing for product argument
  const handleAddToCart = (product: typeof products[0]) => {
    try {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
      
      // 添加动画效果
      setAddedProducts(prev => [...prev, product.id]);
      setTimeout(() => {
        setAddedProducts(prev => prev.filter(id => id !== product.id));
      }, 1000);
    } catch (error) {
      console.error('Failed to add product to cart:', error);
      // Could show a toast/notification to the user here
    }
  };

  const handleProductClick = (productId: number) => {
    // Example navigation – adjust the route according to your router config
    try {
      navigate(`/product/${productId}`);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop All Products</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our complete collection of premium tech products and accessories
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              data-product-shop
            >
              <div className="aspect-square bg-gray-50 p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`w-full mt-4 py-2 px-4 rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap transform ${
                    addedProducts.includes(product.id)
                      ? 'bg-[#2563EB] text-white scale-95'
                      : 'bg-gray-900 text-white hover:bg-gray-800 hover:scale-105 active:scale-95'
                  }`}
                >
                  {addedProducts.includes(product.id) ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="ri-check-line text-xl"></i>
                      Added!
                    </span>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <i className="ri-shopping-bag-line text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ShopPage;
