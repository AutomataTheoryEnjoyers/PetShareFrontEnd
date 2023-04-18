import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockApplication } from "../testUtils/mockData";
import { ApplicationContainerElement } from "../applicationListElement";
import { renderWithRouter } from "../testUtils/functions";

test("renders AnnouncementListElement component", async () => {
  const {} = renderWithRouter(
    <ApplicationContainerElement application={mockApplication} />
  );

  expect(
    screen.getByText(mockApplication.user.userName, { exact: false })
  ).toBeInTheDocument();
  expect(
    screen.getByText(mockApplication.user.phoneNumber, { exact: false })
  ).toBeInTheDocument();
  expect(
    screen.getByText(mockApplication.user.email, { exact: false })
  ).toBeInTheDocument();
});
