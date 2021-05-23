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
        margin: 0;
        padding: 0;
        background: ${({ theme }) => theme.body};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.15s ease;
        color: ${({ theme }) => theme.text};
    };
`;

export default GlobalStyle;