import styled from 'styled-components';

const PrimaryButtonColor = '#030A06';
const SecondaryButtonColor = '#5AED8E';
const TertiaryButtonColor = '#4A8C61';

const Button = styled.button`
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 10px;
    min-width: 100px;
    cursor: pointer;
    font-family: 'PT Sans', sans-serif;
`

const PrimaryButton = styled(Button)`
    background-color: ${PrimaryButtonColor};
    border: none;
    color: white;
`;

export const SecondaryButton = styled(Button)`
    background-color: ${SecondaryButtonColor};
    border: none;
    color: white;
`;

export const TertiaryButton = styled(Button)`
    background-color: ${TertiaryButtonColor};
    border: none;
    color: white;
`;

export default PrimaryButton;