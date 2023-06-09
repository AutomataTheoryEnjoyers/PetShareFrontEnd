import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockAnnouncements } from "../../mocks/mockData";
import { AnnouncementListElement } from "../announcementListElement";
import { renderWithRouter } from "../testUtils/functions";

test("renders announcementListElement component", async () => {
  const {} = renderWithRouter(
    <AnnouncementListElement announcement={mockAnnouncements[0]} />
  );

  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(
    mockAnnouncements[0].title as string
  );
  expect(
    screen.getByText(mockAnnouncements[0].pet.name as string, { exact: false })
  ).toBeInTheDocument();
  expect(
    screen.getByText(mockAnnouncements[0].pet.breed as string, { exact: false })
  ).toBeInTheDocument();
});
