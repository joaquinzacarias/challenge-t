import supertest from 'supertest'
import { app, server } from '../index'

const api = supertest(app)

test('healthCheck', async () => {
  await api
    .get('/healthCheck')
    .expect(200)
    .expect('Content-Type', /text\/html/)
})

test('healtCheck response', async () => {
  const response = await api.get('/healthCheck')

  expect(response.text).toEqual('Online OK')
})

test('version', async () => {
  await api
    .get('/version')
    .expect(200)
    .expect('Content-Type', /text\/html/)
})

test('version response', async () => {
  const response = await api.get('/version')

  expect(response.text).toEqual('Version 1.0.0')
})

afterAll(() => {
  server.close()
})
