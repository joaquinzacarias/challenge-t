import express from 'express'
import mainRoutes from './routes/main'

const app = express()
const currentVersion: string = '/v1'

app.use(express.json())

app.use(`${currentVersion}`, mainRoutes)

app.get('/healthCheck', (req, res) => {
  res.send('Online OK')
})

app.get('/version', (req, res) => {
  res.send('Version 1.0.0')
})

const PORT = 3000
const server = app.listen(PORT, () => {
  console.debug(`Server running on port ${PORT}`)
})

export { app, server }
