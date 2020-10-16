import express from 'express'
import { authenticateToken } from './Middleware'


export const router = express.Router()

router.get('/',(req,res)=>{

    res.send('hello page')
    
})

router.get('/protected',authenticateToken,(req,res)=>{

    res.send('hello, this page is protected')
    
})