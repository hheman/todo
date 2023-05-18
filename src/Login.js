import React, { useState } from 'react';
import { useAuth } from './AuthenticationProvider';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookie] = useCookies(['postLoginRedirect']);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username: email, password });
    const redirectPath = cookie.postLoginRedirect || '/';
    navigate(redirectPath);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
