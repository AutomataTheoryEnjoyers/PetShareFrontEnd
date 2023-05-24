import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from "./router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from "./components/userContext";
import { useState } from "react";
import { UserData } from "./types/userData";

// Auth0Provider variables
const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE as string;
const scope =
  "openid read:current_user update:current_user_metadata update:users_app_metadata";

function App() {
  // User context
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin + "/callback",
        audience: audience,
        scope: scope,
      }}
    >
      <UserContext.Provider value={{ userData, setUserData }}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <QueryClientProvider client={new QueryClient()}>
            <Router />
          </QueryClientProvider>
        </ThemeProvider>
      </UserContext.Provider>
    </Auth0Provider>
  );
}

export default App;
