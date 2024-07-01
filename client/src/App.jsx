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
import DeviceSettings from "./pages/Device Setting/DeviceSettings.jsx";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";
import Historical from "./pages/Histroical/Historical.jsx";
import Analytical from "./pages/Analytical/Analytical.jsx";
import DummyPage from "./pages/DummyPage/DummyPage.jsx";
import  Logout  from "./pages/Logout/Logout.jsx";
import LivePage from "./pages/LivePage/LivePage.jsx";
import NoPage from "./pages/NoPage.jsx";
import Login from "./pages/Login/Login.jsx";
import SubscriptionExpired from './pages/SubscriptionPage/SubscriptionExpired.jsx';



const PrivateRoute = ({ element }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [loading, setLoading] = useState(true);
  const backendUrl = 'http://localhost:5000';

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/auth/user`, {
          withCredentials: true,
          credentials: 'include',
        });
        const { user } = response.data;
        console.log(user, 46)
        if (user) {
          dispatch(login(user));
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [dispatch]);

  // While loading, you can return a loading indicator or null
  if (loading) {
    return null; // or return a loading spinner
  }

  // Once loading is complete, render the appropriate component based on authentication
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};


// const PrivateRoute = ({ element }) => {
//   const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
// console.log(isAuthenticated,26)
//   return isAuthenticated ? element : <Navigate to="/login" replace />;
// };

function App() {
  // const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);

  // const backendUrl = 'http://localhost:5000';

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const response = await axios.get(`${backendUrl}/api/auth/user`, {
  //         withCredentials: true,
  //         credentials: 'include',
  //       });
  //       const { user } = response.data;
  //       console.log(user,46)
  //       if (user) {
  //         dispatch(login(user));
  //       }
  //     } catch (error) {
  //       console.error('Error checking authentication:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   checkAuth();
  // }, [dispatch]);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={<PrivateRoute element={<Home />} />}
          />
          <Route
            path="/logout"
            element={<PrivateRoute element={<Logout />} />}
          />
          <Route
            path="/live/*"
            element={<PrivateRoute element={<LivePage />} />}
          />
          <Route
            path="/DeviceSettings"
            element={<PrivateRoute element={<DeviceSettings />} />}
          />
          <Route
            path="/profile"
            element={<PrivateRoute element={<UserProfile />} />}
          />
          <Route
            path="/dummypage"
            element={<PrivateRoute element={<DummyPage />} />}
          />
          <Route
            path="/subscription"
            element={<PrivateRoute element={<SubscriptionExpired />} />}
          />
          <Route
            path="/live/historical"
            element={<PrivateRoute element={<Historical />} />}
          />
          <Route
            path="/live/analytical"
            element={<PrivateRoute element={<Analytical />} />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={NoPage} />
      </Routes>
    </Router>
  );
}

export default App;
