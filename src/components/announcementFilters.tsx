import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export type FilterState = {
  minAge: string,
  maxAge: string,
  location: string[],
  breed: string[],
  species: string[],
  shelter: string[]
}

type Props = {
  filters: FilterState,
  onChange: (arg: Partial<FilterState>) => void
}

export const AnnouncementFilters = ({ filters, onChange }: Props) => {
  return (
    <FormContainer>
      <FieldsContainer>
        <AgeCategoryContainer>
          <CategoryTitle>Age</CategoryTitle>
          <NumberInput
            maxLength={2}
            type="number"
            placeholder="min age"
            value={filters.minAge}
            onChange={(e) => onChange({ minAge: e.target.value })}
            required
          />
          <NumberInput
            maxLength={2}
            type="number"
            placeholder="max age"
            value={filters.maxAge}
            onChange={(e) => onChange({ maxAge: e.target.value })}
            required
          />
        </AgeCategoryContainer>
        <CategoryContainer>
          <CategoryTitle>City</CategoryTitle>
          <NewPositionContainer>
            <Input
              maxLength={15}
              type="text"
              placeholder="City name"
              required
            />
            <AddButton><FontAwesomeIcon fontSize={30} icon={faPlus} /></AddButton>
          </NewPositionContainer>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>Species</CategoryTitle>
          <NewPositionContainer>
            <Input
              maxLength={15}
              type="text"
              placeholder="Species name"
              required
            />
            <AddButton><FontAwesomeIcon fontSize={30} icon={faPlus} /></AddButton>
          </NewPositionContainer>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>Breed</CategoryTitle>
          <NewPositionContainer>
            <Input
              maxLength={15}
              type="text"
              placeholder="Breed name"
              required
            />
            <AddButton><FontAwesomeIcon fontSize={30} icon={faPlus} /></AddButton>
          </NewPositionContainer>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>Shelter</CategoryTitle>
          <NewPositionContainer>
            <Input
              maxLength={2}
              type="text"
              placeholder="Shelter name"
              required
            />
            <AddButton><FontAwesomeIcon fontSize={30} icon={faPlus} /></AddButton>
          </NewPositionContainer>
        </CategoryContainer>
      </FieldsContainer>
      <FormButton></FormButton>
    </FormContainer>
  );
}

const NewPositionContainer = styled.div`
  display: flex;
  gap: 3px;
`

const FormContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`

const Input = styled.input`
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
  text-align: center;
  vertical-align: middle;
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

