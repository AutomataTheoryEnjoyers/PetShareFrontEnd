import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PetDetailsElement } from "../petDetailsElement";
import { renderWithRouter } from "../testUtils/functions";
import { mockAnnouncements } from "../../mocks/mockData";

test("renders PetDetailsElement component", () => {
    const { } = renderWithRouter(
        <PetDetailsElement pet={mockAnnouncements[0].pet} />
  );

  expect(screen.getByText(mockAnnouncements[0].pet.name)).toBeInTheDocument();

  expect(
    screen.getAllByText(mockAnnouncements[0].pet.species, { exact: false })
      .length
  ).toBeGreaterThan(0);

  expect(
    screen.getAllByText(mockAnnouncements[0].pet.breed, { exact: false }).length
  ).toBeGreaterThan(0);

  expect(
    screen.getAllByText(mockAnnouncements[0].pet.birthday.toDateString(), {
      exact: false,
    }).length
  ).toBeGreaterThan(0);

  expect(
    screen.getByText(mockAnnouncements[0].pet.description)
  ).toBeInTheDocument();
});
