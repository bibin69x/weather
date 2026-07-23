import React from 'react';
import { TOP_CITIES } from '../utils/weatherMood';

export default function CityChips({ activeCity, onSelectCity }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.85rem'
      }}>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: '700',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#64748B'
        }}>
          Popular Destinations
        </span>
        <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 500 }}>
          Quick Select
        </span>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.65rem'
      }}>
        {TOP_CITIES.map((cityName) => {
          const isActive = activeCity && activeCity.toLowerCase() === cityName.toLowerCase();
          return (
            <button
              key={cityName}
              onClick={() => onSelectCity(cityName)}
              className={`cred-chip ${isActive ? 'active' : ''}`}
            >
              <span>{cityName}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
