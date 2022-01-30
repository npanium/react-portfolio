import AboutSection from "./components/AboutSection";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="work" element={<OurWork />} />
        <Route path="work/:id" element={<MovieDetail />} />
        <Route path="contact/*" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
