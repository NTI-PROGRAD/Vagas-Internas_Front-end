import { useEffect, useCallback, } from "react";
import { useNavigate, } from "react-router-dom";
import { isAuthenticated, } from "../../util/authentication";

function HomePage()
{
  const navigator = useNavigate();

  const checkAuthentication = useCallback(async () => {
    const { validAuthentication, } = await isAuthenticated();
    console.log(`validAuthentication = ${validAuthentication}`,);
    if (!validAuthentication) navigator("/login",);
  }, [navigator,],);

  useEffect(() => { checkAuthentication(); }, [checkAuthentication,],);

  return (
    <div className="home-page">
      <h1>Home</h1>
    </div>
  );
}

export default HomePage;