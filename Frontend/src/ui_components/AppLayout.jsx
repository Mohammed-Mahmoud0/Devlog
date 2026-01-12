import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const AppLayout = ({
  isAuthenticated,
  setIsAuthenticated,
  username,
  setUsername,
}) => {
  useEffect(function () {
    if (localStorage.getItem("dark") === null) {
      localStorage.setItem("dark", "false");
    }
  }, []);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark") === "true"
  );
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("dark", String(!darkMode));
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="w-full bg-[#ffffff] dark:bg-[#181A2A]">
        <NavBar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          isAuthenticated={isAuthenticated}
          username={username}
          setIsAuthenticated={setIsAuthenticated}
          setUsername={setUsername}
        />
        <ToastContainer />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default AppLayout;
