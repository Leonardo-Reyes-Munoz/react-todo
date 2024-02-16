import { loginUser } from '../../utils/fetchUtil';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function LoginForm({ handleSetLoginForm }) {
  const formRef = React.useRef(null);
  let navigate = useNavigate();

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const response = await loginUser(formProps);
    formRef.current.reset();

    if (response && response.status === 200) {
      const token = response.data.token;
      const name = response.data.user.name;
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('userName', name);
      navigate('/dashboard');
    } else {
      toast.error(response);
      navigate('/');
      return;
    }
    return;
  }
  return (
    <div className="login-register">
      <Toaster />
      <h3>Submit login information:</h3>
      <form ref={formRef} onSubmit={handleLoginSubmit}>
        <div className="inputItem">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            autoComplete="email"
          />
        </div>
        <div className="inputItem">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            autoComplete="current-password"
          />
        </div>
        <div className="action">
          <button type="submit" className="login">
            Login
          </button>
          <button
            type="button"
            className="cancel"
            onClick={() => handleSetLoginForm()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
