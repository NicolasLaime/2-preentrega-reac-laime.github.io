import React, { useEffect, useState } from "react";
import { getProductById } from "../../asyncMode";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {
  const [product, setProduct ] = useState(null)

   
  const { itemId } = useParams()


  useEffect(() => {
    getProductById(itemId)
     .then(Response => { 
        setProduct(Response)
    })
    .catch(error => {
    })
  }, [itemId])

      
  return(
    <div className="ItemDetailContainer">
        <ItemDetail {...product} />
    </div>
  )

}

export default ItemDetailContainer;