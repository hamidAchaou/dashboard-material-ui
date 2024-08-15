import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import {
  Dashboard,
  Team,
  Barchart,
  Calendar,
  Contacts,
  Faq,
  Form,
  Geography,
  Invoices,
  LineChart,
  PieChart,
  MoreDetails,
} from "./pages";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/SignUp";

const routes = (
  <Routes>
    <Route
      path="/login"
      element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      }
    />
    <Route
      path="/signup"
      element={
        <PublicRoute>
          <SignUp />
        </PublicRoute>
      }
    />
    <Route
      path="/"
      element={
        <PrivateRoute>
          <App />
        </PrivateRoute>
      }
    >
      <Route index element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/bar" element={<Barchart />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/form" element={<Form />} />
      <Route path="/geography" element={<Geography />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/line" element={<LineChart />} />
      <Route path="/pie" element={<PieChart />} />
      <Route path="/details/:id" element={<MoreDetails />} />
      <Route path="/suivi/details/:id" element={<MoreDetails />} />
    </Route>
  </Routes>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>{routes}</Router>
  </React.StrictMode>
);
