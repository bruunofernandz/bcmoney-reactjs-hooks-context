import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
          primary: string;
          secundary: string;
          redColor: string;
          greenColor: string;
      
          background: string;
          card: string;
          text: string; 
        }
    } 
}