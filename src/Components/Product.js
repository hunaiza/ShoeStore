import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../shoes.json';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import { Tooltip, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Cart from './Cart';

function Product() {

    return (
        <div>
            <div className="productContainer">
                {Object.keys(Shoes).map(keyName => {
                    const shoe = Shoes[keyName];
                    return (
                        <Link key={keyName} style={{ textDecoration: 'none', color: "black" }}
                            className="link"
                            to={`/product/${keyName}`}>
                            <h4 style={{ textDecoration: 'none', color: 'black', fontSize: '20px', fontFamily: 'italic' }}>{shoe.name}</h4>
                            <img src={shoe.img} height={150} alt="shoe" />
                            <p style={{ textDecoration: 'none', color: 'black' }}>Rs: {shoe.price} Only</p>
                            <Typography>
                                <Tooltip title="Add to Cart">
                                <Link key={keyName} style={{ textDecoration: 'none', color: "black" }}
                                    to={`/cart/${keyName}`}>
                                    <p style={{ textDecoration: 'none', color: 'black', marginLeft: '250px' }}><ShoppingCartTwoToneIcon /></p>
                                </Link>
                                </Tooltip>
                                
                            </Typography>
                        </Link>

                    )
                })}
            </div>
        </div>
    );
}

export default Product;