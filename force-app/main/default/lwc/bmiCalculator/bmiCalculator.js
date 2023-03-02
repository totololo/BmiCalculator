import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height='';
    weight='';
    bmiValue
    result
    submitHandler(event){
        event.preventDefault();
        console.log("height",this.height);
        console.log("weight",this.weight);
        this.calculate();
    } 
    inputHandler(event){
        const {name,value}=event.target;
        if (name==="height"){
            this.height=value;
        }
        if (name==="weight"){
            this.weight=value;
        }
    }  
    calculate(){
        let height=Number(this.height)/100;
        let weight= Number(this.weight);
        let bmi=weight/(height*height);
        this.bmiValue=Number(bmi.toFixed(2));
        if(this.bmiValue<18.5){
            this.result="Underweight";
        }else if (this.bmiValue>=18.5 && this.bmiValue<25){
            this.result="Healthy"
        }else if (this.bmiValue>=25 && this.bmiValue<30){
            this.result="Overweight"
        }else if (this.bmiValue>=30 ){
            this.result="Obese"
        }
        console.log("BMI Value is : ",this.bmiValue);
        console.log("Result is : ",this.result);
    }
    recalculate(){
        
    }
}