import { createContext } from "react";
import { InMemoryRouter } from "../../classes/in-memory-router";

export const routerContext = createContext(new InMemoryRouter());

export const RouterContextProvider = routerContext.Provider;