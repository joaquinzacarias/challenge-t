import supertest from 'supertest'
import { app, server } from '../index'

const api = supertest(app)

test('Geolocation', async () => {
  await api
    .get('/v1/location')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('Geolocation response', async () => {
  const response = await api.get('/v1/location')

  // Verificación de tener ambas coordenadas
  expect(response.body).toHaveProperty('lon')
  expect(response.body).toHaveProperty('lat')
})

afterAll(() => {
  server.close()
})
