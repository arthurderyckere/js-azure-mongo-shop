import React from "react";
import { useForm } from "react-hook-form";
import { createProduct } from "../../services/shop";

function ProductForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {

        const createdProduct = await createProduct(
            {
                name: { "en": data.name },
                description: data.description,
                price: { [`${data.currency}`]: data.price }
            }
        );
        console.log(createdProduct);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" ref={register()} required />

            <label htmlFor="price">Price</label>
            <input id="price" name="price" type="number" ref={register()} required />

            <label htmlFor="currency">Currency</label>
            <input id="currency" name="currency" type="text" ref={register()} required />

            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" ref={register()} required />

            <button type="submit">Add Product</button>
        </form>
    )

};

export { ProductForm };