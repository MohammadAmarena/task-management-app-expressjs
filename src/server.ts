import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import { routes } from './routes/taskRoute.js'
import { errorMiddleware } from './middlewares/errorMiddleware.js'
import * as config from './config.js'

const app = express()
const PORT = config.PORT

app.use(express.json())
app.use(cors({
  origin: '*',
  methods: ['PUT', 'POST', 'DELETE', 'GET'],
}))
app.use(morgan('dev'))
app.use(helmet())

app.use('/', routes)

app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`)
})
