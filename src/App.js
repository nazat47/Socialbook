import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { NotFound } from "./pages/notFound/NotFound";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { currUser } = useContext(AuthContext);
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>

          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({children}) => {
    return currUser ? children : <Navigate to="/login" />;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={
          (<ProtectedRoute><Layout /></ProtectedRoute>)
        }>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    )
  );
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <ProtectedRoute>
  //       <Layout />
  //     </ProtectedRoute>
  //     ),
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/profile/:id",
  //         element: <Profile />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  // ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
