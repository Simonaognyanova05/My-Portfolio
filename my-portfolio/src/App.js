import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/user/Header";
import Home from "./components/user/Home";
import Login from "./components/admin/Login";
import Footer from "./components/user/Footer";

import HomeAdmin from "./components/admin/HomeAdmin";
import Logout from "./components/admin/Logout";
import ContactAdmin from "./components/admin/Contacts/ContactAdmin";
import AboutAdmin from "./components/admin/AboutAdmin";
import ProjectsAdmin from "./components/admin/ProjectsAdmin";
import WelcomeUser from "./components/admin/WelcomeUser";
import MarkAsRead from "./components/admin/MarkAsRead";



function App() {
  return (
    <>

      <AuthProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/logout" element={<Logout />} />
          <Route path="/admin/" element={<HomeAdmin />} />
          <Route path="/admin/contacts" element={<ContactAdmin />} />
          <Route path="/admin/contacts/:messageId" element={<MarkAsRead />} />
          <Route path="/admin/about" element={<AboutAdmin />} />
          <Route path="/admin/projects" element={<ProjectsAdmin />} />
          <Route path="/admin/welcome" element={<WelcomeUser />} />
        </Routes>
        <Footer />

      </AuthProvider>
    </>
  );
}

export default App;
