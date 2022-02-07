import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {

    --green: #04D361;
    --purple-light: #9F75FF;
    --purple: #8257E5;
    --purple-dark: #6F48C9;

    --text-heading: #494D4B;
    --text-body: #808080;
    --text-body-2: #AFB3B1;
    --text-body-3: #FFFFFF;

    --line: #E6E8EB;
    --shape: #FFFFFF;
    --background: #F7F8FA;
}

* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%
        }
        @media (max-width: 720px) {
            font-size: 87.5%
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
        background-color: var(--background)

    }

    body, input, text, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;

    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
