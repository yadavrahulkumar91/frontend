"use client"

// import React, { useEffect, useState } from 'react';
import axios from 'axios';      
import ProductPage from './products/products.js';
import Header from './components/header.js';

const Home = () => {
 
  return (
    <div>
     
    <Header/>
          <ProductPage/>
      
    </div>
  );
};

export default Home;
