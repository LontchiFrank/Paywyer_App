import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import ForgotPass from './pages/ForgotPassword/ForgotPass';
import Reset from './pages/ResetPass/Reset';
import Hero from './pages/Hero/Hero';
import Payment from './pages/Payment/Payment';
import Transactions from './pages/Transactions/Transactions';
import TableInvoice from './components/Tables/TableInvoice';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Sign In | Paywyer" />
              <SignIn />
            </>
          }
        />

        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | Paywyer" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | Paywyer" />
              <SignUp />
            </>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <>
              <PageTitle title="Forgot Password | Paywyer" />
              <ForgotPass />
            </>
          }
        />
        <Route
          path="/reset-password"
          element={
            <>
              <PageTitle title="Reset Password | Paywyer" />
              <Reset />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <PageTitle title="Reset Password | Paywyer" />
              <Payment />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <PageTitle title="eCommerce Dashboard | Paywyer" />
              <ECommerce />
            </>
          }
        />
        {/* <Route
          path="/invoice"
          element={
            <>
              <PageTitle title="Transactions| Paywyer" />
              <TableInvoice />
            </>
          }
        /> */}
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | Paywyer" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | Paywyer" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | Paywyer" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | Paywyer" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/transactions"
          element={
            <>
              <PageTitle title="Transactions| Paywyer" />
              <Transactions />
            </>
          }
        />

        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | Paywyer" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | Paywyer" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | Paywyer" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | Paywyer" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | Paywyer" />
              <Buttons />
            </>
          }
        />
        {/* <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
