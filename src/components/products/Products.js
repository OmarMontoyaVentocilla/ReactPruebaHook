import React, {useContext} from 'react';
import {DataContext} from '../../provider/DataProvider';
import {Link} from 'react-router-dom';
import { Row, Col, Card, Button } from 'antd';

const { Meta } = Card;


export default function Products() {
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart

    return (
        <>
            <Row>
         {
            products.map(product =>(
               <>
               <Col xs={8} sm={8} md={8} lg={8} xl={8}> 
                <div className="products">
                <div className="card" key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <img src={product.image} alt=""/>
                        </Link>
                        <div className="box">
                        <h3 title={product.title}>
                            <Link to={`/products/${product.id}`}>{product.title}</Link>
                        </h3>
                        <p>{product.description}</p>
                        <h4>${product.price}</h4>
                        <Button onClick={() => addCart(product.id)} type="primary">Añadir a carrito</Button>
                     
                        </div>
                </div>
                </div>
                </Col>
                </>
            ))
         }
    </Row>  
        </>
    )
}
