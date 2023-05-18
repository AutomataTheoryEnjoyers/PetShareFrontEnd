import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { AnnouncementFilters } from "../types/announcementFilter";


export const DefaultFilterState = {
  location: [],
  breed: [],
  shelter: [],
  species: []
} as AnnouncementFilters;

type Props = {
  filters: AnnouncementFilters,
  onChange: (arg: Partial<AnnouncementFilters>) => void
}

export const AnnouncementFiltersForm = ({ filters, onChange }: Props) => {
  const [currentCity, setCurrentCity] = useState("");
  const [currentSpecies, setCurrentSpecies] = useState("");
  const [currentBreed, setCurrentBreed] = useState("");
  const [currentShelter, setCurrentShelter] = useState("");
  return (
    <FormContainer>
      <FieldsContainer>
        <AgeCategoryContainer>
          <CategoryTitle>Age</CategoryTitle>
          <NumberInput
            maxLength={2}
            type="text"
            placeholder="min age"
            value={filters.minAge}
            onChange={(e) => onChange({ minAge: e.target.value })}
            required
          />
          <NumberInput
            maxLength={2}
            type="text"
            placeholder="max age"
            value={filters.maxAge}
            onChange={(e) => onChange({ maxAge: e.target.value })}
            required
          />
        </AgeCategoryContainer>
        <CategoryContainer layoutId="city">
          <CategoryTitle>City</CategoryTitle>
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
        <CategoryContainer layoutId="species">
          <CategoryTitle>Species</CategoryTitle>
          <AnimatePresence>
            {filters.species.map((species) => (
              <Item
                key={species}
                onClick={() => {
                  onChange({ species: filters.species.filter((el) => el !== species) })
                }}
                layout
              >{species}</Item>
            ))}
            <NewPositionContainer layout>
              <Input
                maxLength={15}
                type="text"
                placeholder="Species name"
                value={currentSpecies}
                onChange={(e) => setCurrentSpecies(e.target.value)}
                required
              />
              <AddButton onClick={() => {
                if (currentSpecies.length === 0 || filters.species.includes(currentSpecies)) return;
                onChange({ species: [...filters.species, currentSpecies] })
                setCurrentSpecies("");
              }}><FontAwesomeIcon fontSize={30} icon={faPlus} /></AddButton>
            </NewPositionContainer>
          </AnimatePresence>
        </CategoryContainer>
        <CategoryContainer layoutId="breed">
          <CategoryTitle>Breed</CategoryTitle>
          <AnimatePresence>
            {filters.breed.map((breed) => (
              <Item
                key={breed}
                onClick={() => {
                  onChange({ breed: filters.breed.filter((el) => el !== breed) })
                }}
                layout
              >{breed}</Item>
            ))}
            <NewPositionContainer layout>
              <Input
                maxLength={15}
                type="text"
                placeholder="Breed name"
                value={currentBreed}
                onChange={(e) => setCurrentBreed(e.target.value)}
                required
              />
              <AddButton onClick={() => {
                if (currentBreed.length === 0 || filters.breed.includes(currentBreed)) return;
                onChange({ breed: [...filters.breed, currentBreed] })
                setCurrentBreed("");
              }}><FontAwesomeIcon fontSize={30} icon={faPlus} /></AddButton>
            </NewPositionContainer>
          </AnimatePresence>
        </CategoryContainer>
        <CategoryContainer layoutId="shelter">
          <CategoryTitle>Shelter</CategoryTitle>
          <AnimatePresence>
            {filters.shelter.map((shelter) => (
              <Item
                key={shelter}
                onClick={() => {
                  onChange({ shelter: filters.shelter.filter((el) => el !== shelter) })
                }}
                layout
              >{shelter}</Item>
            ))}
            <NewPositionContainer layout layoutId="a">
              <Input
                maxLength={15}
                type="text"
                placeholder="Shelter name"
                value={currentShelter}
                onChange={(e) => setCurrentShelter(e.target.value)}
                required
              />
              <AddButton
                onClick={() => {
                  if (currentShelter.length === 0 || filters.shelter.includes(currentShelter)) return;
                  onChange({ shelter: [currentShelter, ...filters.shelter] })
                  setCurrentShelter("");
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
  flex: 2;
  gap: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  transition: 2s all;
`

const CategoryTitle = styled.h3`
  margin: 0;
`

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`
