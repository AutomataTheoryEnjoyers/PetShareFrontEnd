import React, { FormEventHandler, useState } from "react";
import styled from "styled-components";
import { postAnnouncement } from "../../mutations/postAnnouncement";
import { useMyPets } from "../../queries/myPets";

export const NewAnouncement = () => {
  const { data } = useMyPets();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [closingDate, setClosingDate] = useState('');
  const [petID, setPetID] = useState(data ? data[0].ID : "");

  const handleSubmit = () => {
    postAnnouncement({
      Description: description,
      Title: title,
      ClosingDate: new Date(closingDate),
      IDPet: petID
    })
  }

  return <Container>
    <Header>New Anouncement</Header>
    <div id="title">
      <Label >Title:</Label>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
    </div>
    <div id="description">
      <Label>Description:</Label>
      <DescriptionArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
    </div>
    <div id="closing-date">
      <Label>Closing date:</Label>
      <Input
        type="date"
        value={closingDate}
        onChange={(e) => setClosingDate(e.target.value)}
        min={new Date().toISOString().split("T").at(0)}
        required
      />
    </div>
    <div id="pet">
      <Label>Pet:</Label>
      <Select
        value={petID}
        onChange={(e) => setPetID(e.target.value)}>
        {data?.map((pet) => (
          <option key={pet.ID} value={pet.ID}>{pet.Name + " (" + pet.ID + ")"}</option>
        ))}
      </Select>
    </div>
    <SubmitButton onClick={handleSubmit}>Add announcement</SubmitButton>
  </Container>;
};

const Container = styled.div`
  text-align: center;
  display: grid;
  gap: 10px;
  height: 100%;
  height: min(60vh, 600px);
  grid-template: auto auto auto auto 1fr / 1fr 1fr 1fr;

  >div {
    display: flex;
    flex-direction: column;

  }

  #title{
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }

  #pet{
    grid-column: 3 / 4;
    grid-row: 4 / 5;
  }

  #description{
    grid-column: 1 / 3;
    grid-row: 3 / 6;
  }

  #closing-date{
    grid-column: 3 / 4;
    grid-row: 3 / 4;
  }

`

const Header = styled.h1`
  margin-bottom: 20px;
  margin-top: 0;
  grid-column: 1 / 4;
`

const Label = styled.label`
  text-align: left;
  display: block;
  margin: 5px;
`

const DescriptionArea = styled.textarea`
  width: 100%;
  flex: 1;
  padding: 6px 10px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 5px;
  display: block;
  grid-column: 1 / 3;
`

const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px;
  display: block;
`

const Select = styled.select`
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
`

const SubmitButton = styled.button`
  background: ${(props) =>
    props.theme.colors.main
  };
  color: #fff;
  border: 0;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  margin-top: auto;
`
