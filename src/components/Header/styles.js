import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    background: #000;
    padding: 0 30px;
`;

export const Content = styled.div`
    height: 64px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;

        img {
            margin-right: 20px;
            padding-right: 20px;
        }
    }

    aside {
        display: flex;
        align-items: center;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    padding-left: 20ex;

    div {
        text-align: right;
        margin-right: 20px;

        strong {
            display: block;
            color: #fff;
        }

        a {
            display: block;
            margin-top: 2px;
            font-size: 12px;
            color: #999;
        }
    }

    button {
        width: 70px;
        height: 35px;
        margin: 5px 0 0;
        background: #f84d69;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
            background: ${darken(0.08, '#f84d69')};
        }
    }

`;
