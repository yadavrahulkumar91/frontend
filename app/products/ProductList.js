import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
    return (
        <ul className='products'>
            {products.map((product) => (
                <ProductItem  product={product} />
            ))}
        </ul>
    );
};

export default ProductList;
