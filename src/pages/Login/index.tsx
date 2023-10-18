import "./style.scss";

import UFPELogo from "../../assets/images/login-page/UFPE-Logo.png";
import { useState, } from "react";

function Login()
{
  const [login, setLogin,] = useState<string>("",);
  const [password, setPassword,] = useState<string>("",);

  return (
    <div className="login-page">
      <div className="login-container">
        <img className="ufpe-logo" src={UFPELogo} />

        <h2 className="login-title">Vagas Internas</h2>

        <form>
          <input
            className="login"
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e,) => setLogin(e.target.value,)}
          />
          <input
            className="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e,) => setPassword(e.target.value,)}
          />

          <button className="login-button" onClick={makeLogin}>Efetuar Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;