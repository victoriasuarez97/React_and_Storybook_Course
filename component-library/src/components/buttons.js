import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { TypeScale } from '../utils';

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${TypeScale.helperText};
        padding: 10px 15px;
    ` ,

    large: () => `
        font-size: ${TypeScale.paragraph};
        padding: 15px 45px;
    `,
    warning: ({ props }) => `
        background-color: ${props.theme.status.warningColor};
        color: ${props.theme.textColorInverted};

        &:hover, &:focus {
            background-color: ${props.theme.status.warningColorHover};
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
    `,
    error: ({ props }) => `
        background-color: ${props.theme.status.errorColor};
        color: ${props.theme.textColorInverted};

        &:hover, &:focus {
            background-color: ${props.theme.status.errorColorHover};
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
    `,
    success: ({ props }) => `
        background-color: ${props.theme.status.successColor};
        color: ${props.theme.textColorInverted};

        &:hover, &:focus {
            background-color: ${props.theme.status.successColorHover};
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
    `
};

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${TypeScale.paragraph};
    border-radius: 30px;
    min-width: 100px;
    cursor: pointer;
    font-family: ${props => props.theme.fontFamily};
    transition: background-color 0.2 linear;

    &:hover, &:focus {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`;

export const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.primaryColor};
    border: none;
    color: ${props => props.theme.textColorInverted};

    &:disabled {
        background-color: ${props => props.theme.disabledPrimary};
        cursor: not-allowed;
        box-shadow: none;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
    background-color: ${props => props.theme.secondaryColor};
    border: none;
    color: ${props => props.theme.textColorInverted};

    &:disabled {
        background-color: ${props => props.theme.disabledSecondary};
        color: ${props => props.theme.textColorDisabledSecondary};
        cursor: not-allowed;
        box-shadow: none;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
    background-color: ${props => props.theme.tertiaryColor};
    border: none;
    color: ${props => props.theme.textColorInverted};

    &:disabled {
        background-color: ${props => props.theme.disabledTertiary};
        border: 1px solid ${props => props.theme.disabledPrimary};
        color: ${props => props.theme.textColorDisabledSecondary};
        cursor: not-allowed;
        box-shadow: none;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;