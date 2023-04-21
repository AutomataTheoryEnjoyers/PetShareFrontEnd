import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useState } from "react";

export const RegistrationPage = () => {

    const [selectedRole, setSelectedRole] = useState<string>("adopter");

    const radioButtonOnChange = (event: any) => {
        setSelectedRole(event?.target.value);
    }


    return (
        <AnimatedPage>
            <Container>
                <Label>Looks like it's your first time in our app</Label>
                <Label>Please fill in the missing info about you</Label>
                <Label>Select a role for your account:</Label>
                <RadioButtonContainer>
                    <Input
                        type="radio"
                        value="adopter"
                        checked={selectedRole === "adopter"}
                        onChange={radioButtonOnChange}
                    />
                    <Label>Adopter</Label>
                </RadioButtonContainer>
                <RadioButtonContainer>
                    <Input
                        type="radio"
                        value="shelter"
                        checked={selectedRole === "shelter"}
                        onChange={radioButtonOnChange}
                    />
                    <Label>Shelter</Label>
                </RadioButtonContainer>

            </Container>
        </AnimatedPage>
    );
};

const Container = styled.div`
  text-align: center;
  gap: 10px;  
  display: flex;
  flex-direction: column;
`

const RadioButtonContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Header = styled.h1`
  margin-bottom: 20px;
  margin-top: 0;
`;
const Label = styled.label`
  text-align: left;
  display: block;
  margin: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px;
  display: block;
  height: 50px;
  font-size: 30px;
  font-weight: 400;
`;