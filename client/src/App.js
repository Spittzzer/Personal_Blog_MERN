import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Topbar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Error from "./pages/error/Error";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/write" element={user ? <Write /> : <Login />} />
          <Route path="/settings" element={user ? <Settings /> : <Login />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
