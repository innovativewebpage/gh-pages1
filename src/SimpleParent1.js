import React, { useState } from "react";
import SimpleChild1 from "./SimpleChild1";

function SimpleParent1() {
    const [product, setProduct] = useState({
        id: 1,
        pName: "Samsung Galaxy",
        price: 80000,
        isAvailable: false,
    });

    const toggleFunction = (toggleValue) => {
        setProduct({ ...product, isAvailable: !toggleValue });
    };

    return <SimpleChild1 product={product} toggleFunction={toggleFunction} />;
}
export default SimpleParent1;
