import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from "./router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";
import GlobalStyle from "./styles/global";


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <QueryClientProvider client={new QueryClient()}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
