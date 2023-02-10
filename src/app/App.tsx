import './styles/index.scss';
import {useTheme} from './providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const App = () => {

    const {theme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme, 'cls2', 'cls3'])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;