import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import './Loginpage.css';
import { useNavigate } from 'react-router-dom';  // useNavigate をインポート

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, ] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:8000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.status === 200) {
      alert('Login successful');
    } else {
        alert(data.message);
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signup');  // 新規会員登録ページに遷移
  };

  return (
    <div className="styled-paper">
      <form className="form" onSubmit={handleLogin}>
        <Typography variant="h5">ログイン</Typography>
        <TextField
          label="ユーザーネーム"
          variant="standard"
          className="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="パスワード"
          type="password"
          variant="standard"
          className="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <center><Button type="submit" className="login btn">ログイン</Button></center>
        <center><Button className="signup btn" onClick={handleSignUpRedirect}>新規会員登録はこちら</Button></center>
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      </form>
    </div>
  );
};

export default Loginpage;
