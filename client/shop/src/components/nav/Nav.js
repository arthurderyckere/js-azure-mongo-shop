import React from "react";
import "./Nav.css";

function Nav() {
    return (
        <nav>
            <ul>
                <li><a href="/shop/home">Home</a></li>
                <li><a href="/shop/products">Products</a></li>
            </ul>
        </nav>
    );
}

export { Nav };