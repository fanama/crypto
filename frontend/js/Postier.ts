import axios from 'axios'
import 'regenerator-runtime/runtime'

class Postier{

    async getValue(request:string,setData){


        axios.get(`/trans/${request}`).then(res=>{
            setData(res.data)
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