import React from 'react'
import Home from './pages/Home'
import ScrollToTop from "react-scroll-to-top";


// import {
//   createBrowserRouter, createRoutesFromElements, Route,
//   RouterProvider,
// } from "react-router-dom";
// import RootLayout from './root/RootLayout';
// import Portfolio from './pages/Portfolio';



// const router = createBrowserRouter(createRoutesFromElements(
//   <Route element={<RootLayout />}>
//     <Route path="/" element={<Home />}></Route>
//     <Route path='/portfolio' element={<Portfolio />}></Route>
//   </Route>
// ))

function App() {

  return (
    <>
    <Home/>
    <ScrollToTop smooth/>
      {/* <RouterProvider router={router} /> */}
    </>
  )
}

export default App