import React from "react";
import Fruta from "./Fruta";
import AdicionaFruta from "./AdicionaFruta";
import { useSelector } from "react-redux";

const ListaFrutas = () => {

    const frutas = useSelector(state => state.frutaReducers.frutas)

    return(
        <div>
            <h1>Lista de frutas</h1>

            <AdicionaFruta />
            {
                frutas.map(fruta => (
                    <Fruta key={fruta.id} fruta={fruta} />
                ))
            }
            
        </div>
    )
}

export default ListaFrutas;