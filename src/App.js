import AboutSection from "./components/AboutSection";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";

import { Routes, Route, useLocation } from "react-router-dom";

//animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="work" element={<OurWork />} />
          <Route path="work/:id" element={<MovieDetail />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
