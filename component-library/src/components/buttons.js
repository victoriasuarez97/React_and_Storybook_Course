import styled from 'styled-components';
import { DefaultTheme, TypeScale } from '../utils';

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${TypeScale.paragraph};
    border-radius: 10px;
    min-width: 100px;
    cursor: pointer;
    font-family: ${DefaultTheme.fontFamily};
`

const PrimaryButton = styled(Button)`
    background-color: ${DefaultTheme.primaryColor};
    border: none;
    color: ${DefaultTheme.textColorInverted};
`;

export const SecondaryButton = styled(Button)`
    background-color: #5AED8E;
    border: none;
    color: ${DefaultTheme.textColorInverted};
`;

export const TertiaryButton = styled(Button)`
    background-color: #4A8C61;
    border: none;
    color: white;
`;

export default PrimaryButton;