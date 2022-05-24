import { createContext, useMemo, useState } from 'react';
import { products } from './productsList';

export const StoreContext = createContext();

const calculateCartTotal = cartItems => {
  return Object.values(cartItems).reduce((acc, { total }) => acc + total, 0);
};

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const cartTotal = useMemo(() => calculateCartTotal(cartItems), [cartItems]);

  const addToCart = product => {
    const quantity = (cartItems[product.id]?.quantity ?? 0) + 1;
    const updatedProduct = {
      ...product,
      total: quantity * product.price,
      quantity,
    };
    setCartItems(oldCartItems => ({
      ...oldCartItems,
      [product.id]: updatedProduct,
    }));
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        cartTotal,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
