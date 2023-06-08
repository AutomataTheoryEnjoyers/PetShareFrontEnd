import styled from "styled-components";
import { Link } from "react-router-dom";
import { PaginationParameters } from "../types/paginationParameters";

type Props = {
  elementCount: number;
  paginationParams: PaginationParameters;
  setPaginationParams: React.Dispatch<
    React.SetStateAction<PaginationParameters>
  >;
};

export const Pagination = ({
  elementCount,
  paginationParams,
  setPaginationParams,
}: Props) => {
  const pageNumbers = [];
  for (
    let i = 1;
    i < Math.ceil(elementCount / paginationParams.PageCount);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <List>
      {pageNumbers.map((index) => (
        <PageButton
          onClick={() =>
            setPaginationParams({
              PageNumber: index - 1,
              PageCount: paginationParams.PageCount,
            })
          }
        >
          {index}
        </PageButton>
      ))}
    </List>
  );
};

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const PageButton = styled.div`
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
`;
