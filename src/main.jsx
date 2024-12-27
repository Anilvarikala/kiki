import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import CardInner from "./Components/CardInner.jsx";
import About from "./Components/About.jsx";
import Profile from "./Components/Profile.jsx";
import Contact from "./Components/Contact.jsx";
import CreateAccountFirst from "./Components/CreateAccountFirst.jsx";
import { UserProvider } from "./Components/UserContext.jsx";
import ProfilePage from "./Components/ProfilePage.jsx"
import ShopKeeper from "./Components/Shopkeeper.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Login", element: <Login /> },
  { path: "/Signup", element: <Signup /> },
  { path: "/CardInner", element: <CardInner /> },
  { path: "/About", element: <About /> },
  { path: "/Profile", element: <Profile /> },
  { path: "/Contact", element: <Contact /> },
  { path: "/CreateAccount", element: <CreateAccountFirst/>} ,
  { path: "/ShopKeeper", element: <ShopKeeper/>} ,
  { path: "/ProfileFirst", element: <ProfilePage/>} ,
 


]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
