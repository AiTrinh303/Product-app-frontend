import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { SkeletonCard } from '../components/LoadingSpinner';

export const HomePage = () => {
  const {
    products, loading, error,
    total, search, setSearch,
    category, setCategory, refetch
  } = useProducts();

  return (
    <>
      {/* Header */}
      <div className="page-header">
        <h1>Our Products</h1>
        <p>{loading ? 'Loading...' : `${total} product${total !== 1 ? 's' : ''} found`}</p>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <SearchBar
          search={search}
          onSearch={setSearch}
          category={category}
          onCategory={setCategory}
        />
      </div>

      {/* States */}
      {error && (
        <div className="error-box" style={{ margin: '2rem auto' }}>
          <div className="error-icon">⚠️</div>
          <h3>Something went wrong</h3>
          <p>{error}</p>
          <button className="btn-retry" onClick={refetch}>Try again</button>
        </div>
      )}

      {/* Skeleton loading */}
      {loading && (
        <div className="product-grid">
          {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      )}

      {/* Empty */}
      {!loading && !error && products.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🛍️</div>
          <h3>No products found</h3>
          <p>Try adjusting your search or filter.</p>
        </div>
      )}

      {/* Grid */}
      {!loading && !error && products.length > 0 && (
        <div className="product-grid">
          {products.map((p) => <ProductCard key={p._id} product={p} />)}
        </div>
      )}
    </>
  );
};