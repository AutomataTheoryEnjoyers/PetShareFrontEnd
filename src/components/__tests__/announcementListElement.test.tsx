import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockAnnouncement } from "../testUtils/mockData";
import { AnnouncementListElement } from "../announcementListElement";
import { renderWithRouter } from "../testUtils/functions";

test("renders announcementListElement component", async () => {
  const {} = renderWithRouter(
    <AnnouncementListElement announcement={mockAnnouncement} />
  );

  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(mockAnnouncement.title);
  expect(
    screen.getByText(mockAnnouncement.pet.name, { exact: false })
  ).toBeInTheDocument();
  expect(
    screen.getByText(mockAnnouncement.pet.breed, { exact: false })
  ).toBeInTheDocument();
});
