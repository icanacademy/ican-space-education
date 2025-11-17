
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './hooks/useCart';
import { FavoritesProvider } from './hooks/useFavorites';
import { AppRoutes } from './router/index';

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <CartProvider>
        <FavoritesProvider>
          <div className="min-h-screen bg-white">
            <AppRoutes />
          </div>
        </FavoritesProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
