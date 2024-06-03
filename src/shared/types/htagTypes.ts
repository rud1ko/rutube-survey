import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface HtagTypes extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
    children: ReactNode,
    size: "large" | "small",
    centered?: boolean
}