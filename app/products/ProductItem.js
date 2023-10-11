
import React from 'react';
import MediaDisplay from './media/Media';

import PublishedTime from './published_time/PublishedTime';
import Price from './price/Price';
import Link from 'next/link';


const ProductItem = ({ product }) => {
    const {  Product_Name, Description, publishedAt, updatedAt, Media, Price_NPR,
        Discount_percentage, } = product.attributes;
    const id= product.id;
    return (
        <li>
            <Link href={`/products/${id}`}>
               
                    <MediaDisplay media={Media.data} />
                    <h2>{Product_Name}</h2>
                    <p>Published at</p>  <PublishedTime publishedAt={publishedAt} />
                    <p>Updated at</p> <PublishedTime publishedAt={updatedAt} />
                    <Price priceNPR={parseFloat(Price_NPR)} discountPercentage={Discount_percentage} />
                 
              
            </Link>
        </li>
    );
};

export default ProductItem;
