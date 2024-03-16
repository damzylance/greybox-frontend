import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import VerifyOtp from "./pages/auth/VerifyOtp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import RecoverPassword from "./pages/auth/RecoverPassword";
import LockScreen from "./pages/auth/LockScreen";
import WelcomeScreen from "./pages/auth/WelcomeScreen";
import Dashboard from "./pages/app/Dashboard";
import AllTransaction from "./pages/app/AllTransaction";
import Send from "./pages/app/Send";
import MobileMoneyDeposit from "./pages/app/MobileMoneyDeposit";
import PaychantDeposit from "./pages/app/PaychantDeposit";
import MobileMoneyWithdrawal from "./pages/app/MobileMoneyWithdrawal";
import PaychantWithdrawal from "./pages/app/PaychantWithdrawal";
import Notifications from "./pages/app/Notifications";
import Receive from "./pages/app/Receive";
import Settings from "./pages/app/Settings";
import UpdateWallet from "./pages/app/UpdateWallet";
import About from "./pages/app/About";

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
  {
    path: "/all-transactions",
    element: <AllTransaction />,
  },
  {
    path: "/send",
    element: <Send />,
  },
  {
    path: "/deposit-via-mobile-money",
    element: <MobileMoneyDeposit />,
  },
  {
    path: "/deposit-via-paychant",
    element: <PaychantDeposit />,
  },
  {
    path: "/withdraw-via-mobile-money",
    element: <MobileMoneyWithdrawal />,
  },
  {
    path: "/withdraw-via-paychant",
    element: <PaychantWithdrawal />,
  },
  {
    path: "/notifications",
    element: <Notifications />,
  },
  {
    path: "/receive",
    element: <Receive />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/update-wallet-details",
    element: <UpdateWallet />,
  },
  {
    path: "/about-greybox",
    element: <About />,
  },
]);
