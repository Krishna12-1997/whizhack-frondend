import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-montserrat: Montserrat;
--font-satoshi: Satoshi;
--font-pulse: Pulse;

/* font sizes */
--font-size-xl: 20px;
--font-size-21xl: 40px;
--font-size-5xl: 24px;
--font-size-11xl: 30px;
--font-size-31xl: 50px;
--font-size-lg: 18px;
--font-size-7xl: 26px;

/* Colors */
--whizwhite: #fff;
--whizdark: #1d1d1d;
--color-gray-100: #07002f;
--color-gray-200: rgba(255, 255, 255, 0.7);
--whizblue: #185893;
--color-gainsboro-100: #dcdcdc;
--color-gainsboro-200: #dbdadb;
--whizgray: #62666a;
--color-royalblue: #2c81fe;

/* Gaps */
--gap-3xs: 10px;
--gap-xl: 20px;
--gap-81xl: 100px;
--gap-31xl: 50px;

}
`;
