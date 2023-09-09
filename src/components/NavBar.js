import React from "react";
import CartWidget from "./CartWidget/CartWidget"
import ItemListContainer from "./ItemListContainer/ItemListContainer"
import { NavLink, Link } from "react-router-dom";

export const NavBar = () => {
    return (
         
        <nav>
        <ul>
     <NavLink to="/"><li><a href="#home">Nosotros</a></li></NavLink>
     <NavLink to={`/category/buzos`}><li><a href="#news">Buzos</a></li> </NavLink> 
     <NavLink to={`/category/remera`}><li><a href="#contact">remera</a></li></NavLink>
     <li><a class="active" href="#">
        <CartWidget/>
     </a></li></ul>

      
     </nav>
       
       
      
     
     
    );   
    
}

