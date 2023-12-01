import React from "react";

const Login = () => {
  return (
    <>
      <section>
        <div className="auth">
          <h1>Login</h1>
          <form action="">
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              placeholder="Username"
              required={true}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required={true}
            />
            <p>Forgot Password?</p>
            <button type="submit">Login</button>
          </form>
          <p className="login-message">Not a member? <span>Sign up</span></p>
        </div>
      </section>
    </>
  );
};

export default Login;
