import styled from 'styled-components';

export const TripsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  text-align: center;

  a {
    position: relative;
    background-color: #f1f1f1;
    text-decoration: none;
    border-radius: 5px;
    padding: 20px;
    flex: 0 0 300px;

    span {
      position: absolute;
      top: 15px;
      right: 20px;
      color: #999;
      font-size: 32px;
    }

    :hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }
`;

export const DataLabel = styled.small`
  color: #999;
`;

export const Destination = styled.h2`
  margin-top: 5px;
  margin-bottom: 10px;
  color: #4caf50;
`;

export const DateDuration = styled.p`
  color: #388e3c;
`;
