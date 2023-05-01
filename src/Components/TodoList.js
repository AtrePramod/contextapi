import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
export class TodoList extends React.Component {
    static contextType = ThemeContext;
    render() {

        const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;

        return (
            <div style={{
                background: theme.background, color: theme.text, height: '140px', textAlign: 'center'
            }} className='ui list'>
                <p className='items'>Paln the family trip</p>
                <p className='items'> Go to shopping </p>
                <p className='items'>Go to walk</p>
                <button className='ui button primary' onClick={changeTheme}>Change the theme</button>

            </div>
        )
    }
}

export default TodoList
