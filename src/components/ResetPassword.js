// ResetPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from './firebase';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent. Check your inbox.');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      {error && <p>{error}</p>}
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button onClick={handlePasswordReset}>Reset Password</button>
      </div>
      <p>Remember your password? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default ResetPassword;
