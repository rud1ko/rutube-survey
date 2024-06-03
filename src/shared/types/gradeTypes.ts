import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface GradeTypes extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>{
    rate: number | null,
    isActive?: boolean
}