import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Navbar from "./pages/components/Navbar";
import Main from "./pages/components/Main";
import Footer from "./pages/components/Footer";
import Loader from "./Extra/Loader";
import { ProductContext } from "./Contexts/ProductContexts";

const App = () => {
  //Defining the main states of our program
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //Fetching data using tanstack React Query
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products/");
      return data;
    },
  });
  //Using the states returned by react query
  //useQuery returns an object consisting of key: isLoading,isError
  //#Destructuring it(above)
  let main;
  if (isLoading)
    main = (
      <div>
        <Loader />
      </div>
    );
  else if (isError) main = <div>Error fetching data</div>;
  else main = <Main data={data} />;

  return (
    //Using ContextAPI to avoid prop drilling and make global states
    <ProductContext.Provider value={{ products, setProducts, cart, setCart }}>
      <Navbar />
      {main}
      <Footer />
    </ProductContext.Provider>
  );
};
export default App;
