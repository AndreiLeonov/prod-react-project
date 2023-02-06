import React, {Suspense} from 'react';
import './styles/index.scss';
import {Route, Routes} from "react-router-dom";
import {Link} from 'react-router-dom';
import {useTheme} from './providers/ThemeProvider';
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from "pages/MainPage";
import {classNames} from 'shared/lib/classNames/classNames';
import {AppRouter} from "app/providers/router";


const App = () => {

    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme, 'cls2', 'cls3'])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <AppRouter/>
        </div>
    );
};

export default App;