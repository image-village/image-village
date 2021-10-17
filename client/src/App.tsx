import React from 'react';
import { DefaultTheme } from 'styled-components';
import GlobalStyles  from "./components/styles/Global"
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import {Container} from "./components/styles/Container.styled";
import { Box } from "./components/styles/Box.styled";

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
            {/*<Container>*/}
            {/*    <Box data-val1={"yak1"} data-val2={"yak2"} data-val3={"yak3"} />*/}
            {/*</Container>*/}
            <Container style={{ "marginTop": "50px", "marginBottom": "150px", marginLeft: "100px"}}>
                <div style={{ "display": "flex", "flexDirection": "row"}}>
                    <div style={{ height: "100px", minWidth: "100px", backgroundColor: "skyblue"}}/>
                    <div style={{ height: "100px", minWidth: "100px", backgroundColor: "pink"}}/>
                    <div style={{ height: "100px", minWidth: "100px", backgroundColor: "lime"}}/>
                </div>
            </Container>
        </>
        </ThemeProvider>
    )
}

export default App;
