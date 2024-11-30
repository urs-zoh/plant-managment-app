import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPlantPage from "./pages/AddPlantPage";
import EditPlantPage from "./pages/EditPlantPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPlantPage />} />
          <Route path="/edit/:id" element={<EditPlantPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;