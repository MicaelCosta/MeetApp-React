import styled from 'styled-components';

export const Container = styled.div`
  max-height: 280px;
  max-width: 900px;
  background: rgba(0, 0, 0, 0.4);
  margin: 20px 0;
  border-radius: 4px;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    strong {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.3);
    }

    svg {
      color: rgba(255, 255, 255, 0.3);
    }

    img {
      max-height: 280px;
      max-width: 900px;
      border-radius: 4px;
    }

    div {
      height: 280px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    input {
      display: none;
    }
  }
`;
