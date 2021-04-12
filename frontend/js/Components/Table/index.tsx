import * as React from 'react'

import {postier} from "./postier"

import "./style.scss"

export  function Table() {

    const [state, setstate] = React.useState([])
    const [loading, setLoading] = React.useState(true)


    React.useEffect(()=>{
        postier.getTable(setstate,setLoading)
    },[])

    const table = state.map(element =><div className="line" key={element.id}>
        <div className="element">{element.id}</div>
        <div className="join"></div>
        <div className="element">{element.symbol}</div>
    </div>)

    return (
        <>
        <h1>All coins</h1>
        <div className="table">
            {loading?"loading...":""}
            {table}
        </div>
        </>
    )
}
