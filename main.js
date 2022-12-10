function Add(numbers = "") {

    let self = numbers.split(',')
    if (self.length > 2) {
        console.log("the number of items should not be exceeed 2 items")
        return;
    }
    const re = /[a-zA-Z]/;
    const mat = re.exec(numbers)

    if (mat)
    {
        console.log("Your input must contain 0,1 or 2 numbers only separated by comma(,) like that 1,25,6 !")
        return 
    }
}
