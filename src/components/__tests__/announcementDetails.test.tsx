import "@testing-library/jest-dom";
import { AnnouncementDetailsElement } from "../announcementDetails";
import { mockAnnouncements } from "../../mocks/mockData";
import { renderWithRouter } from "../testUtils/functions";

describe("AnnouncementDetailsElement", () => {
  it("renders the announcement details", () => {
    const { getByText, getByTestId } = renderWithRouter(
      <AnnouncementDetailsElement announcement={mockAnnouncements[0]} isShelter={false} />
    );

    expect(
      getByText(`Created: ${mockAnnouncements[0].creationDate.toDateString()}`)
    ).toBeInTheDocument();
    expect(
      getByText(
        `Last Update: ${mockAnnouncements[0].lastUpdateDate.toDateString()}`
      )
    ).toBeInTheDocument();
    expect(getByText(mockAnnouncements[0].title!)).toBeInTheDocument();
    expect(getByText(mockAnnouncements[0].description!)).toBeInTheDocument();
    expect(getByTestId("followIcon")).toBeInTheDocument();
  });

  it("does not render follow button when the view is for a shelter", () => {
    const { queryByTestId } = renderWithRouter(
      <AnnouncementDetailsElement announcement={mockAnnouncements[0]} isShelter={true} />
    );

    expect(queryByTestId("followIcon")).toBeNull();
  });
});
