import React from 'react';
import './Price.css'; // Import the CSS file for Price component


const Price = ({ priceNPR, discountPercentage }) => {
    // Calculate the final price after applying the discount
    const finalPrice = priceNPR - (priceNPR * (discountPercentage / 100));

    return (
        <div className="price">
            <p className="final-price">Final Price: NPR {finalPrice.toFixed(2)}</p>
            <p className="actual-price">Actual Price: NPR {priceNPR.toFixed(2)}</p>
        </div>
    );
};

export default Price;
