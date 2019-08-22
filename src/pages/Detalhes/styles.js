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

        div {
            display: flex;
            align-items: center;
            justify-content: space-around;

            button {
                align-self: flex-end;
                display: flex;
                align-items: center;
                justify-content: space-around;
                padding: 0 10px;
                width: 110px;
                height: 40px;
                margin: 5px 10px;
                font-weight: bold;
                color: #fff;
                font-size: 16px;
                border: 0;
                border-radius: 4px;
                transition: background 0.2s;
            }

            #btnEdit {
                background: #3b9eff;

                &:hover {
                    background: ${darken(0.08, '#3b9eff')};
                }
            }

            #btnCancel {
                background: #f84d69;

                &:hover {
                    background: ${darken(0.08, '#f84d69')};
                }
            }
        }

        strong {
            color: #fff;
            font-size: 24px;
        }
    }

    > div {
        max-width: 900px;
        max-height: 280px;
        background: rgba(0, 0, 0, 0.3);
        margin: 10px 0;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            max-height: 280px;
        }
    }

    p {
        color: #fff;
        font-size: 16px;
    }

    footer {
        display: flex;
        justify-content: flex-start;
        color: rgba(255, 255, 255, 0.3);
        font-size: 16px;
        margin-top: 15px;

        span {
            display: flex;
            align-items: center;
            margin-right: 30px;

            svg {
                margin-right: 10px;
            }
        }
    }
`;
