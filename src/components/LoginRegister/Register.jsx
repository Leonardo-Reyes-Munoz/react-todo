import { registerUser } from '../../utils/fetchUtil';
import React from 'react';

function RegisterForm({ handleSetRegisterForm }) {
  const formRef = React.useRef(null);

  async function handleRegisterSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    formRef.current.reset();
    const response = await registerUser(formProps);

    if (response && response.status === 201) {
      handleSetRegisterForm();
    }
  }

  return (
    <div className="login-register">
      <h3>Please register:</h3>
      <form ref={formRef} onSubmit={handleRegisterSubmit}>
        <div className="inputItem">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            autoComplete="name"
          />
        </div>
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
          <button type="submit" className="register-form">
            Register
          </button>
          <button
            type="button"
            className="cancel"
            onClick={() => handleSetRegisterForm()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
