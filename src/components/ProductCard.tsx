import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

interface Props { product: Product; }

export const ProductCard = ({ product }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!product.available) return;
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="product-card">
      {/* Image */}
      <div className="card-image-wrap">
        <img
          className="card-image"
          src={product.image}
          alt={product.name}
          onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/fallback/400/300')}
        />

        {!product.available && (
          <span className="badge-out">Out of Stock</span>
        )}

        <button
          className={`fav-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="Favorite"
        >
          <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth={2}
            style={{ color: isFavorite ? '#e74c3c' : '#9CA3AF' }}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Body */}
      <div className="card-body">
        <span className="card-category">{product.category}</span>
        <h3 className="card-name" title={product.name}>{product.name}</h3>
        <p className="card-desc">{product.description}</p>

        <div className="card-meta">
          <span className="card-price">${product.price.toLocaleString()}</span>
          <span className={`card-stock ${product.stock > 0 ? 'in-stock' : 'out-stock'}`}>
            {product.stock > 0 ? `${product.stock} left` : 'Sold out'}
          </span>
        </div>

        <div className="card-actions">
          <Link to={`/products/${product._id}`} className="btn-view">
            View Details
          </Link>
          <button
            className={`btn-cart ${added ? 'added' : ''}`}
            onClick={handleAddToCart}
            disabled={!product.available}
          >
            {!product.available ? 'Unavailable' : added ? '✓ Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};