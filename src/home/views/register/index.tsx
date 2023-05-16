import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
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

  const useHandleSubmit = async () => {
    if (selectedRole === "adopter") {
      HandleAdopter();
    }
    else {
      HandleShelter();
    }
  }

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
      }
    } as NewShelter;

    setLoadingRegister(true);
    mutateNewShelter(newShelter, { onSettled: () => { setLoadingRegister(false); } }).then(
      (response: any) => {
        const updatedUserData = {
          ...userData,
          userIdDB: response.data.id,
          role: selectedRole,
        } as UserData;
        setUserData(updatedUserData);
        mutatePatchAuth0();
      }
    );
  }

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
      }
    } as NewAdopter;

    setLoadingRegister(true);
    mutateNewAdopter(newAdopter, { onSettled: () => { setLoadingRegister(false); } }).then(
      (response: any) => {
        const updatedUserData = {
          ...userData,
          userIdDB: response.data.id,
          role: selectedRole,
        } as UserData;
        setUserData(updatedUserData);
        mutatePatchAuth0();
      }
    );
  }

  return (
    <AnimatedPage>
      <Container>
        <Header>Looks like it's your first time in our app</Header>
        <Header>Please fill in the missing info about you</Header>
        <TextDetails>*required fields</TextDetails>
        <Title>Select a role for your account*:</Title>
        <RowContainer>
          <Input
            type="radio"
            value="adopter"
            checked={selectedRole === "adopter"}
            onChange={(e) => setSelectedRole(e.target.value)}
          />
          <TextDetails>Adopter</TextDetails>
        </RowContainer>
        <RowContainer>
          <Input
            type="radio"
            value="shelter"
            checked={selectedRole === "shelter"}
            onChange={(e) => setSelectedRole(e.target.value)}
          />
          <TextDetails>Shelter</TextDetails>
        </RowContainer>
        <Title>Username:</Title>
        <DescriptionArea
          maxLength={100}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {selectedRole === "shelter" &&
          <>
            <Title>Full Shelter Name:</Title>
            <DescriptionArea
              maxLength={255}
              value={fullShelterName}
              onChange={(e) => setFullShelterName(e.target.value)}
            />
          </>
        }
        <RowContainer>
          <Title>E-Mail:</Title>
          {!validEmail &&
            <WarningText>Invalid E-Mail address</WarningText>}
        </RowContainer>
        <DescriptionArea
          maxLength={255}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <RowContainer>
          <Title>Phone number:</Title>
          {!validPhoneNumber &&
            <WarningText>Invalid Phone Number</WarningText>}
        </RowContainer>
        <DescriptionArea
          maxLength={255}
          value={phoneNumber}
          placeholder="only numbers, e.g.: 123456789"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <>
          <Title>Address*:</Title>
          <DescriptionArea
            maxLength={255}
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Street"
            required
          />
          <DescriptionArea
            maxLength={255}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            required
          />
          <DescriptionArea
            maxLength={255}
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            placeholder="Province"
            required
          />
          <DescriptionArea
            maxLength={255}
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Postal Code (XX-XXX)"
            required
          />
          {!validPostalCode &&
            <WarningText>Invalid Postal Code</WarningText>}
          <DescriptionArea
            maxLength={255}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
            required
          />
        </>
        <SubmitButton
          onClick={useHandleSubmit}
          disabled={!validPhoneNumber || !validEmail || !validPostalCode || isLoadingRegister}
        >
          Submit
        </SubmitButton>
      </Container>
    </AnimatedPage>
  );
};

const Container = styled.div`
  text-align: center;
  gap: 5px;  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  align-content: space-around;
`

const RowContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-content: space-around;
`;

const Header = styled.h1`
  text-align: left;
  display: block;
  margin: 3px;
  font-weight: 400;
`;

const Title = styled.h1`
  margin: 0;
  padding: 2px;
  font-size: 18px;
`;

const TextDetails = styled.p`
  margin: 0;
  padding: 1px;
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