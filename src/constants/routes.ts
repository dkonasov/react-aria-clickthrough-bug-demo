import { FC } from "react";
import { AnchorStateComponent } from "../components/anchor-state-component";
import { ButtonStateComponent } from "../components/button-state-component";
import { RouteSlug } from "../types/route-slug";

export const routes: Record<RouteSlug, FC> = {
    button: ButtonStateComponent,
    anchor: AnchorStateComponent
};