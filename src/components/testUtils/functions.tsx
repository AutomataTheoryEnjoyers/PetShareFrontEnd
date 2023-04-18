import { render } from "@testing-library/react";
//import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/theme";

export function renderWithRouter(component: any) {
  return render(
    <ThemeProvider theme={defaultTheme}>
      <MemoryRouter>{component}</MemoryRouter>
    </ThemeProvider>
  );
}
