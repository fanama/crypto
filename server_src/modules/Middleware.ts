import jwt from 'jsonwebtoken'

import * as dotenv from 'dotenv'
dotenv.config()

export function authenticateToken(req:any, res:any, next:any) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token,JSON.stringify(process.env.ACCESS_TOKEN_SECRET), (err:any, user:any) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = user
      console.log({user})
      next()
    })
  }