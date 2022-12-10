const Add = require('./main')

test("addition of none given arguments" , () => {
    //Arrange
    const arg = null;
    //Act
    const result = Add();
    //Assert
    expect(result).toBe(0)
});
test("addition of empty equal zero" , () => {
    //Arrange
    const arg = "";
    //Act
    const result = Add(arg);
    //Assert
    expect(result).toBe(0)
});
test("addition of empty equal zero" , () => {
    //Arrange
    const arg = ", ";
    //Act
    const result = Add(arg);
    //Assert
    expect(result).toBe(0)
});

test("addition of 77 equal 77" , () => {
    //Arrange
    const arg = "77";
    //Act
    const result = Add(arg);
    //Assert
    expect(result).toBe(77)
});

test("addition of 55 and 88 equals 143",()=>{
    //Arrange
    const arg = "55,88";
    //Act
    const result = Add(arg);
    //Assert
    expect(result).toBe(143)
})
test("Addition of more than 2 items in the given string" , () => {
    //Arrange
    const arg = "1,2,3";
    //Act
    const result = ()=>Add(arg);
    //Assert
    expect(result).toThrow('Exceeded Numbers')
})

test("Addition of strings contains empty  numbers" , () => {
    //Arrange
    const arg = ", ,";
    //Act
    const result = ()=>Add(arg);
    //Assert
    expect(result).toThrow('Exceeded Numbers')
})
test("Addition of strings contains  incorrect numbers" , () => {
    //Arrange
    const arg = "1,dsf";
    //Act
    const result = ()=>Add(arg);
    //Assert
    expect(result).toThrow('Wrong Numbers')
})
test("if there is negative numbers" , ()=> {
    //Arrange
    const arg = "1,dsf";
    //Act
    const result = ()=>Add(arg);
    //Assert
    expect(()=>Add("1,-1")).toThrow('Negatives Not Allowed')
})
test("if there is  number larger than 1000" , ()=> {
    //Arrange
    const arg = "187,1005";
    //Act
    const result = Add(arg)
    //Assert
    expect(result).toBe(187)
})

