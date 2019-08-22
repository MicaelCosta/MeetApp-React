import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 900px;
    margin: 50px auto;

    display: flex;
    flex-direction: column;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            align-self: flex-end;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 0 10px;
            width: 140px;
            height: 40px;
            margin: 5px 0 0;
            background: #f84d69;
            font-weight: bold;
            color: #fff;
            font-size: 16px;
            border: 0;
            border-radius: 4px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, '#f84d69')};
            }
        }

        strong {
            color: #fff;
            font-size: 24px;
            margin: 0 15px;
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 15px;
        margin-top: 30px;
    }
`;

export const Meetup = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 900px;
    padding: 20px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.3);

    &:hover {
        opacity: 0.4;
    }

    strong {
        align-self: stretch;
        color: #fff;
        font-size: 20px;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #999;

        svg {
            margin-left: 30px;
        }
    }
`;
