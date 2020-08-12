import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { DefaultTheme, TypeScale } from '../utils';

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${TypeScale.helperText};
        padding: 10px 15px;
    ` ,

    large: () => `
        font-size: ${TypeScale.paragraph};
        padding: 15px 45px;
    `
}
const Button = styled.button`
    padding: 12px 24px;
    font-size: ${TypeScale.paragraph};
    border-radius: 30px;
    min-width: 100px;
    cursor: pointer;
    font-family: ${DefaultTheme.fontFamily};
    transition: background-color 0.2 linear;

    &:hover, &:focus {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`

const PrimaryButton = styled(Button)`
    background-color: ${DefaultTheme.primaryColor};
    border: none;
    color: ${DefaultTheme.textColorInverted};

    &:disabled {
        background-color: ${DefaultTheme.disabled};
        cursor: not-allowed;
        box-shadow: none;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
    background-color: ${DefaultTheme.secondaryColor};
    border: none;
    color: ${DefaultTheme.textColorInverted};

    &:disabled {
        background-color: ${DefaultTheme.disabledSecondary};
        color: ${DefaultTheme.textColorDisabledSecondary};
        cursor: not-allowed;
        box-shadow: none;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
    background-color: ${DefaultTheme.tertiaryColor};
    border: none;
    color: ${DefaultTheme.textColorInverted};

    &:disabled {
        background-color: ${DefaultTheme.disabledTertiary};
        border: 1px solid ${DefaultTheme.disabledPrimary};
        color: ${DefaultTheme.textColorDisabledSecondary};
        cursor: not-allowed;
        box-shadow: none;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export default PrimaryButton;