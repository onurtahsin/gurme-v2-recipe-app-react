import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex";

export const MainContainer = styled(Flex)`
  flex-direction: row;
`;
export const Card = styled(Flex)`
  flex-direction: column;
  height: 20rem;
  width: 20rem;
  background: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 0.5rem;
  border-radius: 3px;
  margin: 0.7rem;
  color: crimson;
  font-size: 2rem;

  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
    box-shadow: rgba(255, 255, 255, 0.75) 0px 54px 55px,
      rgba(255, 255, 255, 0.75) 0px -12px 30px,
      rgba(255, 255, 255, 0.75) 0px 4px 6px,
      rgba(255, 255, 255, 0.75) 0px 12px 13px,
      rgba(255, 255, 255, 0.75) 0px -3px 5px;
  }
`;

export const Image = styled.img`
  height: 10rem;
  border-radius: 10px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.mainColor};
  color: white;
  padding: 0.7rem;
  outline: none;
  border: none;
  margin: 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;
