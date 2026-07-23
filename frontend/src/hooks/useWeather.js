import { useState, useEffect, useCallback } from 'react';

export function useWeather(initialCity = 'London') {
  const [city, setCity] = useState(initialCity);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (cityName) => {
    if (!cityName || !cityName.trim()) return;

    setLoading(true);
    setError(null);

    try {
      // Endpoint call to backend API proxy
      const response = await fetch(`https://weather-rd7h.onrender.com/api/weather?city=${encodeURIComponent(cityName.trim())}`)
);
      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error?.message || 'Unable to find weather for this location');
      }

      setWeatherData(data);
      setCity(data.location?.name || cityName);
    } catch (err) {
      console.error('Weather fetch error:', err);
      setError(err.message || 'An unexpected error occurred while fetching weather data');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeather(initialCity);
  }, [fetchWeather, initialCity]);

  const searchCity = (cityName) => {
    fetchWeather(cityName);
  };

  return {
    city,
    weatherData,
    loading,
    error,
    searchCity
  };
}
