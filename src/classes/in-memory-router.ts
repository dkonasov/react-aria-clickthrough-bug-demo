import { FC } from "react";
import { ButtonStateComponent } from "../components/button-state-component";
import { AnchorStateComponent } from "../components/anchor-state-component";
import { RouteSlug } from "../types/route-slug";

export class InMemoryRouter {
    private routesMap: Record<RouteSlug, FC> = {
        button: ButtonStateComponent,
        anchor: AnchorStateComponent
    };

    currentRoute: RouteSlug = 'button';

    getRouteComponent() {
        return this.routesMap[this.currentRoute];
    }

    goToAnchorRoute() {
        this.currentRoute = 'anchor';
        this.onComponentChange?.(this.currentRoute);
    }

    onComponentChange?: (route: RouteSlug) => void;
}