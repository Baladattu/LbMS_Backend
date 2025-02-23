import express from 'express'
import dotenv from 'dotenv'
import CORS from 'cors'
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';


import userRoutes from './src/Routes/user.routes.js'
import adminRoutes from './src/Routes/admin.routes.js'
import connectDB from './src/Config/db.js'
import bookRoutes from './src/Routes/book.routes.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 7000

connectDB()

app.use(express.json())

app.use(CORS())

app.get('/', (req, res) => {
  res.send(`<h1>Server is running</h1>`)
})

app.use('/api/user', userRoutes)

app.use('/api/books', bookRoutes)

app.use('/api/admin', adminRoutes)


app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
