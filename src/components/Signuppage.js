import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Signuppage.css';

const Signuppage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  //const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.status === 200) {
      alert('Login successful');
      // Navigate to another page or reset form if needed
    } else {
      setErrorMessage(data.message);
    }
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>新規会員登録</Typography>

        <TextField
          label="ユーザーネーム"
          variant="standard"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />

        <TextField
          label="パスワード"
          variant="standard"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />

        {errorMessage && (
          <Typography color="error" variant="body2" align="center" margin="normal">
            {errorMessage}
          </Typography>
        )}

        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth
        >
          登録
        </Button>
      </form>
    </div>
  );
};

export default Signuppage;
