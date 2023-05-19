import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Link } from "../navbarLink";
import { renderWithRouter } from "../testUtils/functions";

describe("Navbar Link component", () => {
  test("renders with correct name prop", () => {
    const { getByText } = renderWithRouter(<Link path="/home" name="Home" />);
    expect(getByText("Home")).toBeInTheDocument();
  });

  // test("navigates to correct path when clicked", () => {
  //   const { getByText } = renderWithRouter(<Link path="/home" name="Home" />);
  //   fireEvent.click(getByText("Home"));
  //   expect(window.location.pathname).toBe("/home");
  // });

  test("has correct style when active", () => {
    const { getByText } = renderWithRouter(<Link path="/home" name="Home" />, [
      "/home",
    ]);
    expect(getByText("Home")).toHaveStyle("font-weight: 700");
  });
});
