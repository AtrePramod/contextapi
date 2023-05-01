import React, { createContext } from 'react';

export const AuthContext = createContext();


export default class AuthContextProvider extends React.Component {
    state = {
        isLoggedIn: false,

    };
    changedAuthStatus = () => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn });
    }


    render() {
        return (
            <AuthContext.Provider value={{ ...this.state, changedAuthStatus: this.changedAuthStatus }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}
