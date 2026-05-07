let math = Number(prompt("Please enter your math marks(0-100):"));
let computer = Number(prompt("Please enter your computer marks(0-100):"));
let physics = Number(prompt("Please enter physics marks(0-100):"));
let chemistry = Number(prompt("Please enter chemistry marks(0-100):"));

function Avg(){
    if(math<0 || math>100 ||computer<0 || computer>100 || physics<0 || physics>100 || chemistry<0 || chemistry>100){
    console.log("Marks is out of range!");
    return;
}
    let sum = math+computer+physics+chemistry ;
    console.log("You got",sum,"out of 400")
    let output = (sum/400)*100 
     return output
};

let result = Avg()
console.log("You are grade is ", result)
