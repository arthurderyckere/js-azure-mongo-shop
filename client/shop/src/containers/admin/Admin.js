import React from "react";
import {
    Route,
    Switch
} from "react-router-dom";
import { ProductForm } from "./ProductForm"
function Admin() {
    return (<Switch>
        <Route path="/admin/products">
            <ProductForm />
        </Route>
    </Switch>)
}

export { Admin };