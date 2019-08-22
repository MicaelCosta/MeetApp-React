import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;

    span {
      color: #fb6f91;

      margin: 0 0 10px;
      font-weight: bold;
    }

    input, #description {
        background: rgba(0, 0, 0, 0.2);
        border: 0;
        border-radius: 4px;
        height: 40px;
        padding: 0 15px;
        color: #fff;
        margin: 0 0 10px;

        &::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }
    }

    #description {
      height: 120px;
    }

    > button {
        align-self: flex-end;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 10px;
        width: 150px;
        height: 40px;
        margin: 5px 0 ;
        background: #f84d69;
        font-weight: bold;
        color: #fff;
        font-size: 16px;
        border: 0;
        border-radius: 4px;
        transition: background 0.2s;

        &:hover {
            background: ${darken(0.08, '#f84d69')};
        }
    }
  }
`;
