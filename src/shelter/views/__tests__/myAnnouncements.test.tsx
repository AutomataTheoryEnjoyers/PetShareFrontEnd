import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { MyAnnouncements } from "../myAnnouncements";
import { mockAnnouncements } from "../../../mocks/mockData";
import { renderWithRouterAndQueryProvider } from "../../../components/testUtils/functions";
import { useMyAnnouncements } from "../../queries/myAnnouncements";

jest.mock("../../queries/myAnnouncements.ts");

describe("MyAnnouncements component", () => {
  beforeEach(() => {
    useMyAnnouncements.mockReturnValue({
      data: mockAnnouncements,
      isLoading: false,
      error: null,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("renders header text", () => {
    const { getByRole } = renderWithRouterAndQueryProvider(<MyAnnouncements />);
    const heading = getByRole("heading", { name: /my announcements/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders announcement list elements", () => {
    renderWithRouterAndQueryProvider(<MyAnnouncements />);
    expect(screen.getAllByRole("link")).toHaveLength(mockAnnouncements.length);
  });

  //   test("renders no announcements message if no data", () => {
  //     useMyAnnouncements.mockReturnValue({
  //       data: null,
  //       isLoading: false,
  //       error: null,
  //     });
  //     render(<MyAnnouncements />);
  //     expect(screen.getByText("No announcements found.")).toBeInTheDocument();
  //   });

  //   test("renders loading spinner while fetching data", () => {
  //     useMyAnnouncements.mockReturnValue({
  //       data: null,
  //       isLoading: true,
  //       error: null,
  //     });
  //     render(<MyAnnouncements />);
  //     expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  //   });

  //   test("renders error message if query fails", () => {
  //     useMyAnnouncements.mockReturnValue({
  //       data: null,
  //       isLoading: false,
  //       error: "Failed to fetch data.",
  //     });
  //     render(<MyAnnouncements />);
  //     expect(screen.getByText("Failed to fetch data.")).toBeInTheDocument();
  //   });
});
