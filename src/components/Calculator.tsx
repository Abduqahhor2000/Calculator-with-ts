import React, { useState } from "react";
import { Calc, CalcInput, InputType, OperatorType } from "../modules/calc";
import "../sass/Cantainer.scss"
import { Button, ButtonType } from "./Button";

export const Calculator: React.FC<{}> = () => {
    const [inputs, setInputs] = useState<Array<CalcInput>>([])
    console.log(inputs)

    const numberHendler = (value: number): void => {
        setInputs((prev) => [...prev, {type: InputType.Numerical, value}])
    }
    
    const operationHendler = (operator: OperatorType): void => {
        setInputs((prev) => [...prev, {type: InputType.Operator, operator}])
    }

    const allClear = () => {
        setInputs([])
    }

    const oops = () => {
        setInputs((prev) => prev.slice(0, -1))
    }

    return(
        <div className="grid">
            <div className="display">{Calc.getState(inputs).displayValue}</div>
            <Button position={[0, 1]} label="AC" onClick={() => allClear()}  width={2}/>
            <Button position={[2, 1]} label="Oops" onClick={() => oops()} width={2}/>
            <Button position={[3, 2]} label="-" onClick={()=> operationHendler(OperatorType.Subtract)} />
            <Button position={[3, 3]} label="+" onClick={()=> operationHendler(OperatorType.Add)}/>
            <Button position={[3, 4]} label="=" onClick={()=> operationHendler(OperatorType.Equals)} height={2}/>
            <Button position={[2, 2]} buttonType={ButtonType.Number} label="9" onClick={() => numberHendler(9)}/>
            <Button position={[1, 2]} buttonType={ButtonType.Number} label="8" onClick={() => numberHendler(8)}/>
            <Button position={[0, 2]} buttonType={ButtonType.Number} label="7" onClick={() => numberHendler(7)}/>
            <Button position={[2, 3]} buttonType={ButtonType.Number} label="6" onClick={() => numberHendler(6)}/>
            <Button position={[1, 3]} buttonType={ButtonType.Number} label="5" onClick={() => numberHendler(5)}/>
            <Button position={[0, 3]} buttonType={ButtonType.Number} label="4" onClick={() => numberHendler(4)}/>
            <Button position={[2, 4]} buttonType={ButtonType.Number} label="3" onClick={() => numberHendler(3)}/>
            <Button position={[1, 4]} buttonType={ButtonType.Number} label="2" onClick={() => numberHendler(2)}/>
            <Button position={[0, 4]} buttonType={ButtonType.Number} label="1" onClick={() => numberHendler(1)}/>
            <Button position={[0, 5]} buttonType={ButtonType.Number} label="0" onClick={() => numberHendler(0)} width={3}/>
        </div>
    )
}
