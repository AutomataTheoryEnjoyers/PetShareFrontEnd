import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockApplications } from "../../mocks/mockData";
import { QueryClient, QueryClientProvider } from "react-query";
import { ApplicationApplyListElement } from "../applicationApplyListElement";
import { renderWithRouter } from "../testUtils/functions";

test("renders ApplicationApplyListElement component", async () => {
  // Create a new instance of QueryClient
  const queryClient = new QueryClient();

  renderWithRouter(
    <QueryClientProvider client={queryClient}>
      <ApplicationApplyListElement application={mockApplications[0]} />
    </QueryClientProvider>
  );

  expect(
    screen.getByText(mockApplications[0].adopter.userName, { exact: false })
  ).toBeInTheDocument();
  expect(
    screen.getByText(mockApplications[0].adopter.phoneNumber, { exact: false })
  ).toBeInTheDocument();
  expect(
    screen.getByText(mockApplications[0].adopter.email, { exact: false })
  ).toBeInTheDocument();
});
