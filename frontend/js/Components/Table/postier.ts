import axios from 'axios'
import 'regenerator-runtime/runtime'

class Postier{

    async getTable(setData,setLoading){


        axios.get(`/trans/list`).then(res=>{
            setData(res.data)
            setLoading(false)
        }).catch(err=>{
            alert('la base de donnée est injoignable')
        })

    }

    async getRequest(request:string){

        const header = `Authorization: Bearer ${request}`

        console.log({header})

        axios.get('sql/protected',{headers:{ Authorization: `Bearer ${request}` }})
            .then(res=>{
            console.log(res)
        })

    }


}

export const postier = new Postier()