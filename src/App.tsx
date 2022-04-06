import React from 'react';

import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from 'react-router-dom';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {Music} from "./components/Musik/Musik";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {ReduxStoreType} from "./components/redux/redux-store";
import {UsersContainer} from "./components/users/UsersContainer";


export type StatePropsType = {
    //store: ReduxStoreType

}

const App: React.FC<StatePropsType> = (props) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-components">

                <Routes>
                    <Route path={"/profile/"} element={<Profile/>}/>
                    <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                    <Route path={"/news"} element={<News/>}/>
                    <Route path={"/music"} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/users'} element={<UsersContainer/>}/>
                </Routes>
            </div>

        </div>
    )
}


export default App;
