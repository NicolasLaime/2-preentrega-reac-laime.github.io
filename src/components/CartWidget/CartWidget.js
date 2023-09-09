import React from "react";

const CartWidget = () => {
    const itemCount = 3; // Número hardcodeado (puedes cambiarlo a la cantidad deseada)
  
    return (
      <div className="cart-widget">
        <i className="cart-icon">🛒</i>
        {itemCount > 0 && <span className="cart-notification">{itemCount}</span>}
      </div>
    );
  };
        
        
        
        
        
        
        
        



export default CartWidget