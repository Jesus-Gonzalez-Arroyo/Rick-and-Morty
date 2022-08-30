import React from "react";
import { useEffect, useState } from "react";
import UnicoPersonaje from "./UnicoPersonaje";
import Loading from "./loading";


function NavPage(props){
    return(
        <div className="d-flex justify-content-between align-items-center">
            <p>Page: {props.page}</p>
            <button className="btn btn-primary btn-sm"
            onClick={()=>{props.setpage(props.page + 1)}}>Page {props.page + 1}</button>
        </div>
    )
}

function Personajes(){
    const [characteres, setCharacteres] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(()=>{
        async function callApi(){
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const data = await response.json()
            setloading(false)
            setCharacteres(data.results)
        }

        callApi()
    }, [page])
    
    return(
        <div className="container">

            <NavPage page={page} setpage ={setPage}/>
            
            {
                loading ? <Loading/> : 
                <div className="row">
                    {
                        characteres.map((characteres) =>{
                            return(
                                <div className="col-md-4" key={characteres.id}>
                                    <UnicoPersonaje infoPersonajes={characteres}/>
                                </div>
                                )
                        })
                    }
                </div>
            }

            <NavPage page={page} setpage ={setPage}/>
        </div>
    )
}

export default Personajes