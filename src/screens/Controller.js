import React from "react";
import Home from "../screens/home/Home";
import Details from "../screens/details/Details";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookShow from "../screens/bookshow/BookShow";
import Confirmation from "../screens/confirmation/Confirmation";
import Header from "../common/header/Header";

const Controller = () => {
  const baseUrl = "/api/v1/";

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          path="/movie"
          element={<Details />}
        />
        <Route
          path="/bookshow/:id"
          element={<BookShow />}
        />
        <Route
          path="/confirm/:id"
          element={<Confirmation />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Controller;
