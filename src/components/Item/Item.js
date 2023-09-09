import React from "react"
import { Link } from "react-router-dom";


const Item = ({id, name, image , price, stock}) => {


    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="Itemheader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={image} alt={name} className="ItemImg" />
            </picture>

            <section>
                <p className="info">
                    precio: ${price}
                </p>
                <p className="info">
                    stock disponible:{stock}
                </p>
            </section>
            <footer className="Itemfooter">
               <Link to={`/item/${id}`} className='option'>Ver detalles</Link>
            </footer>



        </article>
        
    )




}

export default Item;