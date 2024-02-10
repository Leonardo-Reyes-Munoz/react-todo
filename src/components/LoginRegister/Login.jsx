function LoginForm({ handleSetLoginForm }) {
  return (
    <div className="login-register">
      <h3>Submit login information:</h3>
      <form>
        <div className="inputItem">
          <label htmlFor="email">Email:</label>
          <input type="email" id="name" name="email" />
        </div>
        <div className="inputItem">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <div className="action">
          <button className="login">Login</button>
          <button className="cancel" onClick={() => handleSetLoginForm()}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
