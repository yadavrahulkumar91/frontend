"use client"

import React, { useEffect, useState } from 'react';

import ProductItem from './ProductItem';


const ProductsPage = ({ params }) => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const id = params.slug; 


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:1337/api/products/'+id+'?populate=*', {
                    headers: {
                        Authorization: 'Bearer 3aa7101d1cad22e0fd2b87ba0e6a5c53bb171266877d8a0167d460f718ec58ca24578ce644d1a00ba3da7443a8480a25af0ed95a296a4bb08fb626538be2381b496352843dcaded76c1f93eb32305ab060021c784486012c85041f3f667b0225c470b53f5992f269a241456f2bf5ebe25a011c0367f0de0b9f08aefc4ff6a17d',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Product</h1>
            <p>{id}</p>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <p>

                    {product.id}
                            {product.attributes.Product_Name}

                            <ProductItem product={product} />
              
              Hi</p>
                // <ProductList products={products} />
            )}
        </div>
    );
};

export default ProductsPage;
