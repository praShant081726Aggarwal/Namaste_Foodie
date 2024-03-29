import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorCom from "./components/ErrorCom";
import RestaurantMenu from "./components/RestaurantMenu";


///////AppLayout
const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>  
    </div>
  );
};

// create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// appRouter
const appRouter = createBrowserRouter([
  {path: "/", element : <AppLayout/>,
  children : [
    {path: "/", element: <Body/>},
    {path: "/about", element: <About/>},
    {path: "/contact", element: <Contact/>},
    {path: "/restaurants/:resId", element:<RestaurantMenu/>}
  ],
  errorElement: <ErrorCom/>}
]);
 

//render
root.render(<RouterProvider router={appRouter} />);

