import { useState } from "react";
import { GlobalStyle } from "./Theme/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme/theme";
import { Btn } from "./Components/styles/ThemeButton.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Photos from "./Pages/Photos";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { PhotoGrid } from "./Components/PhotoGrid";
import NoMatch from "./Components/NoMatch";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="photos" element={<Photos />}>
              <Route index element={<PhotoGrid />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
        <Btn onClick={themeToggler}>
          {theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
        </Btn>
      </div>
    </ThemeProvider>
  );
}

export default App;
