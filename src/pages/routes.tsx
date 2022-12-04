import HomePage from "./home";

interface RouteConfig {
    element?: React.FC | JSX.Element | any;
    path: string;
    title: string;
    slug: string;
}

export const routePrefix = "/";

export const ROUTES: RouteConfig[] = [
    {
        element: <HomePage />,
        path: `${routePrefix}`,
        title: "Home",
        slug: "home"
    }
];
