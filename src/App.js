import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './page/Main';
import About from './page/About';
import Footer from './componen/Footer';
import Product from './page/Product';
import Login from './page/Login';
import Register from './page/Register';






function App() {
  return (
    <Fragment>
      <Layout />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Home" element={<Main />} />
        <Route path="About" element={<About />} />
        <Route path="Product" element={<Product />} />
        <Route path="Register" element={<Register />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;


