import { ReactNode } from "react";

export interface RouteParams {
    query?: string; // Puedes agregar más parámetros si los tienes
    lang?: 'es' | 'en'
}

export interface RouteInterface {
    path: string;
    Component: React.FC<{ routeParams?: RouteParams }>; // Asegúrate de que el tipo coincide
}

export interface RouterProps {
    routes: RouteInterface[];
    defaultComponent?: React.FC<{ routeParams?: RouteParams }>;
    children?:ReactNode
}
