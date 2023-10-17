import "./style.scss";

import UFPELogo from "../../assets/images/login-page/UFPE-Logo.png";

function Login()
{
  return (
    <div className="login-page">
      <div className="login-container">
        <img className="ufpe-logo" src={UFPELogo} />

        <h2 className="login-title">Vagas Internas</h2>

        <input className="login" type="text" placeholder="Login"/>
        <input className="password" type="password" placeholder="Senha"/>

        <button className="login-button">Efetuar Login</button>
      </div>
    </div>
  );
}

export default Login;