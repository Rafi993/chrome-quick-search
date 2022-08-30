import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
.quick-search {
  button {
    background: none;
    font-family: var(--font-sans);
    padding: 0;
    border: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  --font-sans: "Inter", --apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  --cmdk-shadow: 0 16px 70px rgb(0 0 0 / 20%);

  --app-bg: var(--gray1);

  --lowContrast: #000000;
  --highContrast: #ffffff;

  --gray1: hsl(0, 0%, 8.5%);
  --gray2: hsl(0, 0%, 11%);
  --gray3: hsl(0, 0%, 13.6%);
  --gray4: hsl(0, 0%, 15.8%);
  --gray5: hsl(0, 0%, 17.9%);
  --gray6: hsl(0, 0%, 20.5%);
  --gray7: hsl(0, 0%, 24.3%);
  --gray8: hsl(0, 0%, 31.2%);
  --gray9: hsl(0, 0%, 43.9%);
  --gray10: hsl(0, 0%, 49.4%);
  --gray11: hsl(0, 0%, 62.8%);
  --gray12: hsl(0, 0%, 93%);

  --grayA1: hsla(0, 0%, 100%, 0);
  --grayA2: hsla(0, 0%, 100%, 0.026);
  --grayA3: hsla(0, 0%, 100%, 0.056);
  --grayA4: hsla(0, 0%, 100%, 0.077);
  --grayA5: hsla(0, 0%, 100%, 0.103);
  --grayA6: hsla(0, 0%, 100%, 0.129);
  --grayA7: hsla(0, 0%, 100%, 0.172);
  --grayA8: hsla(0, 0%, 100%, 0.249);
  --grayA9: hsla(0, 0%, 100%, 0.386);
  --grayA10: hsla(0, 0%, 100%, 0.446);
  --grayA11: hsla(0, 0%, 100%, 0.592);
  --grayA12: hsla(0, 0%, 100%, 0.923);

  --blue1: hsl(212, 35%, 9.2%);
  --blue2: hsl(216, 50%, 11.8%);
  --blue3: hsl(214, 59.4%, 15.3%);
  --blue4: hsl(214, 65.8%, 17.9%);
  --blue5: hsl(213, 71.2%, 20.2%);
  --blue6: hsl(212, 77.4%, 23.1%);
  --blue7: hsl(211, 85.1%, 27.4%);
  --blue8: hsl(211, 89.7%, 34.1%);
  --blue9: hsl(206, 100%, 50%);
  --blue10: hsl(209, 100%, 60.6%);
  --blue11: hsl(210, 100%, 66.1%);
  --blue12: hsl(206, 98%, 95.8%);
}
`;

export const CommandStyles = createGlobalStyle`
    .framer {
    [cmdk-root] {
        max-width: 640px;
        width: 100%;
        padding: 8px;
        background: #ffffff;
        border-radius: 16px;
        overflow: hidden;
        font-family: var(--font-sans);
        border: 1px solid var(--gray6);
        box-shadow: var(--cmdk-shadow);

        .dark & {
        background: var(--gray2);
        }
    }

    [cmdk-framer-header] {
        display: flex;
        align-items: center;
        gap: 8px;
        height: 48px;
        padding: 0 8px;
        border-bottom: 1px solid var(--gray5);
        margin-bottom: 12px;
        padding-bottom: 8px;

        svg {
        width: 20px;
        height: 20px;
        color: var(--gray9);
        transform: translateY(1px);
        }
    }

    [cmdk-input] {
        font-family: var(--font-sans);
        border: none;
        width: 100%;
        font-size: 16px;
        outline: none;
        color: var(--gray12);
        background: #282828 !important;
        height: 41px;
        border-radius: 8px;
        width: 99%;
        display: block;
        margin: 8px auto 20px auto;
        padding: 0 12px;

        &::placeholder {
        color: var(--gray9);
        }
    }

    [cmdk-item] {
        content-visibility: auto;

        cursor: pointer;
        border-radius: 12px;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--gray12);
        padding: 8px 8px;
        margin-right: 8px;
        font-weight: 500;
        transition: all 150ms ease;
        transition-property: none;

        &[aria-selected='true'] {
        background: var(--blue9);
        color: #ffffff;

        [cmdk-framer-item-subtitle] {
            color: #ffffff;
        }
        }

        &[aria-disabled='true'] {
        color: var(--gray8);
        cursor: not-allowed;
        }

        & + [cmdk-item] {
        margin-top: 4px;
        }

        svg {
        width: 16px;
        height: 16px;
        color: #ffffff;
        }
    }

    [cmdk-framer-icon-wrapper] {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 32px;
        height: 32px;
        background: orange;
        border-radius: 8px;
    }

    [cmdk-framer-item-meta] {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    [cmdk-framer-item-subtitle] {
        font-size: 12px;
        font-weight: 400;
        color: var(--gray11);
    }

    [cmdk-framer-items] {
        min-height: 308px;
        display: flex;
    }

    [cmdk-framer-left] {
        width: 40%;
    }

    [cmdk-framer-separator] {
        width: 1px;
        border: 0;
        margin-right: 8px;
        background: var(--gray6);
    }

    [cmdk-framer-right] {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        margin-left: 8px;
        width: 60%;

        button {
        width: 120px;
        height: 40px;
        background: var(--blue9);
        border-radius: 6px;
        font-weight: 500;
        color: white;
        font-size: 14px;
        }

        input[type='text'] {
        height: 40px;
        width: 160px;
        border: 1px solid var(--gray6);
        background: #ffffff;
        border-radius: 6px;
        padding: 0 8px;
        font-size: 14px;
        font-family: var(--font-sans);
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.08);

        &::placeholder {
            color: var(--gray9);
        }

        @media (prefers-color-scheme: dark) {
            background: var(--gray3);
        }
        }

        [cmdk-framer-radio] {
        display: flex;
        align-items: center;
        gap: 4px;
        color: var(--gray12);
        font-weight: 500;
        font-size: 14px;
        accent-color: var(--blue9);

        input {
            width: 20px;
            height: 20px;
        }
        }

        img {
        width: 40px;
        height: 40px;
        border-radius: 9999px;
        border: 1px solid var(--gray6);
        }

        [cmdk-framer-container] {
        width: 100px;
        height: 100px;
        background: var(--blue9);
        border-radius: 16px;
        }

        [cmdk-framer-badge] {
        background: var(--blue3);
        padding: 0 8px;
        height: 28px;
        font-size: 14px;
        line-height: 28px;
        color: var(--blue11);
        border-radius: 9999px;
        font-weight: 500;
        }

        [cmdk-framer-slider] {
        height: 20px;
        width: 200px;
        background: linear-gradient(90deg, var(--blue9) 40%, var(--gray3) 0%);
        border-radius: 9999px;

        div {
            width: 20px;
            height: 20px;
            background: #ffffff;
            border-radius: 9999px;
            box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.32);
            transform: translateX(70px);
        }
        }
    }

    [cmdk-list] {
        overflow: auto;
        max-height: 320px;
    }

    [cmdk-separator] {
        height: 1px;
        width: 100%;
        background: var(--gray5);
        margin: 4px 0;
    }

    [cmdk-group-heading] {
        user-select: none;
        font-size: 12px;
        color: var(--gray11);
        padding: 0 8px;
        display: flex;
        align-items: center;
        margin-bottom: 8px;
    }

        [cmdk-empty] {
            font-size: 23px;
            padding: 32px;
            white-space: pre-wrap;
            color: var(--gray11);
            text-align: center;
        }
    }

    @media (max-width: 640px) {
    .framer {
        [cmdk-framer-icon-wrapper] {
        }

        [cmdk-framer-item-subtitle] {
        display: none;
        }
    }
    }
`;
