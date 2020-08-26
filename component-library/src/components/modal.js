import React from 'react';
import styled from 'styled';
import { TypeScale } from '../utils/typography';
import { Illustrations } from '../assets/illustrations';
import { PrimaryButton } from './buttons';

const ModalWrapper = styled.div `
    width: 912px;
    height: 512px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background-color: ${DefaultTheme.formElementBackgroundColor};
    color: ${DefaultTheme.textOnFormElementBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    border-radius: 2px;
`

const SignUpHeader = styled.h3`
    font-size: ${TypeScale.header3};
`
const SignUpText = styled.p`
    font-size: ${TypeScale.paragraph};
    max-width: 70%;
    text-align: center;
`

export const SignUpModal = () => {
    return (
        <ModalWrapper>
            <img src={Illustrations.SignUp} alt="Sign up for an account" aria-hidden="true"/>
            <SignUpHeader>Sign Up</SignUpHeader>
            <SignUpText>Sign up today to get access to all of our content and features. </SignUpText>
            <PrimaryButton>Submit</PrimaryButton>
        </ModalWrapper>
    )
}