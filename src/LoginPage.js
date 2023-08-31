import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("userData"));
    if (user && user.password === password) {
      setLoginMessage('Login successful');

      setTimeout(()=>navigate('/'), 2000);
    } else {
      setLoginMessage('Invalid mobile number or password');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <p>{loginMessage}</p>
    </div>
  );
}

export default LoginPage;
