import { fireEvent, render, act } from "@testing-library/react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { NewAnnouncement } from "..";
import { defaultTheme } from "../../../../styles/theme";

const mockRender = (element: ReactNode,) => {
  return render(
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter >
          {element}
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

it('renders without crashing', () => {
  const screen = mockRender(<NewAnnouncement />);
  screen.getByRole('heading', { name: /new announcement/i });
  screen.getByTestId(/title-input/i);
  screen.getByTestId(/description-input/i);
  // screen.getByTestId(/pet-input/i);
  screen.getByRole('button', { name: /add announcement/i });
});

// it('handles title input changes correctly', () => {
//   const screen = mockRender(<NewAnnouncement />);
//   const titleInput = screen.getByTestId(/title-input/i) as HTMLInputElement;
//
//   fireEvent.change(titleInput, { target: { value: 'Test Announcement' } });
//   expect(titleInput.value).toBe("Test Announcement");
// });
//
// it('handles direction input changes correctly', () => {
//   const screen = mockRender(<NewAnnouncement />);
//   const titleInput = screen.getByTestId(/description-input/i) as HTMLInputElement;
//
//   fireEvent.change(titleInput, { target: { value: 'Test description' } });
//   expect(titleInput.value).toBe("Test description");
// });

// it('handles pet input changes correctly', () => {
//   act(() => {
//     const screen = mockRender(<NewAnnouncement />);
//     // const titleInput = screen.getByTestId(/pet-input/i) as HTMLInputElement;
//   })
// });
