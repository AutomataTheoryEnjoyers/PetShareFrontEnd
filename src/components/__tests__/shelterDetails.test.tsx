import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ShelterDetailsElement } from "../shelterDetails";
import { renderWithRouter } from "../testUtils/functions";
import { mockAnnouncement } from "../testUtils/mockData";

test("renders PetDetailsElement component", () => {
  const {} = renderWithRouter(
    <ShelterDetailsElement announcement={mockAnnouncement} />
  );

  expect(
    screen.getByText(mockAnnouncement.pet.shelter.fullShelterName)
  ).toBeInTheDocument();

  expect(
    screen.getByText(mockAnnouncement.pet.shelter.phoneNumber)
  ).toBeInTheDocument();

  expect(
    screen.getByText(mockAnnouncement.pet.shelter.email)
  ).toBeInTheDocument();

  expect(
    screen.getByText(mockAnnouncement.pet.shelter.address.street)
  ).toBeInTheDocument();
  expect(
    screen.getByText(mockAnnouncement.pet.shelter.address.province)
  ).toBeInTheDocument();
  expect(
    screen.getByText(mockAnnouncement.pet.shelter.address.country)
  ).toBeInTheDocument();
});
