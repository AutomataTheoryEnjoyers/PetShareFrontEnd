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
            response: false,
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
        //expect(screen.getAllByRole("Name \"My Pets\"")).toHaveLength(mockPets.length);
    });

    
});
