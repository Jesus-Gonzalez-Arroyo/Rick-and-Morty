import React from "react";
import Personajes from "./personajes";
import 'bootstrap/dist/css/bootstrap.min.css'

function App (){
    return(
        <div className="bg-dark text-white">
            <h1 className="text-center py-4 display-1">Rick and Morty</h1>
            <Personajes/>
        </div>
    )
}

export default App