import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';

function Cart() {
    const { id } = useParams();
    const shoe = Shoes[id];

    if (!shoe)
        return <h2>Product Not Found!</h2>

    return (
        <div>
            <div className="link">
                {/* <h4>{shoe.name}</h4>
                <img src={shoe.img} height="300px" alt="shoe" />
                <p>{shoe.price}</p> */}
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Shoe Name</th>
                            <th scope="col">Picture</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        
                        <tr>
                            <th scope="row">1</th>
                            <td>{shoe.name}</td>
                            <td><img src={shoe.img} height="50px"/></td>
                            <td>{shoe.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Cart;