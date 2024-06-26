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
import MobileMoneyDeposit from "./pages/app/MobileMoneyDeposit";
import PaychantDeposit from "./pages/app/PaychantDeposit";
import MobileMoneyWithdrawal from "./pages/app/MobileMoneyWithdrawal";
import PaychantWithdrawal from "./pages/app/PaychantWithdrawal";
import Notifications from "./pages/app/Notifications";
import Settings from "./pages/app/Settings";
import UpdateWallet from "./pages/app/UpdateWallet";
import About from "./pages/app/About";
import WithdrawalOption from "./pages/app/WithdrawalOption";
import DepositOption from "./pages/app/DepositOption";
import SendBank from "./pages/app/SendBank";
import SendOption from "./pages/app/SendOption";
import SendMobileMoney from "./pages/app/SendMobileMoney";
import ExchangeDeposit from "./pages/app/ExchangeDeposit";
import ChangePassCode from "./pages/app/ChangePassCode";
import NewPassCode from "./pages/app/NewPassCode";
import PaymentDetails from "./pages/app/PaymentDetails";
import Home from "./pages/app/home/Home";
import Contact from "./pages/app/Contact";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
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
    path: "/send-options",
    element: <SendOption />,
  },
  {
    path: "/send-via-bank",
    element: <SendBank />,
  },
  {
    path: "/send-via-mobile-money",
    element: <SendMobileMoney />,
  },
  {
    path: "/deposit-options",
    element: <DepositOption />,
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
    path: "/deposit-via-exchange",
    element: <ExchangeDeposit />,
  },
  {
    path: "/withdrawal-options",
    element: <WithdrawalOption />,
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
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/update-wallet-details",
    element: <UpdateWallet />,
  },
  {
    path: "/change-passcode",
    element: <ChangePassCode />,
  },
  {
    path: "/new-passcode",
    element: <NewPassCode />,
  },
  {
    path: "/about-greybox",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/payment-details",
    element: <PaymentDetails />,
  },
]);
