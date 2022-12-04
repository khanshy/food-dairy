import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./pages/routes";

import "./app.scss";

const App: React.FC = (): JSX.Element => {
    return (
        <Routes>
            {
                ROUTES.map(({slug, path, element})=> <Route key={slug} path={path} element={element && element} />)
            }
        </Routes>
    );
};

export default App;