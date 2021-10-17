import styled from "styled-components";

interface BoxProps {
    dataVal_1: string;
    dataVal_2: string;
    dataVal_3: string;
}

export const Box = styled.div.attrs((props: BoxProps) => ({
    dataVal1: props.dataVal_1,
    dataVal2: props.dataVal_2,
    dataVal3: props.dataVal_3,
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    background-color: pink;
    margin: 0;
    
    &:before {
        display: flex;
        align-items: center;
        justify-content: center;
        content: attr(data-val2);
        height: 100px;
        min-width: 100px;
        margin-left: 200px;
        background-color: lime;
    }

    &:after {
        display: flex;
        align-items: center;
        justify-content: center;
        content: attr(data-val3);
        height: 100px;
        min-width: 100px;
        margin-left: 200px;
        background-color: skyblue;
    }
`