import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AnnouncementDetailsElement } from "../announcementDetails";
import { mockAnnouncement } from "../testUtils/mockData";
import { renderWithRouter } from "../testUtils/functions";

test("renders AnnouncementDetailsElement component", () => {
  const {} = renderWithRouter(
    <AnnouncementDetailsElement announcement={mockAnnouncement} />
  );

  expect(screen.getByRole("heading")).toHaveTextContent(
    mockAnnouncement.title && mockAnnouncement.title
  );
  expect(
    screen.getByText(`Created: ${mockAnnouncement.creationDate.toDateString()}`)
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      `Last Update: ${mockAnnouncement.lastUpdateDate.toDateString()}`
    )
  ).toBeInTheDocument();
  if (mockAnnouncement.closingDate != null)
    expect(
      screen.getByText(
        `Closing date: ${mockAnnouncement.closingDate.toDateString()}`
      )
    ).toBeInTheDocument();
  expect(screen.getByText(mockAnnouncement.description)).toBeInTheDocument();
  expect(screen.getByText(`ID: ${mockAnnouncement.id}`)).toBeInTheDocument();
});
