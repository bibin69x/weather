import React from 'react';
import { getWeatherMood } from '../utils/weatherMood';
import { Droplets, Wind, Globe, Compass } from 'lucide-react';

export default function WeatherMoodCard({ weatherData }) {
  if (!weatherData || !weatherData.location || !weatherData.current) return null;

  const { location, current } = weatherData;
  const mood = getWeatherMood(current.condition?.text, current.is_day);

  return (
    <div
      className="cred-card"
      style={{
        background: mood.gradientBg,
        border: `1px solid ${mood.cardBorder}`,
        boxShadow: mood.glowShadow,
        padding: '2.5rem 2rem',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Weather Mood Animated Layers */}
      {mood.bgPattern === 'sunburst' && <div className="mood-sun-shine" />}
      {mood.bgPattern === 'clouds' && <div className="mood-cloud-layer" />}
      {mood.bgPattern === 'raindrops' && <div className="mood-rain-layer" />}

      {/* Header Info: Mood Badge & Country */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.75rem',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div className="cred-badge" style={{ background: mood.badgeBg, color: mood.badgeText }}>
            <span>{mood.iconEmoji}</span>
            <span>{mood.title}</span>
          </div>
          <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>
            • {current.condition?.text}
          </span>
        </div>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#475569',
          background: 'rgba(255, 255, 255, 0.7)',
          padding: '0.35rem 0.85rem',
          borderRadius: '9999px',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(0,0,0,0.06)'
        }}>
          <Globe size={15} color="#475569" />
          <span>{location.country}</span>
        </div>
      </div>

      {/* Main Temperature & City Display */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        alignItems: 'center',
        marginBottom: '2.5rem',
        position: 'relative',
        zIndex: 2
      }}>
        <div>
          <h2 className="font-heading" style={{
            fontSize: '2.75rem',
            fontWeight: '800',
            letterSpacing: '-0.03em',
            color: '#0F172A',
            lineHeight: 1.05,
            marginBottom: '0.4rem'
          }}>
            {location.name}
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#475569', fontWeight: 500 }}>
            {location.region ? `${location.region}, ` : ''}{location.country}
          </p>
        </div>

        {/* Temperature Display in °C */}
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'flex-start',
          gap: '0.5rem'
        }}>
          <span className="font-heading" style={{
            fontSize: '5.5rem',
            fontWeight: '800',
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
            color: '#0F172A'
          }}>
            {Math.round(current.temp_c)}
          </span>
          <span className="font-heading" style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: mood.accentColor
          }}>
            °C
          </span>

          {current.condition?.icon && (
            <img
              src={`https:${current.condition.icon}`}
              alt={current.condition.text}
              style={{
                width: '64px',
                height: '64px',
                marginLeft: '1rem',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
              }}
            />
          )}
        </div>
      </div>

      {/* Primary Weather Key Metrics Grid (Humidity & Wind Speed in kmph) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.25rem',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Humidity Tile */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          borderRadius: '16px',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'rgba(2, 132, 199, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0284C7'
          }}>
            <Droplets size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Humidity
            </div>
            <div className="font-heading" style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>
              {current.humidity}%
            </div>
          </div>
        </div>

        {/* Wind Speed Tile in kmph */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          borderRadius: '16px',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'rgba(16, 185, 129, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#059669'
          }}>
            <Wind size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Wind Speed
            </div>
            <div className="font-heading" style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>
              {current.wind_kph} <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#64748B' }}>km/h</span>
            </div>
          </div>
        </div>

        {/* Wind Direction Tile */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          borderRadius: '16px',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'rgba(124, 58, 237, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#7C3AED'
          }}>
            <Compass size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Wind Direction
            </div>
            <div className="font-heading" style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>
              {current.wind_dir} <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#64748B' }}>({current.wind_degree}°)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
