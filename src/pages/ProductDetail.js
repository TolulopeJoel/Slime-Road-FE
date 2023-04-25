import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import { apiWithoutToken } from '../components/Api'

export default function ProductDetail() {
    const { productSlug } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        apiWithoutToken.get(`/shop/${productSlug}`)
            .then((response) => {
                setProduct(response.data);
            }).catch((error) => {
                console.log(error);
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
            </div>
        </>
    )
}
