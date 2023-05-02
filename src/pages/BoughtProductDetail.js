import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import { apiWithoutToken } from '../components/Api';

export default function BoughtProductDetail() {
    const { productSlug } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        apiWithoutToken.get(`/shop/${productSlug}`)
            .then((response) => {
                setProduct(response.data);
            }).catch((error) => {
                console.error(error);
            });
    }, [productSlug]);

    if (!product) {
        return <div><h3>Product is not available.</h3></div>;
    }


    return (
        <>
            <Sidebar activeLink='/shop/' />
            <div className="content">
                <div className="page-name">
                    <h1>{product.name}</h1>
                </div>
                <div className="row row-cols-1 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                    <div>
                        <p style={{ whiteSpace: 'pre-wrap' }}>{product.description}</p>
                    </div>

                    {/* Payment form */}
                    <div>
                        <p>Product link</p>
                        <a href={product.link} className="btn btn-lg btn-light">Check Product</a>
                    </div>
                </div>
            </div>
        </>
    )
}
