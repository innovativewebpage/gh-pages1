import React from "react";

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
