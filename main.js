function Add(numbers = "") {
    if (numbers.trim() == "") return 0;
    let self = numbers.split(',')
    if (self.length == 0) return 0;
    if (self.length > 2) {
        throw new Error("Exceeded Numbers")
    }
    let sum = 0;

    let negStack = []
    
    for (item of self) {
        if (isNaN(item) === true) {
            throw new Error("Wrong Numbers")
        } else {
            if (Number(item) < 0 )
            {
                negStack.push(Number(item))
            }
            sum += Number(item);
        }
    }
    if (negStack.length > 0){
        
        //negStack.forEach((neg) => console.log(neg))
        throw new Error("Negatives Not Allowed " +  negStack.toString())
    }
    return sum;
}

module.exports = Add;