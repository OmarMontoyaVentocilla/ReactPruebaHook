import React from 'react';
import HeaderContent from './components/header/Header'
import Products from './components/products/Products'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {DataProvider} from './provider/DataProvider'
import Details from './components/products/Details'
import Cart from './components/cart/Cart'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
        <Layout>
        <Header>
        <HeaderContent />
        </Header>
        <Content>
        <section>
            <Routes>
              <Route path="/" element={ <Products /> } />
              <Route path="products/:id" element={ <Details /> } />
              <Route path="cart" element={ <Cart /> } />
            </Routes>
          </section>
        </Content>
        </Layout>
         
          
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
