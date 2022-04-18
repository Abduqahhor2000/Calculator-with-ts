import React from "react";
import "../sass/Button.scss"

export enum ButtonType{
    Number,
    Operation,
}

type Props = React.HTMLProps<HTMLDivElement> & {
    buttonType?: ButtonType;
    label: string;
    position?: [x: number, y: number];
    width?: number;
    height?: number;
}

export const Button: React.FC<Props> = ({buttonType = ButtonType.Operation, label, position, width, height, onClick}) => {
    const style: React.CSSProperties = {}
    if(position){
        style.gridColumnStart = position[0] + 1;
        style.gridRowStart = position[1] + 1;
    }
    if(width){
        style.gridColumnEnd = `span ${width}`;
    }
    if(height){
        style.gridRowEnd = `span ${height}`;
    }
    if(buttonType === ButtonType.Number){
        style.backgroundColor = "#e48900";
        style.color = "black";
    }

    return(
        <div onClick={onClick} style={style} className="button">{label}</div>
    )
}