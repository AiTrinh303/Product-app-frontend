import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const { items } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          Shop<span className="dot" />App
        </Link>

        {/* Actions */}
        <div className="navbar-actions">
          {user ? (
            <>
              <span style={{ fontSize: '0.875rem', color: 'var(--c-ink-soft)', fontWeight: 500 }}>
                Hi, {user.name}
              </span>
              <button
                onClick={logout}
                className="nav-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-btn-primary">Register</Link>
            </>
          )}

          {/* Cart */}
          <button className="cart-btn" aria-label="Cart">
            🛒
            {cartCount > 0 && (
              <span key={cartCount} className="cart-badge">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};