function RegisterForm({ handleSetRegisterForm }) {
  return (
    <div className="login-register">
      <h3>Please register:</h3>
      <form>
        <div className="inputItem">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="inputItem">
          <label htmlFor="email">Email:</label>
          <input type="email" id="name" name="email" />
        </div>
        <div className="inputItem">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <div className="action">
          <button className="register-form">Register</button>
          <button className="cancel" onClick={() => handleSetRegisterForm()}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
