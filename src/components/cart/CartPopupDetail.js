import React from 'react';


const CartPopupDetail = (props) => {
   
   return (
      <>
         <li>
         {props.datos.map(resp=>(
            <>
            <ul key={resp.id}>{resp.title}:${resp.price}</ul>
            </>
         ))}
         </li>
      </>
    );
}


export default CartPopupDetail;


