import { Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import About from "./components/About/About";
import Services from "./components/Services";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/Contact";
import Login from "./components/Login";
import AdminAbout from "./components/AdminAbout";


function App() {
  return (
    <>

      <AuthProvider>

        <div id="page-wraper">
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/my-work" element={<MyWork />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminAbout" element={<AdminAbout />} />



          </Routes>
        </div>


      </AuthProvider>
    </>
  );
}

export default App;
