import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearch, isLoading }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', marginBottom: '1.75rem' }}>
      <div className="cred-input-wrapper">
        <Search size={20} color="#64748B" style={{ marginRight: '0.75rem', flexShrink: 0 }} />
        <input
          type="text"
          className="cred-input"
          placeholder="Enter city name (e.g., Tokyo, London, Paris)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit" className="cred-search-btn" disabled={isLoading}>
          {isLoading ? (
            <div className="cred-spinner" style={{ width: '18px', height: '18px', borderWidth: '2px', borderColor: 'rgba(255,255,255,0.3)', borderTopColor: '#FFF' }}></div>
          ) : (
            'FETCH WEATHER'
          )}
        </button>
      </div>
    </form>
  );
}
