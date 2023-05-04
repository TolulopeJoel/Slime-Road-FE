import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import api from '../components/Api';
import ProductCard from '../components/ProductCard';

export default function UserProduct() {
    const [products, setProducts] = useState();

    useEffect(() => {
        api.get('/auth/user/products/')
            .then((response) => {
                setProducts(response.data);
            }).catch(error => console.log(error));
    }, []);

    return (
        <div>
            <Sidebar activeLink='/products/' />
            <div className="content">
                <div className="page-name">
                    <h1>Products</h1>
                </div>

                <div className='my-5'>
                    <div className='row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3'>
                        {products && products.map(product => (
                            <ProductCard key={product.id} product={product} url='library' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
