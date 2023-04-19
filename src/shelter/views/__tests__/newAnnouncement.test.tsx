import { NewAnnouncement } from "../newAnnouncement";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";
import { renderWithRouterAndQueryProvider } from "../../../components/testUtils/functions";
import { mockPets } from "../../../mocks/mockData";
import { usePostAnnouncement } from "../../mutations/postAnnouncement";

describe("new Announcement view", () => {
  test("renders NewAnnouncement component without crashing", async () => {
    renderWithRouterAndQueryProvider(<NewAnnouncement />);
  });

  test("displays the correct header", async () => {
    const { getByText } = renderWithRouterAndQueryProvider(<NewAnnouncement />);
    const header = getByText("New Announcement");
    expect(header).toBeInTheDocument();
  });

  test("displays the correct input fields", async () => {
    const { getByLabelText } = renderWithRouterAndQueryProvider(
      <NewAnnouncement />
    );
    const titleInput = getByLabelText("Title:");
    const descriptionInput = getByLabelText("Description:");
    const petSelect = getByLabelText("Pet:");
    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(petSelect).toBeInTheDocument();
  });

  test("updates the state when the user types in the input fields", async () => {
    const { getByLabelText } = renderWithRouterAndQueryProvider(
      <NewAnnouncement />
    );
    const titleInput = getByLabelText("Title:") as HTMLInputElement;
    const descriptionInput = getByLabelText("Description:") as HTMLInputElement;
    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Test Description" },
    });
    expect(titleInput.value).toBe("Test Title");
    expect(descriptionInput.value).toBe("Test Description");
  });

  // test("updates the state when the user selects a pet", async () => {
  //   const { getByLabelText } = renderWithRouterAndQueryProvider(
  //     <NewAnnouncement />
  //   );
  //   const petSelect = getByLabelText("Pet:") as HTMLInputElement;
  //   fireEvent.change(petSelect, { target: { value: mockPets[0].id } });
  //   expect(petSelect.value).toBe(mockPets[0].id);
  // });

  // test("calls the usePostAnnouncement hook when the user clicks the submit button", () => {
  //   const { getByText } = renderWithRouterAndQueryProvider(<NewAnnouncement />);
  //   const submitButton = getByText("Submit");
  //   expect(usePostAnnouncement).toHaveBeenCalled();
  // });
});
