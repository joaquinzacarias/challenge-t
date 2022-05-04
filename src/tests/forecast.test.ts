import supertest from 'supertest'
import { app, server } from '../index'

const api = supertest(app)

test('Forecast Weather', async () => {
  await api
    .get('/v1/forecast')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('Forecast Weather response', async () => {
  const response = await api.get('/v1/forecast')

  // Checking if response has regionName,daily and daily has 8 objects
  expect(response.body).toHaveProperty('forecastGeolocationInfo')
  expect(response.body.forecastGeolocationInfo).toHaveProperty('regionName')
  expect(response.body).toHaveProperty('forecastWeatherInfo')
  expect(response.body.forecastWeatherInfo).toHaveProperty('daily')
  expect(response.body.forecastWeatherInfo.daily).toHaveLength(8)
})

test('Forecast Weather - Munro,AR', async () => {
  await api
    .get('/v1/forecast/Munro,AR')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('Forecast Weather response - Munro,AR', async () => {
  const response = await api.get('/v1/forecast/Munro,AR')

  // Checking if response has regionName,daily and daily has 8 objects
  expect(response.body).toHaveProperty('forecastGeolocationInfo')
  expect(response.body.forecastGeolocationInfo).toHaveProperty('regionName')
  expect(response.body).toHaveProperty('forecastGeolocationInfo')
  expect(response.body.forecastWeatherInfo).toHaveProperty('daily')
  expect(response.body.forecastWeatherInfo.daily).toHaveLength(8)
})

afterAll(() => {
  server.close()
})
