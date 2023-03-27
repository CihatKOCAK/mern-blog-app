import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/home/HomePage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import { useContext, useEffect } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  //pathController -> change the path to the top of the page
  useEffect(() => {
    const pathController = () => {
      window.scrollTo(0, 0);
    };
    pathController();
    return () => {
      pathController();
    };
  }, []);

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/register" element={user ? <Homepage /> : <Register />} />
        <Route path="/login" element={user ? <Homepage /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
