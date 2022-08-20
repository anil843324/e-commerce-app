// import { createStore } from "redux"
import { configureStore } from "@reduxjs/toolkit";
import rootReduer from "./rootReducer/rootReducer";

// const store=createStore(rootReduer )

const store = configureStore(rootReduer);

export default store;