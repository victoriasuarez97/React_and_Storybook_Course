import React from 'react';
import ReactDom from 'react-dom';
import PrimaryButton, {
    SecondaryButton, 
    TertiaryButton } 
    from './components/buttons';
import { GlobalStyle } from './utils';

const App = () => (
    <div>
        <PrimaryButton modifiers="small">Hello World</PrimaryButton>
        <SecondaryButton modifiers={["large"]}>Hello World</SecondaryButton>
        <TertiaryButton>Hello World</TertiaryButton>
        <GlobalStyle />
    </div>
    );

ReactDom.render(<App/>, document.querySelector("#root"));