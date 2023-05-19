import "@testing-library/jest-dom";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { usePostNewAdopter } from "../../mutations/PostNewAdopter";
import { usePostNewShelter } from "../../mutations/PostNewShelter";
import { usePatchAuth0 } from "../../mutations/usePatchAuth0";
import { UserData } from "../../../types/userData";
import { renderWithRouterAndQueryProvider } from "../../../components/testUtils/functions";
import { RegistrationPage } from "../register";

jest.mock("../../mutations/PostNewAdopter", () => ({
  usePostNewAdopter: jest.fn(),
}));

jest.mock("../../mutations/PostNewShelter", () => ({
  usePostNewShelter: jest.fn(),
}));

jest.mock("../../mutations/usePatchAuth0", () => ({
  usePatchAuth0: jest.fn(),
}));

describe("NewAdopter", () => {
  const userContextData = {
    userIdAuth0: "",
    userIdDB: "",
    accessToken: "",
    role: "unassigned",
  };

  beforeEach(() => {
    // reset mocks before each test
    jest.clearAllMocks();
  });

  it("renders the default version of the registration form (default is for Adopter)", () => {
    renderWithRouterAndQueryProvider(<RegistrationPage />);

    expect(
      screen.getByText(/Select a role for your account*/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Username:")).toBeInTheDocument();
    expect(screen.getByLabelText("E-Mail:")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone number:")).toBeInTheDocument();
    expect(screen.getByText("Required fields missing")).toBeInTheDocument();
    expect(screen.queryByPlaceholderText("Street")).toBeInTheDocument();
    expect(screen.queryByPlaceholderText("City")).toBeInTheDocument();
    expect(screen.queryByPlaceholderText("Province")).toBeInTheDocument();
    expect(
      screen.queryByPlaceholderText("Postal Code (XX-XXX)")
    ).toBeInTheDocument();
    expect(screen.queryByPlaceholderText("Country")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("changes the radio button to Shelter", () => {
    renderWithRouterAndQueryProvider(<RegistrationPage />);

    const radioInput = screen.getByLabelText(/Shelter/i);
    expect(radioInput).not.toBeChecked();
    fireEvent.click(radioInput);
    expect(radioInput).toBeChecked();
  });

  // it("calls usePostAdopter when the form is submitted for an Adopter", async () => {
  //   const mockPostNewAdopter = jest
  //     .fn()
  //     .mockResolvedValue({ response: { data: { id: "nigga" } } });
  //   const mockSetLoadingRegister = jest.fn();
  //   usePostNewAdopter.mockReturnValue(mockPostNewAdopter);
  //   renderWithRouterAndQueryProvider(<RegistrationPage />);

  //   const usernameInput = screen.getByLabelText("Username:");
  //   const emailInput = screen.getByLabelText("E-Mail:");
  //   const streetInput = screen.queryByPlaceholderText("Street") as HTMLElement;
  //   const cityInput = screen.queryByPlaceholderText("City") as HTMLElement;
  //   const provinceInput = screen.queryByPlaceholderText(
  //     "Province"
  //   ) as HTMLElement;
  //   const postalCodeInput = screen.queryByPlaceholderText(
  //     "Postal Code (XX-XXX)"
  //   ) as HTMLElement;
  //   const countryInput = screen.queryByPlaceholderText(
  //     "Country"
  //   ) as HTMLElement;
  //   const submitButton = screen.getByText("Submit");

  //   fireEvent.change(usernameInput, { target: { value: "Shub-Niggurath" } });
  //   fireEvent.change(emailInput, {
  //     target: { value: "thegoat@ofthewoods.com" },
  //   });
  //   fireEvent.change(streetInput, { target: { value: "Street" } });
  //   fireEvent.change(cityInput, { target: { value: "City" } });
  //   fireEvent.change(provinceInput, { target: { value: "Province" } });
  //   fireEvent.change(postalCodeInput, { target: { value: "00-000" } });
  //   fireEvent.change(countryInput, { target: { value: "Country" } });
  //   fireEvent.click(submitButton);

  //   await waitFor(() =>
  //     expect(mockPostNewAdopter).toHaveBeenCalledWith(
  //       {
  //         userName: "Shub-Niggurath",
  //         phoneNumber: "",
  //         email: "thegoat@ofthewoods.com",
  //         address: {
  //           street: "Street",
  //           city: "City",
  //           province: "Province",
  //           postalCode: "00-000",
  //           country: "Country",
  //         },
  //       },
  //       {
  //         onSettled: () => {
  //           jest.fn();
  //         },
  //       }
  //     )
  //   );
  // });
});
