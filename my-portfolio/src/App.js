import { Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/Contact";
import Login from "./components/Login";
import AdminEdu from "./components/AdminEdu";
import Logout from "./components/Logout";
import EditEducation from "./components/EditEducation";
import EditAbout from "./components/EditAbout";
import AdminServices from "./components/AdminServices";
import EditProject from "./components/EditProject";


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
            <Route path="/adminEdu" element={<AdminEdu />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/editEdu/:eduId" element={<EditEducation />} />
            <Route path="/editProject/:projectId" element={<EditProject />} />
            <Route path="/editAbout" element={<EditAbout />} />
            <Route path="/adminServices" element={<AdminServices />} />







          </Routes>
        </div>


      </AuthProvider>
    </>
  );
}

export default App;
