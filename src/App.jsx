import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginForm from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
