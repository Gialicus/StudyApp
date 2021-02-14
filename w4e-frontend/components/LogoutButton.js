import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "primereact/button";

const LogoutButton = (props) => {
  const { logout } = useAuth0();

  return (
    <Button {...props} onClick={() => logout({ returnTo: window.location.origin })} />
  );
};

export default LogoutButton;