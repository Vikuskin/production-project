import { routeConfig } from 'app/providers/router/lib/routeConfig';
import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter: FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routeConfig.map(route => (
                    <Route key={route.path} path={route.path} element={route.element}/>
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter
