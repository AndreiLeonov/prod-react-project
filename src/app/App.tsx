import './styles/index.scss';
import {useTheme} from './providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import { Suspense } from 'react';
import {LangSwitcher} from "widgets/LangSwitcher";

const App = () => {

    const {theme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme, 'cls2', 'cls3'])}>
            <Suspense fallback="">
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;