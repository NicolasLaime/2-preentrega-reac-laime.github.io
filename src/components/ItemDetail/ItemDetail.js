import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"


const ItemDetail = ({ id, name, image, category, descripcion, price, stock}) => {

 return ( 
    <article className="CardItem">
        <header>
             <h2>{name}</h2>
        </header>
        <picture>
            <img src={image} className="image"/>
        </picture>
        <section>
            <p className="Info">
                categoria: {category}
            </p>
            <p className="Info">
                descripcion: {descripcion}
            </p>
            <p className="Info">
                precio: ${price}
            </p>

        </section>
        <footer className="ItemFooter">
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("cantidad agregada", quantity)} />
        </footer>

    </article>

   

 )





}


export default ItemDetail;