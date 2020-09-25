
export function operationManager(prevOp, ans, convertNum) {
    let newValue;
    switch (prevOp) {
        case "add":
            newValue = ans + convertNum;
            break;
        case "subtract":
            newValue = ans - convertNum;
            break;
        case "multiply":
            newValue = ans * convertNum;
            break;
        case "divide":
        if (convertNum === 0 || convertNum === -0){
            return "error";
        }
            newValue = ans / convertNum;
            break;
        case "calculate":
            if (convertNum || convertNum === 0) {
                newValue = convertNum;
            } else{
                newValue = ans;
            }
            break;
        default:
            return "error";
    }
    if (newValue.toString().length> 10) {
        //console.log(newValue);
       return newValue.toPrecision(10);
    }
    return newValue;
}