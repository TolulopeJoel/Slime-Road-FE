import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import { apiWithoutToken } from '../components/Api';

export default function ProductDetail() {
    const { productSlug } = useParams();
    const [product, setProduct] = useState(null);

    const [email, setEmail] = useState("");
    const [price, setPrice] = useState();

    const [fieldErrors, setfieldErrors] = useState({});
    const [otherErrors, setotherErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        apiWithoutToken.get(`/shop/${productSlug}`)
            .then((response) => {
                setProduct(response.data);
            }).catch((error) => {
                console.error(error);
            });
    }, [productSlug]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await apiWithoutToken.post("/orders/", {
                product_id: product.id,
                email,
                price
            })
            navigate(`/shop/`)
        } catch (error) {
            if (error.response.data.detail) {
                setotherErrors([error.response.data.detail]);
            } else if (error.response.data.message) {
                setotherErrors([error.response.data.message]);
            } else if (error.response.data.non_field_errors) {
                setotherErrors(error.response.data.non_field_errors);
            } else {
                setfieldErrors(error.response.data);
            }
        }
    };

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
                        {otherErrors && Object.values(otherErrors).map((errorMessage) => {
                            return (
                                <div className="alert alert-danger w-100">{errorMessage}</div>
                            )
                        })}
                        <form onSubmit={handleSubmit}>

                            <div className="form-group">
                                {fieldErrors.email && (<div className="text-danger w-100">{fieldErrors.email}</div>)}
                                <input
                                    type="email"
                                    className="form-control bg-dark p-3 text-white my-4"
                                    id="email"
                                    name="email"
                                    value={email}
                                    placeholder='your@email.com'
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                {fieldErrors.price && (<div className="text-danger w-100">{fieldErrors.price}</div>)}
                                <input
                                    type="number"
                                    step="0.01"
                                    className="form-control bg-dark p-3 text-white my-4"
                                    id="price"
                                    name="price"
                                    value={price}
                                    placeholder={`$${product.price}+`}
                                    onChange={(event) => setPrice(event.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-light w-100 p-3">
                                Keep it!
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
