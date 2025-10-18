import React from "react";
import PropTypes from 'prop-types';
function SimpleChild1({ product, toggleFunction }) {
    return (
        <>
            <div style={{ border: "1px solid brown", padding: "20px" }}>
                <p>ID: {product.id}</p>
                <br />
                <p>Name : {product.pName}</p>
                <br />
                <p>Price :{product.price}</p>
                <br />
                <p style={{ color: product.isAvailable ? "green" : "red" }}>
                    {product.isAvailable ? "Available" : "Not-Available"}
                </p>

                <button onClick={() => toggleFunction(product.isAvailable)}>
                    Toggle
                </button>
            </div>
        </>
    );
}

export default SimpleChild1;
SimpleChild1.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        pName: PropTypes.string,
        price: PropTypes.number,
        isAvailable: PropTypes.bool
    }),
    toggleFunction: PropTypes.func
};
