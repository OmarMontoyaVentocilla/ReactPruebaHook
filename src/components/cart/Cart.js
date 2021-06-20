import React,{useContext, useState, useEffect} from 'react';
import {DataContext} from '../../provider/DataProvider';
import {Link} from 'react-router-dom';
import { Alert } from 'antd';


export default function Cart() {
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0);
 
    
    useEffect(() =>{
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price)
            },0)
            setTotal(res)
        }
        getTotal()
    },[cart])

    const removeProduct = id => {
        if(window.confirm("Desea borrar el producto de la lista?")){
            cart.forEach((item, index) => {
                if(item.id === id){
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }
    

    if(cart.length === 0)
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>No hay productos en cesta</h2>

    return (
        <>
           {
               cart.map(product =>(
                   <div className="details cart" key={product.id}>
                       <div className="img-container" 
                       style={{backgroundImage: `url(${product.image})`}} />

                       <div className="box-details">
                           <h2 title={product.title}>{product.title}</h2>
                           <h3>${product.price}</h3>
                           <p>{product.description}</p>
                           <p>{product.category}</p>
                           <div className="delete" onClick={() => removeProduct(product.id)}>X</div>
                       </div>

                   </div>
               ))
           }

           <div className="" >
           <Alert message={`Total: ${total}`} type="info" />
           </div>
        </>
    )
}
