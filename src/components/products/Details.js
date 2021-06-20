import React,{ useState,useEffect,useContext} from 'react';
import {useParams} from 'react-router-dom';
import {DataContext} from '../../provider/DataProvider';
import {Link} from 'react-router-dom'
import axios from 'axios';
import urlApi from '../../utils/index';
import { Row, Col } from 'antd';


export default function Details() {
  
    const [detail, setDetail] = useState([])
    const { id } = useParams();
    const value = useContext(DataContext)
    const addCart = value.addCart
    
   
    const getProductsId=(id) => {
        axios.get(urlApi.urlProduts+'products/'+id)
        .then(response=> {
            setDetail(response.data);
            
        })
        .catch(function (error) {
           console.log(error);
        })
    }

    useEffect(() =>{
        getProductsId(id);
     },[])


    return (
          <>
           <Row>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
          <div className="details">
          <div className="box-details">
          <img src={detail.image} width="300" />
          </div>
          </div>
          </Col>
          <Col xs={16} sm={16} md={16} lg={16} xl={16}>
          <div className="details" key={detail.id}>
                <div className="box-details">
                    <h2 title={detail.title}>{detail.title}</h2>
                       <h3>${detail.price}</h3>
                       <p>{detail.description}</p>
                       <Link to="/cart" className="ant-btn ant-btn-primary" onClick={() => addCart(detail.id)}>
                       Añadir a carrito
                       </Link>
                      </div>
                  </div>
          </Col>
          </Row>
           
          </>
       
    )
}
