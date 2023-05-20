import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useCookies } from 'react-cookie';
import Home from './Home';
import Login from './Login';
import Layout from './layouts/Layout';
import LoginLayout from './layouts/LoginLayout';
import { useAuth } from './AuthenticationProvider';
import { Navigate, useNavigate, useLocation } from 'react-router';
import ItemsList from './ItemsList';
import ItemNote from './ItemNote';

const App = () => {
  return <AllRoutes />;
};

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="items">
          <Route index element={<ItemsList />} />
          <Route path=":itemId" element={<ItemNote />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
