import React from "react";

function UnicoPersonaje({infoPersonajes}){
    return(
        <>
        <div className="text-center py-5">
            <h3>{infoPersonajes.name}</h3>
            <img className="img-fluid rounded-pill" src={infoPersonajes.image} alt={infoPersonajes.name}/>
            <p>{infoPersonajes.origin.name}</p>
        </div>
        </>
    )
}

export default UnicoPersonaje