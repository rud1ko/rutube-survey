import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PtagTypes extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children: ReactNode,
    size: "middle" | "small" | "large",
    color: "gray" | "white",
    centered?: boolean
}