import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { UserContextType } from "../../../types/userContextType";
import { UserContext } from "../../../components/userContext";
import { usePostNewShelter } from "../../mutations/PostNewShelter";
import { usePostNewAdopter } from "../../mutations/PostNewAdopter";
import { UserData } from "../../../types/userData";
import { NewShelter } from "../../../types/newShelter";
import { NewAdopter } from "../../../types/NewAdopter";
import { usePatchAuth0 } from "../../mutations/usePatchAuth0";

const REGEX_PHONENUMBER = /^[0-9]{9}$/ as RegExp;
const REGEX_POSTALCODE = /^[0-9]{2}[-]{1}[0-9]{3}$/ as RegExp;
const REGEX_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ as RegExp;

export const RegistrationPage = () => {
  const { userData, setUserData } = useContext<UserContextType>(UserContext);

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
  const [requiredFilled, setRequiredFiled] = useState<boolean>(false);
  const [validForm, setValidForm] = useState<boolean>(false);
  const [isLoadingRegister, setLoadingRegister] = useState<boolean>(false);

  const mutateNewAdopter = usePostNewAdopter();
  const mutateNewShelter = usePostNewShelter();
  const mutatePatchAuth0 = usePatchAuth0();

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
    const fields = [country, province, city, street, postalCode];
    const isRequiredFilled = fields.every((field) => field.trim() !== "");
    setRequiredFiled(isRequiredFilled);
  }, [country, province, city, street, postalCode]);

  useEffect(() => {
    const isValidForm =
      requiredFilled && validPhoneNumber && validEmail && validPostalCode;
    setValidForm(isValidForm);
  }, [requiredFilled, validPhoneNumber, validEmail, validPostalCode]);

  const useHandleSubmit = async () => {
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
    }).then((response: any) => {
      const updatedUserData = {
        ...userData,
        userIdDB: response.data.id,
        role: selectedRole,
      } as UserData;
      setUserData(updatedUserData);
      mutatePatchAuth0();
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
    }).then((response: any) => {
      const updatedUserData = {
        ...userData,
        userIdDB: response.data.id,
        role: selectedRole,
      } as UserData;
      setUserData(updatedUserData);
      mutatePatchAuth0();
    });
  };

  return (
    <AnimatedPage>
      <Container>
        <Header>Looks like it's your first time in our app</Header>
        <Header>Please fill in the missing info about yourself</Header>
        <ColumnContainer>
          <TextDetails>*required fields</TextDetails>
          <div id="role">
            <Title htmlFor="role-radio-button">
              Select a role for your account*:
            </Title>
            <RadioButtonRowContainer id="role-radio-button-adopter">
              <Input
                type="radio"
                value="adopter"
                id="role-radio-button-adopter"
                checked={selectedRole === "adopter"}
                onChange={(e) => setSelectedRole(e.target.value)}
              />
              <TextDetails>Adopter</TextDetails>
            </RadioButtonRowContainer>
            <RadioButtonRowContainer id="role-radio-button-shelter">
              <Input
                type="radio"
                value="shelter"
                id="role-radio-button-shelter"
                checked={selectedRole === "shelter"}
                onChange={(e) => setSelectedRole(e.target.value)}
              />
              <TextDetails>Shelter</TextDetails>
            </RadioButtonRowContainer>
          </div>
          <div id="username">
            <Title htmlFor="username-input">Username:</Title>
            <DescriptionArea
              rows={1}
              maxLength={100}
              id="username-input"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
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
              <Title htmlFor="shelter-input">Full Shelter Name:</Title>
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
            <div id="email">
              <RowContainer>
                <Title htmlFor="email-input">E-Mail:</Title>
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
            </div>
            <div id="phone-number">
              <RowContainer>
                <Title htmlFor="phone-number-input">Phone number:</Title>
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
            </div>
            <div id="address">
              <RowContainer>
                <Title htmlFor="address-input">Address*:</Title>
                {!requiredFilled && (
                  <WarningText>Required fields missing</WarningText>
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
              {!validPostalCode && (
                <WarningText>Invalid Postal Code</WarningText>
              )}
            </div>
            <Separator />
            <div id="submit">
              <SubmitButton
                onClick={useHandleSubmit}
                disabled={!validForm || isLoadingRegister}
              >
                Submit
              </SubmitButton>
            </div>
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

const TextDetails = styled.p`
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
