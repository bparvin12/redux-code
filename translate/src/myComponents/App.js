import React, { Component } from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../myContexts/LanguageContext';
import ColorContext from '../myContexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends Component {
    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    <ColorContext.Provider value="green">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App;