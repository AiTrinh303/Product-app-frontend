export const LoadingSpinner = () => (
  <div className="spinner-wrap">
    <div className="spinner" />
    <span className="spinner-label">Loading products...</span>
  </div>
);

export const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton skeleton-image" />
    <div className="skeleton-body">
      <div className="skeleton" style={{ height: 12, width: '40%' }} />
      <div className="skeleton" style={{ height: 18, width: '80%' }} />
      <div className="skeleton" style={{ height: 12, width: '100%' }} />
      <div className="skeleton" style={{ height: 12, width: '70%' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
        <div className="skeleton" style={{ height: 24, width: '35%' }} />
        <div className="skeleton" style={{ height: 24, width: '30%', borderRadius: 999 }} />
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <div className="skeleton" style={{ height: 38, flex: 1, borderRadius: 10 }} />
        <div className="skeleton" style={{ height: 38, flex: 1, borderRadius: 10 }} />
      </div>
    </div>
  </div>
);