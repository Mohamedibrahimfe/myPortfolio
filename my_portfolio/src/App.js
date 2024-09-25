import "./App.css";
import React from "react";
import { Routes, Route, createRoutesFromElements, createBrowserRouter , RouterProvider, } from "react-router-dom";

import  Home  from "./pages/Home";
import  About  from "./pages/About";
import  Projects  from "./pages/Projects";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />
    </Route>
  )
)
function App() {
  return (
    
  )
}

export default App;
