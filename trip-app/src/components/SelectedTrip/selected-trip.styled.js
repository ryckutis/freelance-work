import styled from 'styled-components';

export const Card = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: auto;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Container = styled.div`
  width: 65%;
  background-color: #f1f1f1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 5px;
  border-radius: 7px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Destination = styled.h2`
  color: #4caf50;
  font-size: 32px;
  margin-bottom: 10px;
`;

export const InfoLabel = styled.p`
  color: black;
  margin-bottom: 5px;
`;

export const InfoValue = styled.p`
  color: #4caf50;
  font-size: 18px;

  font-weight: bold;
`;

export const Image = styled.img`
  width: 50%;
  aspect-ratio: 4/3;
  border-radius: 10px;
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  :first-child {
    display: flex;
    justify-content: center;
    gap: 5px;

    :hover {
      background-color: darkcyan;
    }
  }

  :last-child {
    :hover {
      background-color: darkred;
    }
  }
`;
