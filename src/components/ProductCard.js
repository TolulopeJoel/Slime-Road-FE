import React from 'react';

export default function ProductCard({ product, source }) {
    return (
        <div className="card-deck">
            <div className="card bg-dark border-white h-100">
                <img className="card-img-top" src={`http://res.cloudinary.com/dj5u8jfst/${product.image}`} alt={`${product.name}`} height="400px" width="500px" />
                <div className="card-body">
                    <h5 className="card-title"><a href={`/${source}/${product.slug}/`}>{product.name}</a></h5>
                    <p className="card-text">{(product.creator.username)}</p>
                </div>
                <div className="card-footer border-white">
                    <div className='d-flex justify-content-between align-items-center'>
                        <small>${product.price}</small>
                        <small>${product.price}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}
