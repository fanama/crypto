import express from 'express'
import axios from "axios"
import { authenticateToken } from './Middleware'


export const router = express.Router()

router.get('/',(req,res)=>{

    res.send('hello page')
    
})

router.get('/list',(req,res)=>{

    axios.get("https://api.coingecko.com/api/v3/coins/list?include_platform=true").then(result=>{
        res.send(result.data)
    }).catch(err=>{
        res.send('error')

    })

    
})

router.get('/:money',async (req,res)=>{

    const {money} = req.params

    console.log(`https://bitbay.net/API/Public/${money}/trades.json`)

    const result =  await axios.get(`https://bitbay.net/API/Public/${money}/trades.json`)
    
    console.log("got data !")

    res.send(result.data)
    
})

router.get('/protected',authenticateToken,(req,res)=>{

    res.send('hello, this page is protected')
    
})