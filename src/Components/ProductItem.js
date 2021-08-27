import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';

function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id];

    if (!shoe)
        return <h2>Product Not Found!</h2>

    return (
        <div>
            <h1>Welcome to Product Item</h1>
            <div className="link">
                <p>Name: {shoe.name}</p>
                <h4><img src={shoe.img} height="300px" alt="shoe" /></h4>
                <p style={{flex: 1}}><h3>Price: </h3>{shoe.price} only</p>
            </div>
        </div>
    );
}

export default ProductItem;