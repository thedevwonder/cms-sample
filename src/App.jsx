import { useEffect, useState } from "react";
import "./App.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
  useNavigate,
} from "react-router-dom";
import auth from "./auth.firebase";
import Login from "./page/login/Login";
import Dashboard from "./page/dashboard/Dashboard";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <Login setCurrentUser={setCurrentUser} currentUser={currentUser} />
      ),
    },
    {
      path: "/",
      element: (
        <Dashboard setCurrentUser={setCurrentUser} currentUser={currentUser} />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
