import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { apiWithoutToken } from '../components/Api';
import ProductCard from '../components/ProductCard';

export default function Shop() {
    const [products, setProducts] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiWithoutToken.get('/shop/')
            .then((response) => {
                setLoading(false);
                setProducts(response.data);
            }).catch(error => console.log(error));
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Sidebar activeLink='/shop/' />
            <div className="content">
                <div className="page-name">
                    <h1>Shop</h1>
                </div>

                <div className='my-5'>
                    <div className='row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3'>
                        {products && products.map(product => (
                            <ProductCard key={product.id} product={product} source='products' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
