import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { usePostNewShelter } from "../../mutations/PostNewShelter";
import { usePostNewAdopter } from "../../mutations/PostNewAdopter";
import { NewShelter } from "../../../types/newShelter";
import { NewAdopter } from "../../../types/NewAdopter";
import { Navigate } from "react-router-dom";
import { UserContextType } from "../../../types/userContextType";
import { UserContext } from "../../../components/userContext";
import { MutationContextType } from "../../../types/mutationContext";
import { MutationContext } from "../../../components/mutationContext";
import { ClipLoader } from "react-spinners";

const REGEX_PHONENUMBER = /^[0-9]{9}$/ as RegExp;
const REGEX_POSTALCODE = /^[0-9]{2}[-]{1}[0-9]{3}$/ as RegExp;
const REGEX_EMAIL = /.+@.+\..+/ as RegExp;

export const RegistrationPage = () => {
  const { userData } = useContext<UserContextType>(UserContext);
  const { mutationData, setMutationData } =
    useContext<MutationContextType>(MutationContext);

  const [selectedRole, setSelectedRole] = useState<string>("adopter");
  const [userName, setUserName] = useState<string>("");
  const [fullShelterName, setFullShelterName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [validPhoneNumber, setValidPhoneNumber] = useState<boolean>(true);
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [validPostalCode, setValidPostalCode] = useState<boolean>(true);
  const [addressFilled, setAddressFilled] = useState<boolean>(false);
  const [requiredFilled, setRequiredFilled] = useState<boolean>(false);
  const [validForm, setValidForm] = useState<boolean>(false);
  const [isLoadingRegister, setLoadingRegister] = useState<boolean>(false);

  const { mutateNewAdopter, isErrorAdopter } = usePostNewAdopter();
  const { mutateNewShelter, isErrorShelter } = usePostNewShelter();

  useEffect(() => {
    if (phoneNumber === "") {
      setValidPhoneNumber(true);
      return;
    }
    const result = REGEX_PHONENUMBER.test(phoneNumber);
    setValidPhoneNumber(result);
  }, [phoneNumber]);

  useEffect(() => {
    if (email === "") {
      setValidEmail(true);
      return;
    }
    const result = REGEX_EMAIL.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    if (postalCode === "") {
      setValidPostalCode(true);
      return;
    }
    const result = REGEX_POSTALCODE.test(postalCode);
    setValidPostalCode(result);
  }, [postalCode]);

  useEffect(() => {
    const fields = [] as String[];
    const fieldsAddress = [
      country,
      province,
      city,
      street,
      postalCode,
    ] as String[];
    if (selectedRole === "adopter") {
      fields.push(userName, email);
    } else {
      fields.push(
        userName,
        fullShelterName,
        email,
        phoneNumber,
        country,
        province,
        city,
        street,
        postalCode
      );
    }
    const isRequiredFilled = fields.every((field) => field.trim() !== "");
    const isAddressFilled = fieldsAddress.every((field) => field.trim() !== "");
    setRequiredFilled(isRequiredFilled);
    setAddressFilled(isAddressFilled);
  }, [
    selectedRole,
    userName,
    fullShelterName,
    email,
    phoneNumber,
    country,
    province,
    city,
    street,
    postalCode,
  ]);

  useEffect(() => {
    const isValidForm =
      requiredFilled && validPhoneNumber && validEmail && validPostalCode;
    setValidForm(isValidForm);
  }, [requiredFilled, validPhoneNumber, validEmail, validPostalCode]);

  const useHandleSubmit = async () => {
    setMutationData({ mutationSuccessful: false });
    if (selectedRole === "adopter") {
      HandleAdopter();
    } else {
      HandleShelter();
    }
  };

  const HandleShelter = async () => {
    const newShelter = {
      userName: userName,
      fullShelterName: fullShelterName,
      phoneNumber: phoneNumber,
      email: email,
      address: {
        country: country,
        province: province,
        city: city,
        street: street,
        postalCode: postalCode,
      },
    } as NewShelter;

    setLoadingRegister(true);
    mutateNewShelter(newShelter, {
      onSettled: () => {
        setLoadingRegister(false);
      },
    });
  };

  const HandleAdopter = async () => {
    const newAdopter = {
      userName: userName,
      phoneNumber: phoneNumber,
      email: email,
      address: {
        country: country,
        province: province,
        city: city,
        street: street,
        postalCode: postalCode,
      },
    } as NewAdopter;

    setLoadingRegister(true);
    mutateNewAdopter(newAdopter, {
      onSettled: () => {
        setLoadingRegister(false);
      },
    });
  };

  return (
    <AnimatedPage>
      {/* mutationSuccessful is false throughout the registration process, only being set to 'true', when the Auth0 PATCH goes through */}
      {mutationData?.mutationSuccessful &&
        (userData?.role === "adopter" || userData?.role === "shelter") && (
          <Navigate to="/accountSuccessfullyCreated" />
        )}
      <Container>
        <Header>Looks like it's your first time in our app</Header>
        <Header>Please fill in the missing info about yourself</Header>
        <ColumnContainer>
          {isErrorAdopter ||
            (isErrorShelter && (
              <WarningText>
                Looks like there's been an error while processing your info.
                Please try submitting the form again
              </WarningText>
            ))}
          <ColumnContainerInside id="role">
            <Title>Select a role for your account:</Title>
            <RadioButtonRowContainer id="role-radio-button-adopter">
              <Input
                type="radio"
                value="adopter"
                id="role-radio-button-adopter-input"
                checked={selectedRole === "adopter"}
                onChange={(e) => setSelectedRole(e.target.value)}
              />
              <TextDetails htmlFor="role-radio-button-adopter-input">
                Adopter
              </TextDetails>
            </RadioButtonRowContainer>
            <RadioButtonRowContainer id="role-radio-button-shelter">
              <Input
                type="radio"
                value="shelter"
                id="role-radio-button-shelter-input"
                checked={selectedRole === "shelter"}
                onChange={(e) => setSelectedRole(e.target.value)}
              />
              <TextDetails htmlFor="role-radio-button-shelter-input">
                Shelter
              </TextDetails>
            </RadioButtonRowContainer>
          </ColumnContainerInside>
          <ColumnContainerInside id="username">
            <RowContainer>
              <Title htmlFor="username-input">Username:</Title>
              {userName.trim() === "" && (
                <WarningText>Field required</WarningText>
              )}
            </RowContainer>
            <DescriptionArea
              rows={1}
              maxLength={100}
              id="username-input"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </ColumnContainerInside>
          {selectedRole === "shelter" && (
            <MovingGroup
              id="shelter"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible,
              }}
            >
              <Separator />
              <RowContainer>
                <Title htmlFor="shelter-input">Full Shelter Name:</Title>
                {selectedRole === "shelter" &&
                  fullShelterName.trim() === "" && (
                    <WarningText>Field required for a shelter</WarningText>
                  )}
              </RowContainer>
              <DescriptionArea
                rows={1}
                maxLength={255}
                id="shelter-input"
                value={fullShelterName}
                onChange={(e) => setFullShelterName(e.target.value)}
              />
            </MovingGroup>
          )}
          <MovingGroup layout>
            <ColumnContainerInside id="email">
              <RowContainer>
                <Title htmlFor="email-input">E-Mail:</Title>
                {email.trim() === "" && (
                  <WarningText>Field required</WarningText>
                )}
                {!validEmail && (
                  <WarningText>Invalid E-Mail address</WarningText>
                )}
              </RowContainer>
              <DescriptionArea
                rows={1}
                maxLength={255}
                id="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </ColumnContainerInside>
            <ColumnContainerInside id="phone-number">
              <RowContainer>
                <Title htmlFor="phone-number-input">Phone number:</Title>
                {selectedRole === "shelter" && phoneNumber.trim() === "" && (
                  <WarningText>Field required for a shelter</WarningText>
                )}
                {!validPhoneNumber && (
                  <WarningText>Invalid Phone Number</WarningText>
                )}
              </RowContainer>
              <DescriptionArea
                rows={1}
                maxLength={255}
                id="phone-number-input"
                value={phoneNumber}
                placeholder="only numbers, e.g.: 123456789"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </ColumnContainerInside>
            <ColumnContainerInside id="address">
              <RowContainer>
                <Title htmlFor="address-input">Address:</Title>
                {selectedRole === "shelter" && !addressFilled && (
                  <WarningText>Address is required for a shelter</WarningText>
                )}
                {!validPostalCode && (
                  <WarningText>Invalid Postal Code</WarningText>
                )}
              </RowContainer>
              <DescriptionArea
                rows={1}
                maxLength={255}
                id="address-input-street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Street"
                required
              />
              <DescriptionArea
                rows={1}
                maxLength={255}
                id="address-input-city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                required
              />
              <DescriptionArea
                rows={1}
                maxLength={255}
                id="address-input-province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                placeholder="Province"
                required
              />
              <DescriptionArea
                rows={1}
                maxLength={100}
                id="address-input-postal-code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="Postal Code (XX-XXX)"
                required
              />
              <DescriptionArea
                rows={1}
                maxLength={100}
                id="address-input-country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
                required
              />
            </ColumnContainerInside>
            <Separator />
            <ColumnContainerSubmit id="submit">
              <SubmitButton
                onClick={useHandleSubmit}
                disabled={!validForm || isLoadingRegister}
              >
                {isLoadingRegister ? <ClipLoader /> : <>Submit</>}
              </SubmitButton>
            </ColumnContainerSubmit>
          </MovingGroup>
        </ColumnContainer>
      </Container>
    </AnimatedPage>
  );
};

