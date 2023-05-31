import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockApplications } from "../../mocks/mockData";
import { renderWithRouter } from "../testUtils/functions";
import { ApplicationListElement } from "../applicationListElement";

test("renders applicationListElement component", async () => {
  const { } = renderWithRouter(
    <ApplicationListElement application={mockApplications[0]} />
  );

  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(
    mockApplications[0].announcement.title
  );
  expect(
    screen.getByText(mockApplications[0].announcement.pet.name, { exact: false })
  ).toBeInTheDocument();
  expect(
    screen.getByText(mockApplications[0].announcement.pet.breed, { exact: false })
  ).toBeInTheDocument();
});
