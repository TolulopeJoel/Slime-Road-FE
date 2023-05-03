import React from "react";


export default function Home() {
    return (
        <>
            {/* Navigation bar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">Slime Road</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signup">Sign Up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <!-- Main content --> */}
            <main className="bg-white pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="">
                                <h1 className="display-4"><b>Welcome to Slime Road</b></h1>
                                <p className="lead">The Ultimate Platform for Digital Creators!</p>
                                <p>Slime Road is an easy-to-use digital application that enables creators to sell their digital products directly to their audience. With Slime Road, creators can showcase their products in a customizable storefront and sell them securely to customers across the globe.</p>
                                <a href="/shop" className="btn btn-success p-3">Visit Shop</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={require('../assets/images/header.png')} alt="Slime Road" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="bg-light py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="text-center display-5 p-4 my-5"><b>Why Choose Slime Road?</b></h2>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-md-4">
                                <h4 className="text-success">Secure Payment Processing</h4>
                                <p>Slime Road ensures that all transactions are safe and secure with industry-standard security protocols. Creators can accept payments in multiple currencies and through various payment gateways, including credit card and PayPal.</p>
                            </div>
                            <div className="col-md-4">
                                <h4 className="text-success">Customer Data Management</h4>
                                <p>Slime Road provides creators with powerful tools to manage their customer data, including order tracking, customer support, and analytics. With these tools, creators can monitor customer behavior and gain insights into how to improve their products and marketing strategies.</p>
                            </div>
                            <div className="col-md-4">
                                <h4 className="text-success">Flexible and Customizable</h4>
                                <p>Slime Road is designed to be flexible and customizable. Creators can set their own pricing, choose which products to offer, and customize their storefront to match their brand identity. The application showcases creators' products in the most effective way possible, increasing the chances of making a sale.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="text-center display-5 p-4 mt-5"><b>What Can You Sell on Slime Road?</b></h2>
                                <p className="lead text-center mb-5">Slime Road allows creators to sell a wide range of digital products, including:</p>
                                <ul>
                                    <li>Music</li>
                                    <li>Ebooks</li>
                                    <li>Courses</li>
                                    <li>Software</li>
                                    <li>And more!</li>
                                </ul>
                                <p className="my-4">Are you a digital creator looking for a platform to sell your products? Sign up for Slime Road today and start selling to your audience in a secure, customizable storefront. Slime Road empowers creators to focus on their passion for creating high-quality digital products while providing all the tools necessary to succeed.</p>
                                <a href="/signup" className="btn btn-success p-3">Join Slime Road</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </>
    )
}