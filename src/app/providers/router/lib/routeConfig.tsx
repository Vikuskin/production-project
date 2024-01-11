import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';

enum AppRoutes {
    Main = 'main',
    About = 'about'
}

const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.About]: '/about'
}

export const routeConfig: RouteProps[] = [
    {
        path: routePaths[AppRoutes.Main],
        element: <MainPage/>
    },
    {
        path: routePaths[AppRoutes.About],
        element: <AboutPage/>
    }
]
