import React from "react";
import "./productItem.css";

function ProductItem({ id, name, description, image, price }) {
    return (
        <div className="productItem">
            <h3>{name}</h3>
            <p>{description}</p>
            {image ?
                <img style={{ objectFit: "cover" }} src={image} alt={name} width={300} height={300} />
                : <div style={{ width: "300px", height: "300px", textAlign: "center", lineHeight: "300px" }}>no image</div>}
            <p><small>{price} EUR</small></p>
            <button>Buy</button>
        </div>
    )
};

export { ProductItem };