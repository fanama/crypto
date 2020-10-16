import * as React from 'react'
import { useState } from 'react'
import {render} from 'react-dom'
import { postier } from '../Postier'


export default function App() {

    const [user, setUser] = useState<string>("")
    const [token, setToken] = useState<string>("")

    const [inputtoken, setInputToken] = useState<string>("")



    const getToken = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        postier.sendRequest(user,setToken)
    }

    const getInfo = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        postier.getRequest(token)
    }

    return (
        <div>
            <form onSubmit={getToken}>
                <h2>username</h2>
                <input value={user} onChange={(e)=>{setUser(e.target.value)}} />
                <button>get token</button>
            </form>
            <div className="token">
                token:<div className="value">{token}</div>
            </div>
            <form onSubmit={getInfo}>
                <h2>Enter token</h2>
                <input value={inputtoken} onChange={(e)=>{setInputToken(e.target.value)}} />
                <button>getInfo</button>
            </form>
        </div>
    )
}

render(<App/>,document.querySelector("#app"))