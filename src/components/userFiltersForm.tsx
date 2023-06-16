import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { UserFilters } from "../types/userFilter";


export const DefaultFilterState = {
    location: [],
} as UserFilters;

type Props = {
    filters: UserFilters,
    onChange: (arg: Partial<UserFilters>) => void
}

export const UserFiltersForm = ({ filters, onChange }: Props) => {
    const [currentCity, setCurrentCity] = useState("");

    return (
        <FormContainer>
            <FieldsContainer>
                <AgeCategoryContainer>
                    <NumberInput
                        maxLength={200}
                        type="text"
                        placeholder="Username"
                        value={filters.userName}
                        onChange={(e) => onChange({ userName: e.target.value })}
                        required
                    />
                    
                </AgeCategoryContainer>
                <CategoryContainer layoutId="city">
                    <AnimatePresence>
                        {filters.location.map((location) => (
                            <Item
                                key={location}
                                onClick={() => {
                                    onChange({ location: filters.location.filter((el) => el !== location) })
                                }}
                                layout
                            >{location}</Item>
                        ))}
                        <NewPositionContainer layout >
                            <Input
                                maxLength={15}
                                type="text"
                                placeholder="City name"
                                value={currentCity}
                                onChange={(e) => setCurrentCity(e.target.value)}
                                required
                            />
                            <AddButton onClick={() => {
                                if (currentCity.length === 0 || filters.location.includes(currentCity)) return;
                                onChange({ location: [...filters.location, currentCity] })
                                setCurrentCity("");
                            }}><FontAwesomeIcon fontSize={30} icon={faPlus} /></AddButton>
                        </NewPositionContainer>
                    </AnimatePresence>
                </CategoryContainer>
                
            </FieldsContainer>
        </FormContainer >
    );
}

const NewPositionContainer = styled(motion.div)`
  display: flex;
  gap: 3px;
  flex: 1;
  max-height: 40px;
`

const Item = styled(motion.div)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.powderWhite};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  min-height: 40px;
  max-height: 40px;
  font-size: 20px;
  display: grid;
  place-items: center;
  :hover{
    color: red;
    text-decoration-line: line-through;
    background-color: ${(props) => props.theme.colors.lightTomato};
  }
`

const FormContainer = styled(motion.div)`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-bottom: 10px;
  height: auto;
`

const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 5px;
  display: block;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  flex: 4;
  -webkit-appearance: none;
  margin: 0;
  height: 40px;
`;

const NumberInput = styled.input`
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px;
  display: block;
  height: 30px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  -webkit-appearance: none;
  margin: 0;
  height: 40px;
`

const AddButton = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.main};
  flex: 1;
  color: white;
  display: grid;
  place-items: center;
  min-height: 40px;
  max-height: 40px;
  transition: 0.2s all;
  :hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.darkGreen};
  }
`

const AgeCategoryContainer = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  gap: 5px;
  flex-direction: column;
`

const CategoryContainer = styled(motion.div)`
  flex: 1;
  gap: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  transition: 2s all;
`

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`
