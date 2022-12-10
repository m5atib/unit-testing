const Add = require('./main')

test("addition of empty equal zero" , () => {
    expect(Add("")).toBe(0)
});

test("Addition of more than 2 items in the given string" , () => {
    expect(Add("1,2,3")).toStrictEqual(new Error('Exceeded Numbers'))
})

test("Addition of strings contains incorrect numbers" , () => {
    expect(Add("1,sdf")).toStrictEqual(new Error('Wrong Numbers'))
})