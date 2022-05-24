import { useContext } from 'react';
import { StoreContext } from '../../utils/StoreContext';

const Product = ({ product, addToCart }) => {
  return (
    <figure>
      <img
        src={`https://picsum.photos/seed/${product.id}/300`}
        alt={product.description}
      />
      <figcaption>
        {product.name}
        <h3>${product.price}</h3>
        <button type="button" onClick={() => addToCart(product)}>
          Add to cart
        </button>
      </figcaption>
    </figure>
  );
};

const Products = () => {
  const { products: productsList, addToCart } = useContext(StoreContext);
  return (
    <div className="products">
      {productsList.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
