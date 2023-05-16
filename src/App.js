import React from "react";

// react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import navigations from "./navigations";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        {Object.values(navigations).map((nav, index) => (
          <Route key={index} exact path={nav.path} element={nav.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
