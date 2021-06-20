import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {DataContext} from '../../provider/DataProvider';
import { Row, Col } from 'antd';
import { Avatar, Badge, Popover } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import  CartPopupDetail  from '../cart/CartPopupDetail';

export default function HeaderContent() {
    const [menu, setMenu] = useState(false)
    const value = useContext(DataContext)
    const [cart] = value.cart

    console.log(cart);

    return (
            <>  
            <Row>
        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
        <div className="logo">
                <h1><Link to="/">Shopmar</Link></h1>
            </div>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        <span className="avatar-item">
        
        <Popover content={<CartPopupDetail datos={cart} />} title={<Link to="/cart">Ir a carrito</Link>}>
            <Badge count={cart.length}>
                <Avatar shape="square" icon={<ShoppingCartOutlined />} />
            </Badge>
        </Popover>
        </span>
    
        </Col>
    </Row>  
            
           
            </>
            
     
    )
}
