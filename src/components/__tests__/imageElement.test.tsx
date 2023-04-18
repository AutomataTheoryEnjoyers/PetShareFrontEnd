import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ImageElement } from "../ImageElement";
import { renderWithRouter } from "../testUtils/functions";
import { mockAnnouncement } from "../testUtils/mockData";

test("renders image component", () => {
  const {} = renderWithRouter(<ImageElement announcement={mockAnnouncement} />);

  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", mockAnnouncement.pet.photo);
});
