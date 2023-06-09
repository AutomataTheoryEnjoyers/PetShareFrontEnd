import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ImageElementDetails } from "../ImageElementDetails";
import { renderWithRouter } from "../testUtils/functions";
import { mockAnnouncements } from "../../mocks/mockData";

test("renders image component", () => {
  const {} = renderWithRouter(
    <ImageElementDetails pet={mockAnnouncements[0].pet} />
  );

  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", mockAnnouncements[0].pet.photoUrl);
});
