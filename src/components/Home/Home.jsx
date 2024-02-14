import './Home.css';
import React from 'react';
import LoginForm from '../LoginRegister/Login';
import RegisterForm from '../LoginRegister/Register';

function Home() {
  const [loginForm, setLoginForm] = React.useState(false);
  const [registerForm, SetRegisterForm] = React.useState(false);

  return (
    <div className="home">
      <div className="title">
        Task-Tackler
        <span className="material-symbols-outlined task-logo">task_alt</span>
      </div>
      {loginForm ? (
        <LoginForm handleSetLoginForm={() => setLoginForm(!loginForm)} />
      ) : registerForm ? (
        <RegisterForm
          handleSetRegisterForm={() => SetRegisterForm(!registerForm)}
        />
      ) : (
        <div className="action">
          <button className="login" onClick={() => setLoginForm(!loginForm)}>
            Login
          </button>
          <button
            className="register"
            onClick={() => SetRegisterForm(!registerForm)}
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
