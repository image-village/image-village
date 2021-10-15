import React from 'react';
import { DefaultTheme } from 'styled-components';
import GlobalStyles  from "./components/styles/Global"
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import {Container} from "./components/styles/Container.styled";

//Themes - g
// Header color, body, footer color, button color etc.

const theme: DefaultTheme = {
    colors: {
        header: "#ebfbff",
        body: '#fff',
        footer: '#003333',
    }
}


function App() {

    return (
        <ThemeProvider theme={theme} >
        <>
            <GlobalStyles />
            <Header/>
            <Container>
                <h1>Hello James! </h1>
            </Container>
        </>
        </ThemeProvider>
    )
}

export default App;
