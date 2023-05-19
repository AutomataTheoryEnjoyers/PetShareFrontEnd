import { useState } from "react";
import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { usePostAnnouncement } from "../../mutations/postAnnouncement";
import { useMyPets } from "../../queries/myPets";

export const NewAnnouncement = () => {
  const { data } = useMyPets();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [petID, setPetID] = useState(data ? data[0].id : "");

  const useHandleSubmit = () => {
    usePostAnnouncement({
      Description: description,
      Title: title,
      IDPet: petID,
    });
  };

  return (
    <AnimatedPage>
      <Container>
        <Header>New Announcement</Header>
        <div id="title">
          <Label htmlFor="title-input">Title:</Label>
          <Input
            maxLength={60}
            type="text"
            id="title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div id="description">
          <Label htmlFor="description-input">Description:</Label>
          <DescriptionArea
            maxLength={400}
            id="description-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div id="pet">
          <Label htmlFor="pet-input">Pet:</Label>
          <Select
            id="pet-input"
            value={petID}
            onChange={(e) => setPetID(e.target.value)}
          >
            {data?.map((pet) => (
              <Option key={pet.id} value={pet.id}>
                {pet.name + " (" + pet.id + ")"}
              </Option>
            ))}
          </Select>
        </div>
        <SubmitButton onClick={useHandleSubmit}>Submit</SubmitButton>
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
  grid-template: auto auto auto 1fr / 1fr 1fr 1fr;

  > div {
    display: flex;
    flex-direction: column;
  }

  #title {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }

  #pet {
    grid-column: 3 / 4;
    grid-row: 3 / 4;
  }

  #description {
    grid-column: 1 / 3;
    grid-row: 3 / 5;
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
  height: 40px;
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
  font-size: 25px;
  font-weight: 700;
  transition: 0.5s all;
  :hover {
    background: ${(props) => props.theme.colors.darkGreen};
  }
`;
