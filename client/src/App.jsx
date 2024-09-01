import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice.jsx';
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import Home from "./pages/Home/Home.jsx";
import DeviceSettings from "./pages/DeviceSetting/DeviceSettings.jsx";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";
import Historical from "./pages/Histroical/Historical.jsx";
import Analytical from "./pages/Analytical/Analytical.jsx";
import DummyPage from "./pages/DummyPage/DummyPage.jsx";
import LivePage from "./pages/LivePage/LivePage.jsx";
import NoPage from "./pages/NoPage.jsx";
import Login from "./pages/Login/Login.jsx";
import SubscriptionExpired from './pages/SubscriptionPage/SubscriptionExpired.jsx';
import Signup from './pages/SignUp/Signup.jsx';


const PrivateRoute = ({ children }) => {
  const isLogedin = useSelector(state => state.user.isLogedin);
  return isLogedin ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route
            path="/"
            element={<PrivateRoute><Home /></PrivateRoute>}
          />
          <Route
            path="/live/*"
            element={<PrivateRoute><LivePage /></PrivateRoute>}
          />
          <Route
            path="/dashboard"
            element={<PrivateRoute><DeviceSettings /></PrivateRoute>}
          />
          <Route
            path="/profile"
            element={<PrivateRoute><UserProfile /></PrivateRoute>}
          />
          <Route
            path="/plant"
            element={<PrivateRoute><DummyPage /></PrivateRoute>}
          />
          <Route
            path="/subscription"
            element={<PrivateRoute><SubscriptionExpired /></PrivateRoute>}
          />
          <Route
            path="/live/:id/historical"
            element={<PrivateRoute><Historical /></PrivateRoute>}
          />
          <Route
            path="/live/:id/analytical"
            element={<PrivateRoute><Analytical /></PrivateRoute>}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
