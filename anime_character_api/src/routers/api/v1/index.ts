import { Router } from 'express'

const urlPatterns: Map<string, Router> = new Map<string, Router>([])

const v1: Router = Router()
urlPatterns.forEach((router: Router, path: string): void => {
  v1.use(path, router)
})

export default v1
