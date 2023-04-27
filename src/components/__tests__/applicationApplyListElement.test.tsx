import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockApplications } from "../../mocks/mockData";
import { ApplicationApplyListElement } from "../applicationApplyListElement";
import { renderWithRouter } from "../testUtils/functions";

test("renders ApplicationApplyListElement component", async () => {
  const { } = renderWithRouter(
    <ApplicationApplyListElement application={mockApplications[0]} />
  );

  expect(
    screen.getByText(mockApplications[0].user.userName, { exact: false })
  ).toBeInTheDocument();
  expect(
    screen.getByText(mockApplications[0].user.phoneNumber, { exact: false })
  ).toBeInTheDocument();
  expect(
    screen.getByText(mockApplications[0].user.email, { exact: false })
  ).toBeInTheDocument();
});
