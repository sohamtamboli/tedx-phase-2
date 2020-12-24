import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    /* width */
::-webkit-scrollbar {
  width: 8px;
  
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #999;
  transition: all 0.1s ease-in;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #f12711, #f5af19, #f37335, #f5af19);
}
`;

export default GlobalStyles;
