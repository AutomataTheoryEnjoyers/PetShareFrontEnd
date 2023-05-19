import { render } from "@testing-library/react";
//import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/theme";
import { QueryClientProvider, QueryClient } from "react-query";

export function renderWithRouter(component: any, initialEntries: any = ["/"]) {
  return render(
    <ThemeProvider theme={defaultTheme}>
      <MemoryRouter initialEntries={initialEntries}>{component}</MemoryRouter>
    </ThemeProvider>
  );
}

export function renderWithRouterAndQueryProvider(
  component: any,
  initialEntries: any = ["/"]
) {
  return render(
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter initialEntries={initialEntries}>{component}</MemoryRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
