import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "../CounterSlice/CounterSlice"; // Make sure to provide the correct path
import productReducer  from "../ProductSlice/ProductSlice"; // Make sure to provide the correct path

import React from "react";

export const store = configureStore({
    reducer: {
        counter: counterReducer ,
        prodcuts : productReducer
    }
});
