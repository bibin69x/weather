import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CityChips from './components/CityChips';
import WeatherMoodCard from './components/WeatherMoodCard';
import WeatherDetails from './components/WeatherDetails';
import JsonViewer from './components/JsonViewer';
import { useWeather } from './hooks/useWeather';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function App() {
  const { city, weatherData, loading, error, searchCity } = useWeather('London');

  return (
    <div className="cred-container">
      <Header />

      <main>
        {/* Search Input Bar */}
        <SearchBar onSearch={searchCity} isLoading={loading} />

        {/* 10 Top City Chips */}
        <CityChips activeCity={city} onSelectCity={searchCity} />

        {/* Error Alert Display */}
        {error && (
          <div className="cred-card" style={{
            padding: '1.5rem 2rem',
            marginBottom: '2rem',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            background: 'linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'rgba(239, 68, 68, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#DC2626',
              flexShrink: 0
            }}>
              <AlertCircle size={22} />
            </div>
            <div style={{ flex: 1 }}>
              <h4 className="font-heading" style={{ fontSize: '1rem', fontWeight: 800, color: '#991B1B' }}>
                Unable to Retrieve Weather Data
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#B91C1C', marginTop: '2px' }}>
                {error}
              </p>
            </div>
            <button
              onClick={() => searchCity(city || 'London')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1rem',
                background: '#991B1B',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <RefreshCw size={14} />
              RETRY
            </button>
          </div>
        )}

        {/* Loading Skeleton */}
        {loading && !weatherData && (
          <div className="cred-card" style={{ padding: '3rem 2rem', textAlign: 'center', marginBottom: '2rem' }}>
            <div className="cred-spinner" style={{ margin: '0 auto 1rem', width: '36px', height: '36px', borderWidth: '3px' }}></div>
            <p style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600 }}>
              Fetching real-time atmospheric data for <strong style={{ color: '#0F172A' }}>{city}</strong>...
            </p>
          </div>
        )}

        {/* Main Weather Visual Card */}
        {weatherData && <WeatherMoodCard weatherData={weatherData} />}

        {/* Extended Telemetry Grid */}
        {weatherData && <WeatherDetails weatherData={weatherData} />}

        {/* Formatted Raw JSON Viewer */}
        {weatherData && (
          <JsonViewer rawData={weatherData.rawResponse || weatherData} />
        )}
      </main>

      <footer style={{
        marginTop: '4rem',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        textAlign: 'center',
        color: '#94A3B8',
        fontSize: '0.8rem',
        fontWeight: 500
      }}>
        Weather Intelligence • Bibin's Light Experience • Data provided by WeatherAPI
      </footer>
    </div>
  );
}
