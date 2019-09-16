import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import App from "./App";

function MyRouter() {
    return (
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    );
}

export default MyRouter;
