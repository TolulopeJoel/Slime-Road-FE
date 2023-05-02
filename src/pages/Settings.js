import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../components/Api";
import { useNavigate } from "react-router-dom";


export default function Settings() {
    const [product_name, setProductName] = useState();
    const [product_description, setProductDescription] = useState();
    const [product_price, setProductPrice] = useState();
    const [product_link, setProductLink] = useState();
    const [product_image, setProductImage] = useState();

    const [fieldErrors, setfieldErrors] = useState({});
    const [otherErrors, setotherErrors] = useState({});
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        navigate("/login");
    };

    const handleProductSubmit = async (event) => {
        event.preventDefault();
        try {
            await api.post("/shop/", {
                name: product_name,
                description: product_description,
                price: product_price,
                link: product_link,
                image: product_image,
            })
            navigate(`/products/`)
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

    return (
        <>
            <Sidebar activeLink='/settings/' />
            <div className="content">
                <div className="page-name">
                    <h1>Settings</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-sm-1">
                    <div className="col my-3">
                        <h2>Create Product</h2>
                        <div>
                            {otherErrors && Object.values(otherErrors).map((errorMessage) => {
                                return (
                                    <div className="alert alert-danger w-100">{errorMessage}</div>
                                )
                            })}
                            <form onSubmit={handleProductSubmit}>

                                <div className="form-group">
                                    {fieldErrors.name && (<div className="text-danger w-100">{fieldErrors.name}</div>)}
                                    <input
                                        type="text"
                                        className="form-control bg-dark p-3 text-white my-4"
                                        id="text"
                                        name="text"
                                        value={product_name}
                                        placeholder='Product name'
                                        onChange={(event) => setProductName(event.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    {fieldErrors.link && (<div className="text-danger w-100">{fieldErrors.link}</div>)}
                                    <input
                                        type="url"
                                        className="form-control bg-dark p-3 text-white my-4"
                                        id="url"
                                        name="url"
                                        value={product_link}
                                        placeholder='Product link (link to product)'
                                        onChange={(event) => setProductLink(event.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    {fieldErrors.description && (<div className="text-danger w-100">{fieldErrors.description}</div>)}
                                    <textarea
                                        className="form-control bg-dark p-3 text-white my-2"
                                        value={product_description}
                                        placeholder='Product description'
                                        onChange={(event) => setProductDescription(event.target.value)}
                                    />
                                </div>

                                <div className="form-group input-group">
                                    {fieldErrors.price && (<div className="text-danger w-100">{fieldErrors.price}</div>)}
                                    <span className="input-group-text p-3 my-4 bg-dark text-white" id="basic-addon1">$</span>
                                    <input
                                        type="number"
                                        step="0.01"
                                        className="form-control bg-dark p-3 text-white my-4"
                                        id="price"
                                        name="price"
                                        value={product_price}
                                        placeholder='Product price'
                                        aria-describedby="basic-addon1"
                                        onChange={(event) => setProductPrice(event.target.value)}
                                    />
                                </div>

                                <div class="my-4">
                                    <label for="formFile" class="form-label">Product image:</label>
                                    <input
                                        type="file"
                                        id="formFile"
                                        className="form-control bg-dark p-3 text-white"
                                        onChange={(event) => setProductImage(event.target.value)}
                                    />
                                </div>

                                <button type="submit" className="btn btn-secondary w-100 p-3">
                                    Create Magic!
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col my-3">
                        <h2>Other Settings</h2>
                        <button className="border-warning btn btn-dark nav-link w-100 p-3 my-4" onClick={handleLogout}>
                            Logout
                        </button>
                        <button className="border-danger btn btn-dark nav-link w-100 p-3 my-4" onClick={handleLogout}>
                            Delete account
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}