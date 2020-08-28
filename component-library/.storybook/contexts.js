import { ThemeProvider } from 'styled-components';
import { DefaultTheme, DarkTheme } from '../src/utils';

export const contexts = [
    {
        icon: "box",
        title: "Themes",
        components: [ThemeProvider],
        params: [
            {
                name: "Default Theme", 
                props: {
                    theme: DefaultTheme,
                    default: true
                }
            },
            {
                name: "Dark Theme",
                props: {
                    theme: DarkTheme 
                }
            }
        ],
        options: {
            deep: true,
            disable: false,
            cancelable: false
        }
    }
]
