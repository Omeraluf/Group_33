const { generateText } = require('./loginPage');

test('is the account ok', ()=>{
    const text =  generateText("Omer", 26);
    expect(text).toBe("Omer");
});


// const { account1 } = require('/.loginPage');