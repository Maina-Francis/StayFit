import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";

function App() {
  return (
    <Box width="400px">
      <Navbar />

      <Routes>
        {/* Route / to Homepage */}
        <Route path="/" element={<Home />} />
        {/* Route to a specific exercise based on their id */}
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </Box>
  );
}

export default App;
