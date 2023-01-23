import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../Routes/Home";
import Radar from "../Routes/Radar";
import Header from "../Header/Header";

import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Header />
            </Layout>
          }
        >
          {["/", "/:city"].map((path) => (
            <Route index path={path} element={<Home />} key={path} />
          ))}
          <Route path=":city/radar" element={<Radar />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
