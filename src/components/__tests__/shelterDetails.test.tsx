import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ShelterDetailsElement } from "../shelterDetails";
import { renderWithRouter } from "../testUtils/functions";
import { mockAnnouncements } from "../../mocks/mockData";

test("renders PetDetailsElement component", () => {
  const {} = renderWithRouter(
    <ShelterDetailsElement announcement={mockAnnouncements[0]} />
  );

  expect(
    screen.getByText(mockAnnouncements[0].pet.shelter.fullShelterName)
  ).toBeInTheDocument();

  expect(
    screen.getByText(mockAnnouncements[0].pet.shelter.phoneNumber)
  ).toBeInTheDocument();

  expect(
    screen.getByText(mockAnnouncements[0].pet.shelter.email)
  ).toBeInTheDocument();

  expect(
    screen.getByText(mockAnnouncements[0].pet.shelter.address.street)
  ).toBeInTheDocument();
  expect(
    screen.getByText(mockAnnouncements[0].pet.shelter.address.province)
  ).toBeInTheDocument();
  expect(
    screen.getByText(mockAnnouncements[0].pet.shelter.address.country)
  ).toBeInTheDocument();
});
