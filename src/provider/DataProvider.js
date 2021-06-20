import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import urlApi from '../utils/index';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item.id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product.id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("El producto ya fue añadido");
        }
    }

     const getProducts=() => {
        axios.get(urlApi.urlProduts+'products')
        .then(response=> {
            setProducts(response.data);
        })
        .catch(function (error) {
           console.log(error);
        })
    }

    useEffect(() =>{
        getProducts();
     },[])

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])




    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
