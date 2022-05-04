/**
 * Public API Routes
 */
export const APIS = {
  GEOLOCATION_API: 'http://ip-api.com/json/', // Geolocation API base on the public IP
  REVERSE_GEOLOCATION_API: 'https://api.bigdatacloud.net/data/reverse-geocode-client?', // Reverse geolocation IP base on coords

  WEATHER_CURRENT_API: 'https://api.openweathermap.org/data/2.5/weather?', // OpenWeather API - Current Weather Info
  WEATHER_FORECAST_API: 'https://api.openweathermap.org/data/2.5/onecall?' // OpenWeather API - Forecast Weather Info
}
