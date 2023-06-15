import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ShelterDetailsElement } from "../shelterDetails";
import { renderWithRouter } from "../testUtils/functions";
import { mockAnnouncements } from "../../mocks/mockData";
import { QueryClient, QueryClientProvider } from "react-query";

test("renders PetDetailsElement component", () => {
    const queryClient = new QueryClient();
    const { } = renderWithRouter(
        <QueryClientProvider client={queryClient}>
            <ShelterDetailsElement shelter={mockAnnouncements[0].pet.shelter} isAdmin={false} />
        </QueryClientProvider >
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
