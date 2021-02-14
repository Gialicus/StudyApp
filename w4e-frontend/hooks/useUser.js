import { useAuth0 } from "@auth0/auth0-react";
import {useState,useEffect} from "react"

const useUser = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);
    const [token, setToken] = useState();
    useEffect(() => {
        const getUserMetadata = async () => {
          const domain = "giali.eu.auth0.com";
      
          try {
            const accessToken = await getAccessTokenSilently({
              audience: `https://${domain}/api/v2/`,
              scope: "read:current_user",
            });
            setToken(accessToken)
            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
      
            const metadataResponse = await fetch(userDetailsByIdUrl, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
      
            const { user_metadata } = await metadataResponse.json();
            setUserMetadata(user_metadata);
          } catch (e) { 
            console.log(e.message);
          }
        };
      
        getUserMetadata();
      }, [isAuthenticated]);

      return {
          user,
          token,
          userMetadata
      }
}

export default useUser;