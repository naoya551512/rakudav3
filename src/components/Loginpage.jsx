import styles from './Loginpage.module.css';
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // useNavigate をインポート
import Icon from "../images/login.png";


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
    <div className={styles.back}>
    <div className={styles.styledPaper}  >
      
      <form className={styles.form} onSubmit={handleLogin}>
      <div className={styles.buttonContainer}>
      <Typography variant="h5" className={styles.loginPageTitle}>ログイン</Typography>
      <img src={Icon} className={styles.logo} alt=""/>

        <TextField
          label="ユーザーネーム"
          variant="standard"
          className={styles.text}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <TextField
          label="パスワード"
          type="password"
          variant="standard"
          className={styles.text}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
          <Button type="submit" className={styles.loginBtn}>ログイン</Button>
          <Button className={styles.signupBtn} onClick={handleSignUpRedirect}>新規会員登録はこちら</Button>
          {errorMessage && <Typography color="error">{errorMessage}</Typography>}
        </div>

      </form>
    </div>
    </div>

  );
};

export default Loginpage;
