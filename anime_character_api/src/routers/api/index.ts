import { Router } from 'express'

import v1 from './v1'

const urlPatterns: Map<string, Router> = new Map<string, Router>([['/v1', v1]])

const api: Router = Router()
urlPatterns.forEach((router: Router, path: string): void => {
  api.use(path, router)
})

export default api
