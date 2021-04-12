import * as React from 'react'
import { useState , useEffect } from 'react'
import {render} from 'react-dom'
import { postier } from '../Postier'
import { Table } from './Table'


export default function App() {


    return (
        <div>
           
            <Table />

        </div>
    )
}

render(<App/>,document.querySelector("#app"))