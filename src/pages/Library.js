import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import api from '../components/Api';
import ProductCard from '../components/ProductCard';

export default function Library() {
    const [products, setProducts] = useState();

    useEffect(() => {
        api.get('/auth/user/library/')
            .then((response) => {
                console.log(response);
                setProducts(response.data);
            }).catch(error => console.log(error));
    }, []);

    return (
        <div>
            <Sidebar activeLink='/library/' />
            <div className="content">
                <div className="page-name">
                    <h1>Library</h1>
                </div>

                <div className='my-5'>
                    <div className='row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3'>
                        {products && products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
