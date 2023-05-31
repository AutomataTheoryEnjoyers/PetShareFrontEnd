import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ImageElement } from "../ImageElement";
import { renderWithRouter } from "../testUtils/functions";
import { mockAnnouncements } from "../../mocks/mockData";

test("renders image component", () => {
  const {} = renderWithRouter(
    <ImageElement pet={mockAnnouncements[0].pet} />
  );

  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", mockAnnouncements[0].pet.photo);
});
