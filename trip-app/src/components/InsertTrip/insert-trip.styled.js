import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Form = styled.form`
  max-width: 350px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const StyledForm = styled(Form)`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const Heading = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4caf50;
  gap: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  display: block;
  margin: auto;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #388e3c;
  }
`;
