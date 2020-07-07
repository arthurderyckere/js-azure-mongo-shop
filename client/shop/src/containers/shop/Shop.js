import React from "react";
import {
    Route,
    Switch
} from "react-router-dom";
import { Home } from './Home';
import { Products } from "./Products";

function Shop() {
    return (<Switch>
        <Route path="/shop/home">
            <Home />
        </Route>
        <Route path="/shop/products">
            <Products />
        </Route>
    </Switch>
    )
}

export { Shop };