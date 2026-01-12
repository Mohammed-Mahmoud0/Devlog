import React from "react";
import AppLayout from "./ui_components/AppLayout";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import CreatePostPage from "./pages/CreatePostPage";
import ProtectedRoute from "./ui_components/ProtectedRoute";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsername } from "./services/apiBlog";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [username, setUsername] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { data } = useQuery({
    queryKey: ["username"],
    queryFn: getUsername,
  });

  useEffect(
    function () {
      if (data) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUsername(data.username);
        setIsAuthenticated(true);
      }
    },
    [data]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              username={username}
              setUsername={setUsername}
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="profile/:username"
            element={<ProfilePage authUsername={username} />}
          />
          <Route
            path="blogs/:slug"
            element={
              <DetailsPage
                username={username}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route path="signup" element={<SignupPage />} />
          <Route
            path="create"
            element={
              <ProtectedRoute>
                <CreatePostPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="signin"
            element={
              <LoginPage
                setIsAuthenticated={setIsAuthenticated}
                setUsername={setUsername}
              />
            }
          />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
