import React from 'react';
import './Products.css';
import Card from './Card';
import prodData from '../data';

function Products() {
    return (
        <div className="container prod__container">
            <h1 className="t-center">Check out our amazing products</h1>
            <div className="all__products flex">
                {prodData.map((prod) => {
                    return (
                        <Card
                            key={prod.id} 
                            image={prod.image}
                            name={prod.name}
                            desc={prod.desc}
                            price={prod.price}
                            misc={prod.misc}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default Products;
