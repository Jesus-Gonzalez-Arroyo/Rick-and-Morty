import React from "react";
import { useEffect, useState } from "react";
import UnicoPersonaje from "./UnicoPersonaje";
import Loading from "./loading";


function NavPage(props){
    return(
        /* funcion para pasar las paginas, pasamos la informacion por medio del estado y aca la recibimos por la
        props y la modificamos */
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

    //Useeffect para consumir la api con ua funcion asincrona
    useEffect(()=>{
        async function callApi(){
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const data = await response.json()
            setloading(false)
            //pasamos los resultados por medio del estado 
            setCharacteres(data.results)
        }
        callApi()
    }, [page])
    
    return(
        <div className="container">
            <NavPage page={page} setpage ={setPage}/>           
            {
                //operador ternario para comprobar que los datos salgan sino se pone una pagina alternativa de carga
                loading ? <Loading/> : 
                <div className="row">
                    {
                        //consumimos los datos que le pasamos por medio del estado
                        characteres.map((characteres) =>{
                            return(
                                //pasamos la informacion al componentes Unipersonaje para tenerlo aparte y asi consumir la informacion de mejor forma
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