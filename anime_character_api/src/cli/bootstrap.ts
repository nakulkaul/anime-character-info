import { Server, type ServerOptions } from 'http'

import express, { type Application, type Router } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import mongoose from 'mongoose'

import urlPatterns from '../routers'
import { MONGODB_URI } from '../settings'

export function getRequestListener (): Application {
  const application: Application = express()
  application.use(helmet())
  application.use(express.urlencoded({ extended: false }))
  application.use(express.json())
  application.use(morgan('combined'))

  urlPatterns.forEach((router: Router, path: string): void => {
    application.use(path, router)
  })

  return application
}

export default async function bootstrap (
  port: number,
  host: string
): Promise<void> {
  const requestListener: Application = getRequestListener()

  const options: ServerOptions = {}
  const server: Server = new Server(options, requestListener)

  await mongoose.connect(MONGODB_URI)
  server.listen(port, host, (): void => {
    console.info(server.address())
  })
}
