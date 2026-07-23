// CRED-inspired Weather Mood Visual Config (Light Mode Palette)
export const getWeatherMood = (conditionText = '', isDay = 1) => {
  const text = conditionText.toLowerCase();

  // Sunny / Clear
  if (text.includes('sun') || text.includes('clear')) {
    return {
      type: 'sunny',
      title: isDay ? 'Radiant & Clear' : 'Clear Starlight',
      accentColor: '#D97706',
      badgeBg: 'rgba(217, 119, 6, 0.08)',
      badgeText: '#B45309',
      gradientBg: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 50%, #FDE68A 100%)',
      cardBorder: 'rgba(245, 158, 11, 0.25)',
      glowShadow: '0 20px 40px -15px rgba(245, 158, 11, 0.2)',
      bgPattern: 'sunburst',
      iconEmoji: isDay ? '☀️' : '🌙'
    };
  }

  // Rain / Drizzle / Shower / Torrential
  if (text.includes('rain') || text.includes('drizzle') || text.includes('shower')) {
    return {
      type: 'rainy',
      title: 'Pluvial Downpour',
      accentColor: '#0284C7',
      badgeBg: 'rgba(2, 132, 199, 0.08)',
      badgeText: '#0369A1',
      gradientBg: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #BAE6FD 100%)',
      cardBorder: 'rgba(14, 165, 233, 0.25)',
      glowShadow: '0 20px 40px -15px rgba(14, 165, 233, 0.2)',
      bgPattern: 'raindrops',
      iconEmoji: '🌧️'
    };
  }

  // Thunderstorm / Electric
  if (text.includes('thunder') || text.includes('lightning') || text.includes('storm')) {
    return {
      type: 'thunder',
      title: 'Electric Turbulence',
      accentColor: '#7C3AED',
      badgeBg: 'rgba(124, 58, 237, 0.08)',
      badgeText: '#6D28D9',
      gradientBg: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 50%, #DDD6FE 100%)',
      cardBorder: 'rgba(139, 92, 246, 0.25)',
      glowShadow: '0 20px 40px -15px rgba(139, 92, 246, 0.25)',
      bgPattern: 'lightning',
      iconEmoji: '⚡'
    };
  }

  // Cloud / Overcast / Mist / Fog / Haze
  if (text.includes('cloud') || text.includes('overcast') || text.includes('mist') || text.includes('fog') || text.includes('haze')) {
    return {
      type: 'cloudy',
      title: 'Overcast & Atmospheric',
      accentColor: '#475569',
      badgeBg: 'rgba(71, 85, 105, 0.08)',
      badgeText: '#334155',
      gradientBg: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%)',
      cardBorder: 'rgba(148, 163, 184, 0.3)',
      glowShadow: '0 20px 40px -15px rgba(100, 116, 139, 0.15)',
      bgPattern: 'clouds',
      iconEmoji: '☁️'
    };
  }

  // Snow / Ice / Blizard
  if (text.includes('snow') || text.includes('ice') || text.includes('sleet') || text.includes('blizzard') || text.includes('frost')) {
    return {
      type: 'snowy',
      title: 'Pristine Frost',
      accentColor: '#2563EB',
      badgeBg: 'rgba(37, 99, 235, 0.08)',
      badgeText: '#1D4ED8',
      gradientBg: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #DBEAFE 100%)',
      cardBorder: 'rgba(96, 165, 250, 0.3)',
      glowShadow: '0 20px 40px -15px rgba(59, 130, 246, 0.2)',
      bgPattern: 'snow',
      iconEmoji: '❄️'
    };
  }

  // Default Atmospheric Fallback
  return {
    type: 'ambient',
    title: 'Balanced Climate',
    accentColor: '#111827',
    badgeBg: 'rgba(17, 24, 39, 0.06)',
    badgeText: '#111827',
    gradientBg: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)',
    cardBorder: 'rgba(0, 0, 0, 0.1)',
    glowShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
    bgPattern: 'ambient',
    iconEmoji: '🌤️'
  };
};

export const TOP_CITIES = [
  'Tokyo',
  'London',
  'New York',
  'Paris',
  'Sydney',
  'Mumbai',
  'Dubai',
  'Singapore',
  'Toronto',
  'Berlin'
];
