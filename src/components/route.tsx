import { useContext, useState } from "react";
import { routerContext } from "./context/router-context";
import { routes } from "../constants/routes";

export const Route = () => {
    const router = useContext(routerContext);
    const [route, setRoute] = useState(router.currentRoute);

    router.onComponentChange = setRoute;

    const RouteComponent = routes[route];

    return <RouteComponent />;
};