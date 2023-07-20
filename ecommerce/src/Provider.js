import React from "react";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ProductContext } from "./Contexts/ProductContexts";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/ProductDetails/:id",
    element: <ProductDetails />,
  },
]);

const Provider = () => {
  //Defining the main states of our program
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        {/* //Using ContextAPI to avoid prop drilling and make global states */}
        <ProductContext.Provider
          value={{ products, setProducts, cart, setCart }}
        >
          <RouterProvider router={router} />
        </ProductContext.Provider>
      </QueryClientProvider>
    </div>
  );
};

export default Provider;
