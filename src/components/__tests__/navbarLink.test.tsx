import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Link } from "../navbarLink";
import { renderWithRouter } from "../testUtils/functions";

const mockPath = "https://pzw17.ompzw.pl/";
const mockName = "ExtraLink";

test("renders navlink component", () => {
  const {} = renderWithRouter(<Link path={mockPath} name={mockName} />);

  const link = screen.getByText(mockName);
  expect(link).toBeInTheDocument();
});
