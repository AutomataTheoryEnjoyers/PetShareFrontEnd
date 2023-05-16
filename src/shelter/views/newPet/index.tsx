import { useState } from "react";
import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { usePostPet } from "../../mutations/postPet";

export const NewPet = () => {

    const [name, setName] = useState("");
    const [sex, setSex] = useState("Unknown");
    const [species, setSpecies] = useState("");
    const [breed, setBreed] = useState("");
    const [birthday, setBirthday] = useState(new Date());
    const [description, setDescription] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");

    const postPet = usePostPet();

    const handleBirthdayInputChange = (event: { target: { value: any; }; }) => {
        const inputBirthday = event.target.value;
        // Validate if the input value can be parsed as a date
        const isValid = !isNaN(Date.parse(inputBirthday));
        if (isValid) {
            setBirthday(new Date(inputBirthday));
        }
    }

    const useHandleSubmit = () => {
        
        const newPetData = {
            Name: name,
            Sex: sex,
            Species: species,
            Breed: breed,
            Birthday: birthday,
            Description: description,
            PhotoUrl: photoUrl,
        };
        postPet(newPetData);
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
                    <Select value={sex} onChange={(e) => setSex(e.target.value)} id="sex-input">
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
                        value={birthday ? birthday.toISOString().substr(0, 10) : ''}
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
                <div id="photoUrl">
                    <Label htmlFor="photoUrl-input">Photo URL:</Label>
                    <Input
                        id="photoUrl-input"
                        maxLength={200}
                        type="text"
                        value={photoUrl}
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        required
                    />
                </div>
                <div id="submit">
                    <SubmitButton onClick={useHandleSubmit}>Submit</SubmitButton>
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
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr 1fr;

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

  #photoUrl {
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
    align-self: end;
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
  
`

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
`;
