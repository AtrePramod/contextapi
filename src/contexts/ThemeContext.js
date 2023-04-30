import React, { createContext } from 'react';

export const ThemeContext = createContext();


class ThemeContextProvider extends React.Component {
    state = {
        isDarkTheme: true,
        lightTheme: {
            text: '#222',
            background: '#d8ddf1'
        },
        darkTheme: {
            text: '#fff',
            background: '#5c5c5c'
        }
    };
    render() {
        return (
            <ThemeContextProvider>

            </ThemeContextProvider>
        )
    }
}
export default ThemeContextProvider;