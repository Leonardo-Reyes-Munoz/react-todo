function LoginForm({ handleSetLoginForm }) {
  return (
    <div className="login-register">
      <h3>Submit login information:</h3>
      <form>
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
