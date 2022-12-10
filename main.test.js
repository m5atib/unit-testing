const Add = require('./main')

test("addition of none given arguments" , () => {
    expect(Add()).toBe(0)
});
test("addition of empty equal zero" , () => {
    expect(Add("")).toBe(0)
});

test("addition of 77 equal 77" , () => {
    expect(Add("77")).toBe(77)
});

test("addition of 55 and 88 equals 143",()=>{
    expect(Add("55,88")).toBe(143)
})
test("Addition of more than 2 items in the given string" , () => {
    expect(()=>Add("1,2,3")).toThrow('Exceeded Numbers')
})

test("Addition of strings contains incorrect numbers" , () => {
    expect(()=>Add("1,sdf")).toThrow('Wrong Numbers')
})

test("if there is negative numbers" , ()=> {
    expect(()=>Add("1,-1")).toThrow('Negatives Not Allowed')
})