import "@testing-library/jest-dom";
import { AnnouncementDetailsElement } from "../announcementDetails";
import { mockAnnouncements } from "../../mocks/mockData";
import { renderWithRouter } from "../testUtils/functions";

test("renders AnnouncementDetailsElement component", () => {
  const { getByText } = renderWithRouter(
    <AnnouncementDetailsElement announcement={mockAnnouncements[0]} />
  );

  expect(
    getByText(`Created: ${mockAnnouncements[0].creationDate.toDateString()}`)
  ).toBeInTheDocument();
  expect(
    getByText(
      `Last Update: ${mockAnnouncements[0].lastUpdateDate.toDateString()}`
    )
  ).toBeInTheDocument();
  expect(
    getByText(`Status: ${mockAnnouncements[0].status}`)
  ).toBeInTheDocument();
  expect(getByText(`ID: ${mockAnnouncements[0].id}`)).toBeInTheDocument();
  if (mockAnnouncements[0].closingDate) {
    expect(
      getByText(
        `Closing date: ${mockAnnouncements[0].closingDate.toDateString()}`
      )
    ).toBeInTheDocument();
  }
  expect(getByText(mockAnnouncements[0].title)).toBeInTheDocument();
  expect(getByText(mockAnnouncements[0].description)).toBeInTheDocument();
});
