import { Router, Request, Response } from 'express'

const lowercaseRegex = Router()
lowercaseRegex.get(/[a-z]+$/, (req: Request, res: Response) => {
  res.send('matches a lowercase string')
})

const uppercaseRegex = Router()
uppercaseRegex.get(/[A-Z]+$/, (req: Request, res: Response) => {
  res.send('matches an uppercase string')
})

const numberRegex = Router()
numberRegex.get(/[0-9]+$/, (req: Request, res: Response) => {
  res.send('matches a number')
})

const endsWithNumRegex = Router()
endsWithNumRegex.get(/[A-Z|a-z|0-9]+[0-9]$/, (req: Request, res: Response) => {
  res.send('matches last number character')
})

export { lowercaseRegex, uppercaseRegex, numberRegex, endsWithNumRegex }
