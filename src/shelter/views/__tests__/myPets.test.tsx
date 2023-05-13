import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { useMyPets } from "../../queries/myPets";
import { MyPets } from "../myPets";
import { mockPets } from "../../../mocks/mockData";
import { renderWithRouterAndQueryProvider } from "../../../components/testUtils/functions";

jest.mock("../../queries/myPets");

describe("MyPets component", () => {
    beforeEach(() => {
        useMyPets.mockReturnValue({
            data: mockPets,
            isLoading: false,
            error: null,
        });
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test("renders header text", () => {
        const { getByRole } = renderWithRouterAndQueryProvider(<MyPets />);
        const heading = getByRole("heading", { name: /my pets/i });
        expect(heading).toBeInTheDocument();
    });

    test("renders announcement list elements", () => {
        renderWithRouterAndQueryProvider(<MyPets />);
        expect(screen.getAllByRole("link")).toHaveLength(mockPets.length);
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
