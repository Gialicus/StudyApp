import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'primereact/button';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <Button label="Web 4 Enterpise" onClick={() => loginWithRedirect()}></Button>;
};

export default LoginButton;