import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import VerifyOtp from "./pages/auth/VerifyOtp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import RecoverPassword from "./pages/auth/RecoverPassword";
import LockScreen from "./pages/auth/LockScreen";
import WelcomeScreen from "./pages/auth/WelcomeScreen";
import Dashboard from "./pages/app/Dashboard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/welcome",
    element: <WelcomeScreen />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/recover-password",
    element: <RecoverPassword />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "/lock-screen",
    element: <LockScreen />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
