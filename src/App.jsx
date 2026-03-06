import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/about"; // Ensure capitalization matches your filename
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: block; /* Changed from flex to block for natural scrolling */
`;

const Content = styled.main`
  /* This prevents content from being hidden behind your fixed Navbar */
  padding-top: 64px; 
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Navbar />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Content>
      </AppWrapper>
    </Router>
  );
}

export default App;