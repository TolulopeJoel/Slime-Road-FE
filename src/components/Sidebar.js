import React from "react";


export default function Sidebar() {
    return (
        <>
            <div className="sidebar border border-1 border-dark">
                <div className="logo">
                    <a href=""><h1>Slime Road</h1></a>
                </div>
                <a href='' className="active">Home</a>
                <a href=''>Products</a>
                <a href=''>Library</a>
                <a href=''>Payouts</a>
            </div>
        </>
    )
}