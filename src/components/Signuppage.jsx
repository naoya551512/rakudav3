import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './Signuppage.module.css';




const Signuppage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage,setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username, password);

    const response = await fetch('http://localhost:8000/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    console.log(response);

    const data = await response.json();

    if (response.status === 200) {
      alert('アカウントが作成されました！');
      navigate('/login');
    } else {
      setErrorMessage(data.message);
    }
  };

  return (
    <div className={styles.main}>
    <div className={styles.back}>
    <div className={styles.styledPaper}  >
      
      <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.buttonContainer}>
      <Typography variant="h5" className={styles.loginPageTitle}>新規会員登録</Typography>

        <TextField
          label="　ユーザーネーム"
          variant="standard"
          className={styles.text}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <TextField
          label="　パスワード"
          type="password"
          variant="standard"
          className={styles.text}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <div className={styles.errorContainer}>
        {errorMessage && (
          
            <Typography color="error" variant="body2" align="center">
              {errorMessage}
            </Typography>
            
          )}
        </div>
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth
          className={styles.signupBtn}
        >
          登録
        </Button>
        
        </div>

      </form>
    </div>
    </div>
    </div>
  );
};

export default Signuppage;
