import React from 'react';
import ReactDom from 'react-dom';
import PrimaryButton, {
    SecondaryButton, 
    TertiaryButton } 
    from './components/buttons';

const App = () => (
    <div>
        <PrimaryButton>Hello World</PrimaryButton>
        <SecondaryButton>Hello World</SecondaryButton>
        <TertiaryButton>Hello World</TertiaryButton>
    </div>
    );

ReactDom.render(<App/>, document.querySelector("#root"));