/* istanbul ignore file */
import express from 'express'

import compression from 'compression'
import bodyParser from 'body-parser'
import cors from 'cors'

import customerRouter from './routers/customer/index'
import adminRouter from './routers/admin/index'

import httpCodes from './assets/httpCodes'

const app = express()

app.use(bodyParser.json({ limit: process.env.PAYLOAD_LIMIT || '5mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(compression())

app.use('/customer', customerRouter)
app.use('/admin', adminRouter)

app.get(['/healthcheck', '/info', '/status'], (_req, res) => res.status(httpCodes.OK).end())
app.use('*', (_req, res) => res.status(httpCodes.NOT_FOUND).end())

export default app
