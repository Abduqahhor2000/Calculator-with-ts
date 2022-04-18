import { InputType, CalcInput, Calc, OperatorType, Operation} from "./calc";

test("generates operations", () => {
    const inputs: Array<CalcInput> = [
        {type: InputType.Numerical, value: 1},
        {type: InputType.Numerical, value: 2},
        {type: InputType.Operator, operator: OperatorType.Add},
        {type: InputType.Numerical, value: 3},
        {type: InputType.Operator, operator: OperatorType.Equals},   
    ]

    const operations: Operation[] = [
        {operator: OperatorType.Add, value: 12},
        {operator: OperatorType.Add, value: 3},      
        {operator: OperatorType.Equals, value: 0},
    ]

    expect(Calc.getOperations(inputs)).toEqual(operations)
})


test("derive state", () => {
    const inputs: Array<CalcInput> = [
        {type: InputType.Numerical, value: 1},
        {type: InputType.Numerical, value: 2},
        {type: InputType.Operator, operator: OperatorType.Add},
        {type: InputType.Numerical, value: 3},
        {type: InputType.Operator, operator: OperatorType.Equals},   
    ]

    expect(Calc.getState(inputs).displayValue).toEqual(15)
})

test("get total", () => {
    const operations: Array<Operation> = [
        {operator: OperatorType.Add, value: 12},
        {operator: OperatorType.Add, value: 3},
        {operator: OperatorType.Subtract, value: 5},
        {operator: OperatorType.Equals, value: 0},   
    ]

    expect(Calc.getTotal(operations)).toEqual(10)
})