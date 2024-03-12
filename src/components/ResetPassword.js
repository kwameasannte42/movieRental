// ResetPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../components/firebase';
import '../ResetPassword.css'; // Import the CSS file

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
    <div className="reset-password-container"> {/* Add a class to the container div */}
      <h2>Reset Password</h2>
      {error && <p>{error}</p>}
      <div className="reset-password-form"> {/* Add a class to the form */}
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button onClick={handlePasswordReset}>Reset Password</button>
      </div>
      <p>Remember your password? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default ResetPassword;
