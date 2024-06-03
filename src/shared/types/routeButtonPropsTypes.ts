import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface RouteButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    text: string,
    href: string,
    className: string,
    disabled: boolean
}