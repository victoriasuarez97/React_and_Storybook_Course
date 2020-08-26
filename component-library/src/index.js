import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { SignUpModal } from './components/modal';
import { GlobalStyle, DarkTheme, DefaultTheme } from './utils';

const App = () => {
    const [ useDarkTheme, setUseDarkTheme] = useState(false);
    return (
        <ThemeProvider theme={ useDarkTheme ? DarkTheme : DefaultTheme }>

            <SignUpModal />
                <GlobalStyle />
        </ThemeProvider>
    )
};

ReactDom.render(<App/>, document.querySelector("#root"));