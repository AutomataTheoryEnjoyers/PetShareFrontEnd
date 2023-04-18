import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PetDetailsElement } from "../petDetailsElement";
import { renderWithRouter } from "../testUtils/functions";
import { mockAnnouncement } from "../testUtils/mockData";

test("renders PetDetailsElement component", () => {
  const {} = renderWithRouter(
    <PetDetailsElement announcement={mockAnnouncement} />
  );

  expect(screen.getByText(mockAnnouncement.pet.name)).toBeInTheDocument();

  expect(
    screen.getAllByText(mockAnnouncement.pet.species, { exact: false }).length
  ).toBeGreaterThan(0);

  expect(
    screen.getAllByText(mockAnnouncement.pet.breed, { exact: false }).length
  ).toBeGreaterThan(0);

  expect(
    screen.getAllByText(mockAnnouncement.pet.birthday.toDateString(), {
      exact: false,
    }).length
  ).toBeGreaterThan(0);

  expect(
    screen.getByText(mockAnnouncement.pet.description)
  ).toBeInTheDocument();
});
