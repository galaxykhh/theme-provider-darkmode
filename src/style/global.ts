import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

interface ITheme {
    theme: {
        body: string;
        text: string;
        toggleBorder: string;
        bgColor: string;
    };
};

const GlobalStyle = createGlobalStyle<ITheme>`
    ${reset}

    * {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.body};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: background-color 0.3s ease, color 0.3s ease;
        color: ${({ theme }) => theme.text};
    };
`;

export default GlobalStyle;