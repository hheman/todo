import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';

// Create a context for authentication
const AuthenticationContext = createContext();

// Create a provider component
export const AuthenticationProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [token, setToken] = useState(cookies.token || null);
  const [error, setError] = useState(null);

  const login = async (userData) => {
    try {
      // Simulate an API call for authentication
      const response = await apiCall(userData);
      setToken(response.token);
      setCookie('token', response.token, { path: '/' });
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = () => {
    setToken(null);
    removeCookie('token', { path: '/' });
    setError(null);
  };

  return (
    <AuthenticationContext.Provider value={{ token, error, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

AuthenticationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Create a custom hook to use the AuthenticationContext
export const useAuth = () => {
  return useContext(AuthenticationContext);
};

// Simulate an API call for authentication
const apiCall = (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData.username === 'admin' && userData.password === 'password') {
        resolve({ token: 'fake-jwt-token' });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};
