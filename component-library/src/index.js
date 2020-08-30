import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { SignUpModal } from './components/modal';
import { GlobalStyle, DarkTheme, DefaultTheme } from './utils';

const App = () => {
    const [ useDarkTheme, setUseDarkTheme ] = useState(false);
    const [ showModal, setShowModal ] = useState(false);
    return (
        <ThemeProvider theme={ useDarkTheme ? DarkTheme : DefaultTheme }>
            <button style={{ margin: "0px 16px 24px", padding: "8px", background: "none" }} onClick={() => setShowModal(!showModal)}>
                Toggle Modal
            </button>
            <SignUpModal showModal={showModal} setShowModal={setShowModal}/>
                <GlobalStyle />
        </ThemeProvider>
    )
};

ReactDom.render(<App/>, document.querySelector("#root"));