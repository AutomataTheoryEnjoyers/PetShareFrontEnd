import { faCross, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

export type FilterState = {
  minAge?: string,
  maxAge?: string,
  location: string[],
  breed: string[],
  species: string[],
  shelter: string[]
}

export const DefaultFilterState = {
  location: [],
  breed: [],
  shelter: [],
  species: []
} as FilterState;

type Props = {
  filters: FilterState,
  onChange: (arg: Partial<FilterState>) => void
}

export const AnnouncementFilters = ({ filters, onChange }: Props) => {
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
        <CategoryContainer>
          <CategoryTitle>City</CategoryTitle>
          {filters.location.map((location) => (
            <Item
              key={location}
            >{location} <FontAwesomeIcon icon={faCross} /></Item>
          ))}
          <NewPositionContainer>
            <Input
              maxLength={15}
              type="text"
              placeholder="City name"
              value={currentCity}
              onChange={(e) => setCurrentCity(e.target.value)}
              required
            />
            <AddButton onClick={() => {
              if (currentCity.length === 0) return;
              onChange({ location: [...filters.location, currentCity] })
              setCurrentCity("");
            }}><FontAwesomeIcon fontSize={30} icon={faPlus} /></AddButton>
          </NewPositionContainer>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>Species</CategoryTitle>
          {filters.species.map((species) => (
            <Item
              key={species}
            >{species} <FontAwesomeIcon icon={faCross} /></Item>
          ))}
          <NewPositionContainer>
            <Input
              maxLength={15}
              type="text"
              placeholder="Species name"
              value={currentSpecies}
              onChange={(e) => setCurrentSpecies(e.target.value)}
              required
            />
            <AddButton onClick={() => {
              if (currentSpecies.length === 0) return;
              onChange({ species: [...filters.species, currentSpecies] })
              setCurrentSpecies("");
            }}><FontAwesomeIcon fontSize={30} icon={faPlus} /></AddButton>
          </NewPositionContainer>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>Breed</CategoryTitle>
          {filters.breed.map((breed) => (
            <Item
              key={breed}
            >{breed} <FontAwesomeIcon icon={faCross} /></Item>
          ))}
          <NewPositionContainer>
            <Input
              maxLength={15}
              type="text"
              placeholder="Breed name"
              value={currentBreed}
              onChange={(e) => setCurrentBreed(e.target.value)}
              required
            />
            <AddButton onClick={() => {
              if (currentBreed.length === 0) return;
              onChange({ breed: [...filters.breed, currentBreed] })
              setCurrentBreed("");
            }}><FontAwesomeIcon fontSize={30} icon={faPlus} /></AddButton>
          </NewPositionContainer>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>Shelter</CategoryTitle>
          {filters.shelter.map((shelter) => (
            <Item
              key={shelter}
            >{shelter} <FontAwesomeIcon icon={faCross} /></Item>
          ))}
          <NewPositionContainer>
            <Input
              maxLength={15}
              type="text"
              placeholder="Shelter name"
              value={currentShelter}
              onChange={(e) => setCurrentShelter(e.target.value)}
              required
            />
            <AddButton onClick={() => {
              if (currentShelter.length === 0) return;
              onChange({ shelter: [...filters.shelter, currentShelter] })
              setCurrentShelter("");
            }}><FontAwesomeIcon fontSize={30} icon={faPlus} /></AddButton>
          </NewPositionContainer>
        </CategoryContainer>
      </FieldsContainer>
      <FormButton></FormButton>
    </FormContainer >
  );
}

const NewPositionContainer = styled.div`
  display: flex;
  gap: 3px;
  flex: 1;
`

const FormContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`

const Item = styled.div`
  flex: 1;
  background-color: grey;
  min-height: 40px;
`

const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #ddd;
  box-sizing: border-box;
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
  border-radius: 5px;
  background-color: green;
  flex: 1;
  color: white;
  display: grid;
  place-items: center;
  height: 40px;
`

const AgeCategoryContainer = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  gap: 5px;
  flex-direction: column;
`

const CategoryContainer = styled.div`
  flex: 2;
  gap: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
`

const CategoryTitle = styled.h3`
  margin: 0;
`

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`

const FormButton = styled.div`
  background-color: red;
  height: 50px;
  width: 200px;
`

