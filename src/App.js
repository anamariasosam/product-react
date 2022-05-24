import Cart from './components/cart/Cart';
import Products from './components/products/Products';
import { StoreProvider } from './utils/StoreContext';
import './App.css';

function App() {
  return (
    <StoreProvider>
      <Products />
      <Cart />
    </StoreProvider>
  );
}

export default App;
