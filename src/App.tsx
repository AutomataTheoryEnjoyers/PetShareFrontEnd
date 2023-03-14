import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from "./router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={new QueryClient()}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
