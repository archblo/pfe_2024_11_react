import React, {useState} from "react";
import { Badge } from "reactstrap";

function ColorfavoritoFragment({color, datos}){
    return (
        <>
        <h1>
            Color Favorito <Badge>{color}</Badge>
         </h1>
        </>
    )
}
export default ColorfavoritoFragment