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
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import ForgotPass from './pages/ForgotPassword/ForgotPass';
import Reset from './pages/ResetPass/Reset';
import Payment from './pages/Payment/Payment';
import Transactions from './pages/Transactions/Transactions';
import TableInvoice from './components/Tables/TableInvoice';
import Invoices from './pages/Invoices/Invoices';
import Support from './pages/Support/Support';
import PaymentId from './pages/PaymentID/PaymentId';
import { Toaster } from 'react-hot-toast';
import InvoicesId from './pages/Invoices/InvoicesId';

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
      <Toaster />

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
              <PageTitle title="Payments| Paywyer" />
              <Payment />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <PageTitle title=" Dashboard | Paywyer" />
              <ECommerce />
            </>
          }
        />
        {/* <Route
          path="/invoice"
          element={
            <>
              <PageTitle title="Invoice| Paywyer" />
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
          path="/invoice/create-invoice"
          element={
            <>
              <PageTitle title="Create Invoice | Paywyer" />
              <TableInvoice />
            </>
          }
        />
        <Route
          path="/invoice/list-invoice"
          element={
            <>
              <PageTitle title="Invoices | Paywyer" />
              <Invoices />
            </>
          }
        />
        <Route
          path="/invoice/invoiceId/:id"
          element={
            <>
              <PageTitle title="Invoice ID | Paywyer" />
              <InvoicesId />
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
          path={`/paymentId/:id`}
          element={
            <>
              <PageTitle title="View Payment | Paywyer" />
              <PaymentId />
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
          path="/supports"
          element={
            <>
              <PageTitle title="Support | Paywyer" />
              <Support />
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
