function helloWorld(){
    console.log("Hello World!")
}

const summary = (a, b) =>{
    c = a + b;
    console.log(c);
    return c;
}

const mult = (a, b) =>{
    c = a * b;
    console.log(c);
    return c;
}

const pyFunc = (number, minimum) => {
   
    if (number % 3 == 0) {
        let min = Math.min(minimum, number)
        console.log(min)
    } else {
    console.log("NAN")
    }

}

helloWorld()
summary(50, 6)
mult(9, 4)
pyFunc(42, 30001)
