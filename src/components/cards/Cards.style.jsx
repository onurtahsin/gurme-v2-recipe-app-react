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

  &:hover {
box-shadow: rgba(255, 255, 255, 0.798) 0px 2px 4px 0px, rgba(255, 255, 255, 0.798) 0px 2px 16px 0px ;
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
    opacity: 0.8;
    /* background-color: black; */
  }
`;

export const Header = styled.h1`
  color: crimson;
  font-size: 1.5rem;
  text-align: center;
`;
