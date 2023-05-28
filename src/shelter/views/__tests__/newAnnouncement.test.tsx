import "@testing-library/jest-dom";
import { screen, fireEvent, renderHook } from "@testing-library/react";
import { useMyPets } from "../../queries/myPets";
import { usePostAnnouncement } from "../../mutations/postAnnouncement";
import { NewAnnouncement } from "../newAnnouncement";
import { renderWithRouterAndQueryProvider } from "../../../components/testUtils/functions";

// mock useMyPets hook
jest.mock("../../queries/myPets", () => ({
  useMyPets: jest.fn(),
}));

// mock usePostAnnouncement hook
jest.mock("../../mutations/postAnnouncement", () => ({
  usePostAnnouncement: jest.fn(),
}));

describe("NewAnnouncement", () => {
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

    renderWithRouterAndQueryProvider(<NewAnnouncement />);

    expect(screen.getByText("New Announcement")).toBeInTheDocument();
    expect(screen.getByLabelText("Title:")).toBeInTheDocument();
    expect(screen.getByLabelText("Description:")).toBeInTheDocument();
    expect(screen.getByLabelText("Pet:")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("calls usePostAnnouncement when the form is submitted", () => {
    // mock useMyPets to return some pets
    useMyPets.mockReturnValue({ data: pets });

    // mock usePostAnnouncement to do nothing
    const { result } = renderHook(() => usePostAnnouncement());

    renderWithRouterAndQueryProvider(<NewAnnouncement />);

    const titleInput = screen.getByLabelText("Title:");
    const descriptionInput = screen.getByLabelText("Description:");
    const petSelect = screen.getByLabelText("Pet:");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(titleInput, { target: { value: "New Announcement" } });
    fireEvent.change(descriptionInput, {
      target: { value: "This is a new announcement" },
    });
    fireEvent.change(petSelect, { target: { value: "1" } });
    fireEvent.click(submitButton);

    expect(result.current).toHaveBeenCalledWith({
      title: "New Announcement",
      description: "This is a new announcement",
      petId: "1",
    });
  });

  // it("disables the submit button when the form is invalid", () => {
  //   // mock useMyPets to return some pets
  //   useMyPets.mockReturnValue({ data: pets });

  //   renderWithRouterAndQueryProvider(<NewAnnouncement />);

  //   const titleInput = screen.getByLabelText("Title:");
  //   const descriptionInput = screen.getByLabelText("Description:");
  //   const petSelect = screen.getByLabelText("Pet:");
  //   const submitButton = screen.getByText("Submit");

  //   // fill in the form with invalid values
  //   fireEvent.change(titleInput, { target: { value: "" } });
  //   fireEvent.change(descriptionInput, { target: { value: "" } });
  //   fireEvent.change(petSelect, { target: { value: "" } });

  //   // submit the form
  //   fireEvent.click(submitButton);

  //   expect(usePostAnnouncement).not.toHaveBeenCalled();
  //   expect(submitButton).toBeDisabled();
  // });
});
