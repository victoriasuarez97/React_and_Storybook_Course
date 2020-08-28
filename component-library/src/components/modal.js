import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { DefaultTheme, TypeScale } from '../utils';
import { Illustrations, CloseIcon } from '../assets';
import { PrimaryButton } from './buttons';

const Body = styled.body`
   margin: 70px;
`
const ModalWrapper = styled.div `
    text-align: center;
    margin: auto;
    width: 912px;
    height: 512px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background-color: ${DefaultTheme.formElementBackgroundColor};
    color: ${DefaultTheme.textOnFormElementBackground};
    border-radius: 2px;
`
const SignUpHeader = styled.h3`
    font-size: ${TypeScale.header3};
    margin: 140px 100px 40px;
    float: left;
`
const SignUpText = styled.h5`
    margin: 0px 105px 20px;
    text-align: left;
    font-size: ${TypeScale.header5};
    max-width: 70%;
    font-weight: lighter;
`
const CloseModalIcon = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    right: 260px;
    top: 100px;
    width: 24px;
    height: 24px;
    padding: 0px;
`

export const SignUpModal = ({ showModal, setShowModal }) => {
    const animation = useSpring({
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0)` : `translateY(-150%)`,
        config: config.slow
    })
    return (
        <Body>
            <animated.div style={animation}>
            <ModalWrapper>
                <img src={Illustrations.SignUp} style={{ margin: "105px 105px 0px", float: "right" }} alt="Sign up for an account" aria-hidden="true"/>
                <SignUpHeader>Sign Up</SignUpHeader>
                <br />
                <SignUpText>Sign up today to get access to all of our content and features. </SignUpText>
                <br />
                <PrimaryButton style={{ width: "26%", height: "10%", margin: "30px 73px 20px" }}>Submit</PrimaryButton>
                <CloseModalIcon aria-label="Close Modal">
                    <CloseIcon/>
                </CloseModalIcon>
            </ModalWrapper>
            </animated.div>
        </Body>
    )
}