// Animation
const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

// Styles
const Container = styled.div`
  text-align: center;
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: space-around;
`;

const RowContainer = styled.div`
  margin-top: 5px;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-content: space-around;
`;

const RadioButtonRowContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-content: space-around;
`;

const ColumnContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  align-content: space-around;
  width: 60%;
`;

const ColumnContainerInside = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  align-content: space-around;
  width: 100%;
`;

const ColumnContainerSubmit = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  align-content: space-around;
  width: 100%;
`;

const MovingGroup = styled(motion.div)`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  align-content: space-around;
`;

const Header = styled.h1`
  text-align: left;
  display: block;
  margin: 3px;
  font-weight: 400;
`;

const Title = styled.label`
  margin: 0;
  padding: 2px;
  font-size: 18px;
`;

const TextDetails = styled.label`
  margin: 2px;
  font-size: 15px;
`;

const WarningText = styled.p`
  margin: 0;
  padding: 2px;
  font-size: 15px;
  color: ${(props) => props.theme.colors.tomato};
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 5px;
  display: block;
  height: 25px;
  font-size: 30px;
  font-weight: 400;
`;

const DescriptionArea = styled.textarea`
  width: 100%;
  flex: 1;
  padding: 6px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 5px;
  display: block;
  font-size: 15px;
  resize: none;
`;

const SubmitButton = styled.button`
  background: ${(props) => props.theme.colors.main};
  color: #fff;
  border: 0;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  margin-top: auto;
  height: 50px;
  width: 100px;
  font-size: 25px;
  font-weight: 700;
  transition: 0.5s all;
  :hover {
    background: ${(props) => props.theme.colors.darkGreen};
  }
  :disabled {
    background: ${(props) => props.theme.colors.darkgrey};
  }
`;

const Separator = styled.div`
  margin-top: 5px;
`;
