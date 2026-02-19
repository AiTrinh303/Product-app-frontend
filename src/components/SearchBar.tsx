interface Props {
  search: string;
  onSearch: (v: string) => void;
  category: string;
  onCategory: (v: string) => void;
}

const categories = ['', 'Electronics', 'Shoes', 'Accessories', 'Kitchen'];

export const SearchBar = ({ search, onSearch, category, onCategory }: Props) => (
  <div className="search-bar">
    <div className="search-input-wrap">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
    <select
      className="category-select"
      value={category}
      onChange={(e) => onCategory(e.target.value)}
    >
      {categories.map((c) => (
        <option key={c} value={c}>{c || 'All Categories'}</option>
      ))}
    </select>
  </div>
);