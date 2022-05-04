# challenge-t: Location and Weather

## Stack:
- NodeJS / Typescript
- Express

## API Usage
- IP-API: https://ip-api.com/
- OpenWeather: https://openweathermap.org/
- BigData - Reverse Geocode to City API: https://www.bigdatacloud.com/geocoding-apis/free-reverse-geocode-to-city-api

## Install
1. Clone repository or download it
2. Run "npm install"

## Different ways of running
- Running dev mode "npm run dev"
- Running "production" mode "npm run start"
- Running tests: "npm run test" 

### Endpoints
Everything at http://localhost:3000/
- /healtCheack: returns if the server is on
- /version: returns the current version of the project
- /location: returns the current location base on the public IP
- /current: returns the current location and weather base on the public IP
- /current/City_name: returns the current location and weather base on the city as param
- /forecast: returns the current location and forecast weather base on the public IP
- /forecast/City_name: returns the current location and forecast weather base on the city as param
