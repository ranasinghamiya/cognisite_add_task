import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';


 function RegisterForm() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const userData = { name, mobile, password };

    try {
      localStorage.setItem('userData', JSON.stringify(userData));

      if (userData?.name && userData?.password) {
        alert('User registered successfully!');
        setTimeout(()=> navigate('/login'), 2000);
        // Clear the form fields
        setName('');
        setMobile('');
        setPassword('');
      } else {
        console.error('Error registering user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
