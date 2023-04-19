import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import { apiWithoutToken } from '../components/Api'


export default function Shop() {
    const [products, setProducts] = useState();

    useEffect(() => {
        apiWithoutToken.get('/products/')
            .then((response) => {
                setProducts(response.data);
            }).catch(error => console.log(error));
    }, []);

    return (
        <div>
            <Sidebar />
            <div className="content">
                <div className="page-name">
                    <h1>Shop</h1>
                </div>

                <div className='my-5'>
                    <div className='row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3'>
                        {products && products.map(product => (
                            <div className="card-deck">
                                <div className="card bg-dark border-white h-100">
                                    <img className="card-img-top" src={product.image} alt="Card image cap" height="400px" width="500px" />
                                    <div className="card-body">
                                        <h5 className="card-title"><a href={`/products/${product.slug}/`}>{product.name}</a></h5>
                                        <p class="card-text">{(product.creator.username)}</p>
                                    </div>
                                    <div className="card-footer border-white">
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <small>${product.price}</small>
                                            <small>${product.price}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}