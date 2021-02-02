import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/form.css';

const SignInPage = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const login = event => {
    event.preventDefault();
    axios
      .get(
        `https://v1fh5fvz31.execute-api.us-west-2.amazonaws.com/dev/login?Mob%20No=${phone}`
      )
      .then(res => {
        if (res.data['User Data']['Designation'] === 'Supervisor')
          history.push('/dashboard');
        else alert(`${res.data}`);
        console.log(res);
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <div className="boxsignin">
      <div className="formdivsignin">
        <form onSubmit={login}>
          <div className="headingsignin">
            <h1 className="h1signin">Sign In</h1>
          </div>
          <label className="labelsignin">Phone no</label>
          <input
            type="tel"
            required
            className="inputsignin"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <label className="labelsignin">password</label>
          <input
            type="password"
            className="inputsignin"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" className="buttonsignin">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
