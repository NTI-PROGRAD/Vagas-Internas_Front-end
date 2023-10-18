import { useState, useEffect, useCallback, FormEvent, } from "react";
import { useNavigate, } from "react-router-dom";
import { api, } from "../../lib/axios";
import { isAuthenticated, } from "../../util/authentication";
import UFPELogo from "../../assets/images/login-page/UFPE-Logo.png";

import "./style.scss";

function Login()
{
  const navigator = useNavigate();

  const [login, setLogin,] = useState<string>("",);
  const [password, setPassword,] = useState<string>("",);

  async function makeLogin(event: FormEvent<HTMLFormElement | EventTarget>,)
  {
    event.preventDefault();

    try
    {
      const response = await api.post("autenticacao/login",{ login, password, },);
      if (response.status === 200 && response.data.token) await storeToken(response.data.token,);
    }
    catch(error)
    {
      console.log(error,);
    }
  }

  async function storeToken(token: string,)
  {
    sessionStorage.setItem("vagas-internas-user-token", token,);
    if (await isAuthenticated()) navigator("/home",);
  }

  const checkAuthentication = useCallback(async () => {
    const { validAuthentication, } = await isAuthenticated();
    if (validAuthentication) navigator("/home",);
  }, [navigator,],);

  useEffect(() => { checkAuthentication(); }, [checkAuthentication,],);

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

          <button className="login-button" type="submit" onClick={makeLogin}>Efetuar Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;