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
          <Input
            maxLength={2}
            type="number"
            placeholder="min age"
            value={filters.minAge}
            onChange={(e) => onChange({ minAge: e.target.value })}
            required
          />
          <Input
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
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>Species</CategoryTitle>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>Breed</CategoryTitle>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>Shelter</CategoryTitle>
        </CategoryContainer>
      </FieldsContainer>
      <FormButton></FormButton>
    </FormContainer>
  );
}

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
`;

const AgeCategoryContainer = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const CategoryContainer = styled.div`
  flex: 2;
  text-align: center;
`

const CategoryTitle = styled.h3`
  margin: 0;
`

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const FormButton = styled.div`
  background-color: red;
  height: 50px;
  width: 200px;
`

