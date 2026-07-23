import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = '35d8fd694bb14dbcb68125230262007';

app.use(cors());
app.use(express.json());

// API Endpoint for weather retrieval
app.get('/api/weather', async (req, res) => {
  const { city } = req.query;

  if (!city || city.trim() === '') {
    return res.status(400).json({
      error: { message: 'City name is required' }
    });
  }

  try {
    const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city.trim())}`;
    const response = await fetch(weatherUrl);
    const data = await response.json();

    if (!response.ok || data.error) {
      return res.status(response.status || 400).json({
        error: data.error || { message: 'Failed to fetch weather data for the specified city' }
      });
    }

    // Process and enrich data
    const formattedResult = {
      location: {
        name: data.location.name,
        region: data.location.region,
        country: data.location.country,
        lat: data.location.lat,
        lon: data.location.lon,
        tz_id: data.location.tz_id,
        localtime: data.location.localtime
      },
      current: {
        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        is_day: data.current.is_day,
        condition: {
          text: data.current.condition.text,
          icon: data.current.condition.icon,
          code: data.current.condition.code
        },
        wind_mph: data.current.wind_mph,
        wind_kph: data.current.wind_kph,
        wind_degree: data.current.wind_degree,
        wind_dir: data.current.wind_dir,
        pressure_mb: data.current.pressure_mb,
        humidity: data.current.humidity,
        cloud: data.current.cloud,
        feelslike_c: data.current.feelslike_c,
        vis_km: data.current.vis_km,
        uv: data.current.uv,
        gust_kph: data.current.gust_kph
      },
      rawResponse: data
    };

    return res.json(formattedResult);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return res.status(500).json({
      error: { message: 'Internal server error while retrieving weather details' }
    });
  }
});

// Serve static frontend files if built
const frontendDist = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendDist));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(frontendDist, 'index.html'), (err) => {
    if (err) next();
  });
});

app.listen(PORT, () => {
  console.log(`⚡ CRED Weather Backend running on http://localhost:${PORT}`);
});
