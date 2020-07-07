import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/shop';
import { ProductItem } from '../../components/product-item/ProductItem';

function Products() {
    const [products, setProducts] = useState([]);

    const getProductList = async () => {
        const products = await getProducts();
        setProducts(products);
    }
    useEffect(() => {
        getProductList();
    }, []);

    return (
        <div style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "center"
        }}>
            {products.map(p => {
                return (
                    <ProductItem
                        key={p._id}
                        name={p.name["en"]}
                        description={p.description}
                        price={p.price["EUR"]}
                        image={p.images && Array.isArray(p.images) ? p.images[0] : null}
                    />
                )
            })}

        </div>)
};

export { Products };