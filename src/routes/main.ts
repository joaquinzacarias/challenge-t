import express from 'express'

import locationRoutes from './location'
import currentRoutes from './current'
import forecastRoutes from './forecast'

const app = express()

const locationPath: string = '/location'
const currentPath: string = '/current'
const forecastPath: string = '/forecast'

app.use(`${locationPath}`, locationRoutes)
app.use(`${currentPath}`, currentRoutes)
app.use(`${forecastPath}`, forecastRoutes)

export default app
