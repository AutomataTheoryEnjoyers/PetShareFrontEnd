import { ChangeEvent, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { usePostPet } from "../../mutations/postPet";
import { NewPet } from "../../../types/newPet";
import { placeholderUrl } from "../../../placeholderUrl";
import { MutationContext } from "../../../components/mutationContext";
import { MutationContextType } from "../../../types/mutationContext";
import { ClipLoader } from "react-spinners";

export const NewPetForm = () => {
  const { mutationData, setMutationData } =
    useContext<MutationContextType>(MutationContext);

  const [name, setName] = useState<string>("");
  const [sex, setSex] = useState<string>("Unknown");
  const [species, setSpecies] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [birthday, setBirthday] = useState<Date>(new Date());
  const [description, setDescription] = useState<string>("");
  const [photoData, setPhotoData] = useState<File | null>(null);

  const [isFormValid, setIsFormValid] = useState(false);
  const [isPostingPet, setPostingPet] = useState(false);
  const postPet = usePostPet();

  useEffect(() => {
    setMutationData({ mutationSuccessful: false });
  }, [setMutationData]);

  const handleBirthdayInputChange = (event: { target: { value: any } }) => {
    const inputBirthday = event.target.value;
    // Validate if the input value can be parsed as a date
    const isValid = !isNaN(Date.parse(inputBirthday));
    if (isValid) {
      setBirthday(new Date(inputBirthday));
    }
  };

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0] as File;
      setPhotoData(img);
    }
  };

  useEffect(() => {
    const fields = [name, species, breed, description];
    const isFormValid = fields.every((field) => field.trim() !== "");
    setIsFormValid(isFormValid);
  }, [name, species, breed, description, photoData]);

  const useHandleSubmit = async () => {
    setMutationData({ mutationSuccessful: false });
    setPostingPet(true);
    const newPetData = {
      name: name,
      sex: sex,
      species: species,
      breed: breed,
      birthday: birthday,
      description: description,
      photoUrl: placeholderUrl,
    } as NewPet;
    postPet(
      { petData: newPetData, petPhotoData: photoData },
      { onSettled: () => setPostingPet(false) }
    );
  };

  return (
    <AnimatedPage>
      <Container>
        <Header>New Pet</Header>
        <div id="name">
          <Label htmlFor="name-input">Name:</Label>
          <Input
            id="name-input"
            maxLength={60}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div id="sex">
          <Label htmlFor="sex-input">Sex:</Label>
          <Select
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            id="sex-input"
          >
            <Option value="Unknown">Unknown</Option>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="DoesNotApply">Does not apply</Option>
          </Select>
        </div>
        <div id="species">
          <Label htmlFor="species-input">Species:</Label>
          <Input
            id="species-input"
            maxLength={60}
            type="text"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            required
          />
        </div>
        <div id="breed">
          <Label htmlFor="breed-input">Breed:</Label>
          <Input
            id="breed-input"
            maxLength={60}
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
          />
        </div>

        <div id="birthday">
          <Label htmlFor="birthday-input">Birthday:</Label>
          <Input
            id="birthday-input"
            type="date"
            value={birthday ? birthday.toISOString().substr(0, 10) : ""}
            onChange={handleBirthdayInputChange}
            required
          />
        </div>
        <div id="description">
          <Label htmlFor="description-input">Description:</Label>
          <DescriptionArea
            id="description-input"
            maxLength={400}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div id="photoData">
          <Label htmlFor="photoData-input">Photo:</Label>
          <Input
            id="photoData-input"
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => onImageChange(e)}
            required
          />
        </div>
        <div id="submit">
          <CenteredBox>
            <SubmitButton
              onClick={useHandleSubmit}
              disabled={!isFormValid || isPostingPet}
            >
              {isPostingPet ? <ClipLoader /> : <>Submit</>}
            </SubmitButton>
            {mutationData?.mutationSuccessful && <>Pet added successfully!</>}
          </CenteredBox>
        </div>
      </Container>
    </AnimatedPage>
  );
};

const Container = styled.div`
  text-align: center;
  display: grid;
  gap: 10px;
  height: 100%;
  height: min(60vh, 600px);
  grid-template-rows: auto auto auto auto auto auto auto auto auto auto auto auto;
  grid-template-columns: 2fr 3fr;

  > div {
    display: flex;
    flex-direction: column;
  }

  #name {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  #sex {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
  }

  #species {
    grid-row: 4 / 5;
    grid-column: 1 / 2;
  }

  #breed {
    grid-row: 5 / 6;
    grid-column: 1 / 2;
  }

  #birthday {
    grid-row: 6 / 7;
    grid-column: 1 / 2;
  }

  #photoData {
    grid-row: 7 / 8;
    grid-column: 1 / 2;
  }

  #description {
    grid-row: 2 / 8;
    grid-column: 2 / 3;
  }

  #submit {
    grid-row: 9 / 10;
    grid-column: 1 / 3;
    align-self: space-evenly;
    width: 150px;
    height: 40px;
    margin: auto;
  }
`;

const Header = styled.h1`
  margin-bottom: 20px;
  margin-top: 0;
  grid-column: 1 / 4;
`;

const Label = styled.label`
  text-align: left;
  display: block;
  margin: 5px;
`;

const DescriptionArea = styled.textarea`
  width: 100%;
  flex: 1;
  padding: 6px 10px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 5px;
  display: block;
  grid-column: 1 / 3;
  font-size: 20px;
  resize: none;
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

const Select = styled.select`
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 5px;
  display: block;
  height: 50px;
  font-size: 30px;
  font-weight: 400;
`;

const Option = styled.option`
  height: 40px;
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

const CenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-items: center;
`;
