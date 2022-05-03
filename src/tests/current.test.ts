import supertest from 'supertest'
import { app, server } from '../index'

const api = supertest(app)

test('Current Weather', async () => {
  await api
    .get('/v1/current')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('Current Weather response', async () => {
  const response = await api.get('/v1/current')

  // Verificación de tener ambas coordenadas
  expect(response.body).toHaveProperty('currentGeolocationInfo')
  expect(response.body.currentGeolocationInfo).toHaveProperty('regionName')
  expect(response.body).toHaveProperty('currentWeatherInfo')
  expect(response.body.currentWeatherInfo).toHaveProperty('weather')
})

test('Current Weather - Munro,AR', async () => {
  await api
    .get('/v1/current/Munro,AR')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('Current Weather response - Munro,AR', async () => {
  const response = await api.get('/v1/current/Munro,AR')

  // Verificación de tener ambas coordenadas
  expect(response.body).toHaveProperty('currentGeolocationInfo')
  expect(response.body.currentGeolocationInfo).toHaveProperty('regionName')
  expect(response.body).toHaveProperty('currentWeatherInfo')
  expect(response.body.currentWeatherInfo).toHaveProperty('weather')
})

afterAll(() => {
  server.close()
})
