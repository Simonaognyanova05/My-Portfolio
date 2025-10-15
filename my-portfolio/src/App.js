import { Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";


function App() {
  return (
    <>

      <AuthProvider>

        <div id="page-wraper">
          <Header />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/my-work" element={<MyWork />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </div>


      </AuthProvider>
    </>
  );
}

export default App;
