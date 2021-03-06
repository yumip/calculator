export default class CalculatorParameters {
    constructor() {
        this.answer = 0;
        this.strNumber = "";
        this.previousOperator = "";
        this.operationBeforeCalculate = "";
        this.globalConvertNumber = 0;
    }

    numberManager(input) {
        //calculator.querySelector("button[data-action= 'clear']").innerHTML = "CE";
        let digitCounter = 9;
        if (this.strNumber[0] === "-"){
            digitCounter += 1;
        }
        if (this.strNumber.includes(".")){
            digitCounter += 1;
             if (this.strNumber.substring(0, 3) === "-0."||
                 this.strNumber.substring(0, 2) === "0."){
                     digitCounter += 1;
                 }
         }

        if (this.strNumber.length > digitCounter){
            return this.strNumber.substring(0, digitCounter + 1);
        };

        if (this.strNumber.includes(".") && input==="."){
            return this.strNumber;
        }
        this.strNumber = this.strNumber.concat(input);

        // 0 typo handling (edge case)
        this.strNumber === "." && (this.strNumber = "0.");
        this.strNumber === "-." && (this.strNumber = "-0.");
        if (this.strNumber === "-00" || this.strNumber === "-0") {
            return this.strNumber = "-0";
        } 
        if (this.strNumber === "-") {
            return this.strNumber;
        }
        if (
            (!Number(this.strNumber) && Number(this.strNumber) !== 0) ||
            (this.strNumber[0] === "0" && this.strNumber[1] !== ".") ||
            (this.strNumber.substring(0,2) === "-0" && this.strNumber[2] !== ".")
        ) {
            this.strNumber = parseFloat(this.strNumber).toString();
        }
        return this.strNumber;
    }
    negativeInt(){

        if (this.strNumber.charAt(0)==="-"){
            this.strNumber = this.strNumber.substring(1);
            !this.strNumber && (this.strNumber = "0");
        } else {
            !this.strNumber && (this.strNumber = "0");
            this.strNumber = "-" + this.strNumber;
        }
        return this.strNumber;
    }
    backspace(){
         if (this.strNumber.length <= 1){
            this.strNumber = "0";
        } else {
        const splitNum=this.strNumber.split("");
        splitNum.pop();
        this.strNumber = splitNum.join("");
        }
         return this.strNumber;        
    }
    clearEntry() {
        this.strNumber = "";
    }

    allClear() {
        this.answer = 0;
        this.strNumber = "";
        this.previousOperator = "";
        this.operationBeforeCalculate = "";
        this.globalConvertNumber = 0;
    }
}