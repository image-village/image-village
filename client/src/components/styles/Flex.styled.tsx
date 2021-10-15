import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const Flex = styled.div`
    display: flex;
    align-items: center;
    
     & > div,
     & > ul {
        flex: 1;
        // animation: 7s ${fadeIn} ease-out;
        animation: ${fadeIn} linear 1.5s;
    };
    
//     @keyframes App-logo-spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }

}
 
`