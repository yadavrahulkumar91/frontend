

import React from 'react';


const ProductDetail = ({ params }) => {
  
    const  id  =  params.slug ; 


    return (
        <div>
            <h1>Product Detail Page</h1>
            <p>Product ID: {id}</p>
            {/* Display product details here */}
        </div>
    );
};

export default ProductDetail;
