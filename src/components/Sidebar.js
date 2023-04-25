import React from "react";

export default function Sidebar({ activeLink }) {

    return (
        <>
            <div className="sidebar border border-1 border-dark">
                <div className="logo">
                    <a href="">
                        <h1>Slime Road</h1>
                    </a>
                </div>
                <a
                    href="/shop/"
                    className={activeLink === "/shop/" ? "active" : ""}
                >
                    Shop
                </a>
                <a
                    href="/products/"
                    className={activeLink === "/products/" ? "active" : ""}
                >
                    Products
                </a>
                <a
                    href=""
                    className={activeLink === "/library/" ? "active" : ""}
                >
                    Library
                </a>
                <a
                    href="/payouts/"
                    className={activeLink === "/payouts/" ? "active" : ""}
                >
                    Payouts
                </a>
            </div>
        </>
    );
}
