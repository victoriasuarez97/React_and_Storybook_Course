import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import PrimaryButton, {
    SecondaryButton, 
    TertiaryButton } 
    from './components/buttons';
import { GlobalStyle, DarkTheme, DefaultTheme } from './utils';

const App = () => {
    const [ useDarkTheme, setUseDarkTheme] = useState(false);
    return (
        <ThemeProvider theme={ useDarkTheme ? DarkTheme : DefaultTheme }>
        <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }} 
        onClick={() => setUseDarkTheme(true)}
        > 
        Dark theme
        </button>
        <button
            style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
            onClick={() => setUseDarkTheme(false)}
        >
        Default theme
        </button>
            <div style={{ background: useDarkTheme ? DefaultTheme.primaryColor : DarkTheme.primaryColor, width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
                <PrimaryButton modifiers={["small"]}>Hello World</PrimaryButton>
                <SecondaryButton modifiers={["large"]}>Hello World</SecondaryButton>
                <TertiaryButton modifiers={["large"]}>Hello World</TertiaryButton>
            </div>
                <GlobalStyle />
        </ThemeProvider>
    )
};

ReactDom.render(<App/>, document.querySelector("#root"));