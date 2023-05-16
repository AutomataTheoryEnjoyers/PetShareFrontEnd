import "@testing-library/jest-dom";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import { useMyPets } from "../../queries/myPets";
import { usePostPet } from "../../mutations/postPet";
import { NewPet } from "../newPet";
import { renderWithRouterAndQueryProvider } from "../../../components/testUtils/functions";


// mock useMyPets hook
jest.mock("../../queries/myPets", () => ({
    useMyPets: jest.fn(),
}));

// mock usePostAnnouncement hook
jest.mock("../../mutations/postPet", () => ({
    usePostPet: jest.fn(),
}));

describe("NewPet",  ()  => {
    const pets = [
        { id: "1", name: "Cat" },
        { id: "2", name: "Dog" },
        { id: "3", name: "Bird" },
    ];

    beforeEach(() => {
        // reset mocks before each test
        jest.clearAllMocks();
    });
    
    it("renders a form for creating a new announcement", () => {
        // mock useMyPets to return some pets
        useMyPets.mockReturnValue({ data: pets });

        renderWithRouterAndQueryProvider(<NewPet />);

        expect(screen.getByText("New Pet")).toBeInTheDocument();
        expect(screen.getByLabelText("Name:")).toBeInTheDocument();
        expect(screen.getByLabelText("Sex:")).toBeInTheDocument();
        expect(screen.getByLabelText("Species:")).toBeInTheDocument();
        expect(screen.getByLabelText("Breed:")).toBeInTheDocument();
        expect(screen.getByLabelText("Birthday:")).toBeInTheDocument();
        expect(screen.getByLabelText("Photo URL:")).toBeInTheDocument();
        expect(screen.getByLabelText("Description:")).toBeInTheDocument();
        expect(screen.getByText("Submit")).toBeInTheDocument();
    });

    it("calls usePostPet when the form is submitted", async () => {
        // mock useMyPets to return some pets
        useMyPets.mockReturnValue({ data: pets });
        const mockPostPet = jest.fn().mockResolvedValue('Success');

        usePostPet.mockReturnValue(mockPostPet);
        renderWithRouterAndQueryProvider(<NewPet />);

        const nameInput = screen.getByLabelText("Name:");
        const sexInput = screen.getByLabelText("Sex:");
        const speciesInput = screen.getByLabelText("Species:");
        const breedInput = screen.getByLabelText("Breed:");
        const birthdayInput = screen.getByLabelText("Birthday:");
        const photoUrlInput = screen.getByLabelText("Photo URL:");
        const descriptionInput = screen.getByLabelText("Description:");
        const submitButton = screen.getByText("Submit");

        fireEvent.change(nameInput, { target: { value: "New Pet" } });
        fireEvent.change(descriptionInput, {
            target: { value: "This is a new pet" },
        });
        fireEvent.change(sexInput, { target: { value: "Female" } });
        fireEvent.change(speciesInput, { target: { value: "testSpecies" } });
        fireEvent.change(breedInput, { target: { value: "testBreed" } });
        fireEvent.change(birthdayInput, { target: { value: '1990-05-13' } });
        fireEvent.change(photoUrlInput, { target: { value: "photoUrl" } });
        fireEvent.click(submitButton);
        await waitFor(()=>expect(mockPostPet).toHaveBeenCalledWith({
            Name: "New Pet",
            Description: "This is a new pet",
            Sex: "Female",
            Species : "testSpecies",
            Breed: "testBreed",
            Birthday: new Date('1990-05-13'),
            PhotoUrl : "photoUrl",
        }));
    });

    
});