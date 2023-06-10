import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { usePostAnnouncement } from "../../mutations/postAnnouncement";
import { useMyPets } from "../../queries/myPets";
import { Pagination } from "../../../components/pagination";
import { PaginationParameters } from "../../../types/paginationParameters";
import { PetListElementNewAnnouncement } from "../../components/petListElementNewAnnouncement";
import { MutationContext } from "../../../components/mutationContext";
import { MutationContextType } from "../../../types/mutationContext";

export const NewAnnouncement = () => {
  const { mutationData, setMutationData } =
    useContext<MutationContextType>(MutationContext);

  const petsPerPage = 3;
  const [paginationParams, setPaginationParams] =
    useState<PaginationParameters>({
      PageNumber: 0,
      PageCount: petsPerPage,
    });
  const pets = useMyPets(paginationParams);
  const mutatePostAnnouncement = usePostAnnouncement();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [petID, setPetID] = useState(
    pets.response?.pets
      ? pets.response?.pets.length > 0
        ? pets.response?.pets[0].id
        : ""
      : ""
  );

  const [isFormValid, setIsFormValid] = useState(false);
  const [isPostingAnnouncement, setPostingAnnouncement] = useState(false);

  useEffect(() => {
    setMutationData({ mutationSuccessful: false });
  }, [setMutationData]);

  useEffect(() => {
    const fields = [title, description];
    const isFormValid = fields.every((field) => field.trim() !== "");
    setIsFormValid(isFormValid);
  }, [title, description]);

  const useHandleSubmit = () => {
    setPostingAnnouncement(true);
    mutatePostAnnouncement(
      {
        description: description,
        title: title,
        petId: petID,
      },
      { onSettled: () => setPostingAnnouncement(false) }
    );
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
          <List>
            {pets.response?.pets?.map((pet) => (
              <div id="pet-input"
                onClick={() => {
                        setPetID(pet.id);
                        
                }}
              >
                <PetListElementNewAnnouncement
                  key={pet.id}
                  pet={pet}
                  selected={petID === pet.id}
                />
              </div>
            ))}
          </List>
          <Separator />
          <Pagination
            elementCount={pets.response ? pets.response.count : 1}
            paginationParams={paginationParams}
            setPaginationParams={setPaginationParams}
          />
        </div>
        <CenteredBox id="submit">
          <SubmitButton
            onClick={useHandleSubmit}
            disabled={!isFormValid || isPostingAnnouncement}
          >
            Submit
          </SubmitButton>
          {mutationData?.mutationSuccessful && (
            <>Announcement added successfully!</>
          )}
        </CenteredBox>
      </Container>
    </AnimatedPage>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Separator = styled.hr`
  width: 100%;
  height: 3px;
  margin-bottom: 0;
  opacity: 0;
`;

const Container = styled.div`
  text-align: center;
  display: grid;
  gap: 10px;
  height: 100%;
  height: min(60vh, 600px);
  grid-template: auto auto auto 1fr 1fr / 1fr 1fr 1fr;

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

  #submit {
    grid-column: 2/3;
    grid-row: 5/6;
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
