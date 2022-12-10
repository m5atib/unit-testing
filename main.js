function Add(numbers = "") {
    if (numbers.trim() == "") return 0;
    let self = numbers.split(',')
    if (self.length == 0) return 0;
    if (self.length > 2) {
        return new Error("Exceeded Numbers")
    }
    let sum = 0;


    for (item of self) {
        if (isNaN(item) === true) {
            return new Error("Wrong Numbers")
        } else {
            sum += Number(item);
        }
    }
    return sum;
}
console.log(Add("1,sdf"))
module.exports = Add;