import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode,
    mode: "rating-button" | "route-button",
    isActive?: boolean,
    href?: string
}