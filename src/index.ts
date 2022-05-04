import express from 'express'
import mainRoutes from './routes/main'
import { CONFIG } from './config'

const app = express()
const currentVersion: string = '/v1'

app.use(express.json())

// Base route
app.use(`${currentVersion}`, mainRoutes)

// HealthCheck endpoint
app.get('/healthCheck', (req, res) => {
  res.send('Online OK')
})

// Version endpoint
app.get('/version', (req, res) => {
  res.send('Version 1.0.0')
})

// Starting server
const PORT = CONFIG.SERVER_PORT
const server = app.listen(PORT, () => {
  console.debug(`Server running on port ${PORT}`)
})

export { app, server }
