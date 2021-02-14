import '../styles/globals.scss'
import 'primereact/resources/themes/vela-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'react-big-calendar/lib/sass/styles.scss';

import { Auth0Provider } from "@auth0/auth0-react"

function MyApp({ Component, pageProps }) {
  return <Auth0Provider
    domain="giali.eu.auth0.com"
    clientId="IPydPtp8K8cexx4A0IiufJSTosTgtCDH"
    audience="https://giali.eu.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
    redirectUri="http://localhost:3000/dashboard"
  >
    <Component {...pageProps} />
  </Auth0Provider>

}

export default MyApp
