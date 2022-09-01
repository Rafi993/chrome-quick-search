import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
.quick-search {
  --quick-search-font-sans: "Inter", --apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  --quick-search-cmdk-shadow: 0 16px 70px rgb(0 0 0 / 20%);

  --quick-search-app-bg: var(--quick-search-gray1);

  --quick-search-lowContrast: #000000;
  --quick-search-highContrast: #ffffff;

  --quick-search-gray1: hsl(0, 0%, 8.5%);
  --quick-search-gray2: hsl(0, 0%, 11%);
  --quick-search-gray3: hsl(0, 0%, 13.6%);
  --quick-search-gray4: hsl(0, 0%, 15.8%);
  --quick-search-gray5: hsl(0, 0%, 17.9%);
  --quick-search-gray6: hsl(0, 0%, 20.5%);
  --quick-search-gray7: hsl(0, 0%, 24.3%);
  --quick-search-gray8: hsl(0, 0%, 31.2%);
  --quick-search-gray9: hsl(0, 0%, 43.9%);
  --quick-search-gray10: hsl(0, 0%, 49.4%);
  --quick-search-gray11: hsl(0, 0%, 62.8%);
  --quick-search-gray12: hsl(0, 0%, 93%);

  --quick-search-grayA1: hsla(0, 0%, 100%, 0);
  --quick-search-grayA2: hsla(0, 0%, 100%, 0.026);
  --quick-search-grayA3: hsla(0, 0%, 100%, 0.056);
  --quick-search-grayA4: hsla(0, 0%, 100%, 0.077);
  --quick-search-grayA5: hsla(0, 0%, 100%, 0.103);
  --quick-search-grayA6: hsla(0, 0%, 100%, 0.129);
  --quick-search-grayA7: hsla(0, 0%, 100%, 0.172);
  --quick-search-grayA8: hsla(0, 0%, 100%, 0.249);
  --quick-search-grayA9: hsla(0, 0%, 100%, 0.386);
  --quick-search-grayA10: hsla(0, 0%, 100%, 0.446);
  --quick-search-grayA11: hsla(0, 0%, 100%, 0.592);
  --quick-search-grayA12: hsla(0, 0%, 100%, 0.923);

  --quick-search-blue1: hsl(212, 35%, 9.2%);
  --quick-search-blue2: hsl(216, 50%, 11.8%);
  --quick-search-blue3: hsl(214, 59.4%, 15.3%);
  --quick-search-blue4: hsl(214, 65.8%, 17.9%);
  --quick-search-blue5: hsl(213, 71.2%, 20.2%);
  --quick-search-blue6: hsl(212, 77.4%, 23.1%);
  --quick-search-blue7: hsl(211, 85.1%, 27.4%);
  --quick-search-blue8: hsl(211, 89.7%, 34.1%);
  --quick-search-blue9: hsl(206, 100%, 50%);
  --quick-search-blue10: hsl(209, 100%, 60.6%);
  --quick-search-blue11: hsl(210, 100%, 66.1%);
  --quick-search-blue12: hsl(206, 98%, 95.8%);

  button {
    background: none;
    font-family: var(--quick-search-font-sans);
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
}
`;

export const CommandStyles = createGlobalStyle`
    #quick-search-chrome {
      all: unset; 
    }

    .framer {
    [cmdk-root] {
        max-width: 640px;
        width: 100%;
        padding: 8px;
        background: var(--quick-search-gray2);
        border-radius: 16px;
        overflow: hidden;
        font-family: var(--quick-search-font-sans);
        border: 1px solid var(--quick-search-gray6);
        box-shadow: var(--quick-search-cmdk-shadow);
    }

    [cmdk-framer-header] {
        display: flex;
        align-items: center;
        gap: 8px;
        height: 48px;
        padding: 0 8px;
        border-bottom: 1px solid var(--quick-search-gray5);
        margin-bottom: 12px;
        padding-bottom: 8px;

        svg {
        width: 20px;
        height: 20px;
        color: var(--quick-search-gray9);
        transform: translateY(1px);
        }
    }

    [cmdk-input] {
        font-family: var(--quick-search-font-sans);
        border: none;
        width: 100%;
        font-size: 18px;
        outline: none;
        background: #282828 !important;
        color: var(--quick-search-highContrast) !important;
        font-style: normal;
        font-weight: normal;
        height: 41px;
        border-radius: 8px;
        width: 99%;
        display: block;
        margin: 8px auto 20px auto;
        padding: 0 12px;

        &::placeholder {
        color: var(--quick-search-gray9);
        }
    }

    [cmdk-group]{
        margin-bottom:8px;
    }

    [cmdk-item] {
        content-visibility: auto;

        cursor: pointer;
        border-radius: 12px;
        font-size: 16px;
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--quick-search-gray12);
        padding: 8px 8px;
        margin-right: 8px;
        font-weight: 500;
        transition: all 150ms ease;
        transition-property: none;

        &[aria-selected='true'] {
        background: var(--quick-search-blue9);
        color: #ffffff;

        [cmdk-framer-item-subtitle] {
            color: #ffffff;
        }
        }

        &[aria-disabled='true'] {
        color: var(--quick-search-gray8);
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
        font-size: 14px;
        font-weight: 400;
        color: var(--quick-search-gray11);
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
        background: var(--quick-search-gray6);
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
        background: var(--quick-search-blue9);
        border-radius: 6px;
        font-weight: 500;
        color: white;
        font-size: 16px;
        }

        input[type='text'] {
        height: 40px;
        width: 160px;
        border: 1px solid var(--quick-search-gray6);
        background: #ffffff;
        border-radius: 6px;
        padding: 0 8px;
        font-size: 16px;
        font-family: var(--quick-search-font-sans);
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.08);

        &::placeholder {
            color: var(--quick-search-gray9);
        }

        @media (prefers-color-scheme: dark) {
            background: var(--quick-search-gray3);
        }
        }

        [cmdk-framer-radio] {
        display: flex;
        align-items: center;
        gap: 4px;
        color: var(--quick-search-gray12);
        font-weight: 500;
        font-size: 16px;
        accent-color: var(--quick-search-blue9);

        input {
            width: 20px;
            height: 20px;
        }
        }

        img {
        width: 40px;
        height: 40px;
        border-radius: 9999px;
        border: 1px solid var(--quick-search-gray6);
        }

        [cmdk-framer-container] {
        width: 100px;
        height: 100px;
        background: var(--quick-search-blue9);
        border-radius: 16px;
        }

        [cmdk-framer-badge] {
        background: var(--quick-search-blue3);
        padding: 0 8px;
        height: 28px;
        font-size: 16px;
        line-height: 28px;
        color: var(--quick-search-blue11);
        border-radius: 9999px;
        font-weight: 500;
        }

        [cmdk-framer-slider] {
        height: 20px;
        width: 200px;
        background: linear-gradient(90deg, var(--quick-search-blue9) 40%, var(--quick-search-gray3) 0%);
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
        max-height: 400px;
        width: 100%;
    }

    [cmdk-separator] {
        height: 1px;
        width: 100%;
        background: var(--quick-search-gray5);
        margin: 4px 0;
    }

    [cmdk-group-heading] {
        user-select: none;
        font-size: 14px;
        color: var(--quick-search-gray11);
        padding: 0 8px;
        display: flex;
        align-items: center;
        margin-bottom: 8px;
    }

        [cmdk-empty] {
            font-size: 25px;
            padding: 32px;
            white-space: pre-wrap;
            color: var(--quick-search-gray11);
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
