import React from "react";
import Fruta from "./Fruta";
import AdicionaFruta from "./AdicionaFruta";

const ListaFrutas = () => {

    const frutas = [
        { id: 1, nome: 'Abacaxi', quantidade: 5},
        { id: 2, nome: 'Maçã', quantidade: 12}
    ]

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