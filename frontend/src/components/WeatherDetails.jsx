import React from 'react';
import { Thermometer, Sun, Gauge, Eye, Cloud, Clock } from 'lucide-react';

export default function WeatherDetails({ weatherData }) {
  if (!weatherData || !weatherData.current) return null;

  const { current, location } = weatherData;

  const detailItems = [
    {
      label: 'Feels Like',
      value: `${Math.round(current.feelslike_c)}°C`,
      subtext: `Actual: ${current.temp_c}°C`,
      icon: Thermometer,
      color: '#EA580C',
      bg: 'rgba(234, 88, 12, 0.08)'
    },
    {
      label: 'UV Index',
      value: current.uv,
      subtext: current.uv > 5 ? 'High Exposure' : 'Moderate / Low',
      icon: Sun,
      color: '#D97706',
      bg: 'rgba(217, 119, 6, 0.08)'
    },
    {
      label: 'Pressure',
      value: `${current.pressure_mb} mb`,
      subtext: 'Atmospheric pressure',
      icon: Gauge,
      color: '#2563EB',
      bg: 'rgba(37, 99, 235, 0.08)'
    },
    {
      label: 'Visibility',
      value: `${current.vis_km} km`,
      subtext: 'Distance clarity',
      icon: Eye,
      color: '#0D9488',
      bg: 'rgba(13, 148, 136, 0.08)'
    },
    {
      label: 'Cloud Cover',
      value: `${current.cloud}%`,
      subtext: 'Sky coverage',
      icon: Cloud,
      color: '#475569',
      bg: 'rgba(71, 85, 105, 0.08)'
    },
    {
      label: 'Local Time',
      value: location.localtime ? location.localtime.split(' ')[1] || location.localtime : 'N/A',
      subtext: location.localtime ? location.localtime.split(' ')[0] : 'Timezone',
      icon: Clock,
      color: '#7C3AED',
      bg: 'rgba(124, 58, 237, 0.08)'
    }
  ];

  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem'
      }}>
        <h3 className="font-heading" style={{
          fontSize: '1.1rem',
          fontWeight: '800',
          color: '#0F172A',
          letterSpacing: '-0.01em'
        }}>
          Atmospheric Telemetry
        </h3>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94A3B8' }}>
          Sensors Active
        </span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
        gap: '1rem'
      }}>
        {detailItems.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="cred-card"
              style={{
                padding: '1.25rem',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '18px'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.85rem'
              }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#64748B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {item.label}
                </span>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  background: item.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: item.color
                }}>
                  <IconComp size={17} />
                </div>
              </div>

              <div className="font-heading" style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#0F172A',
                marginBottom: '0.2rem'
              }}>
                {item.value}
              </div>

              <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 500 }}>
                {item.subtext}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
