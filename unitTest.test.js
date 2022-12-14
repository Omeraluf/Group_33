// const { generateText } = require('./unitTest.js');

// test('is the account ok', ()=>{
//     const text =  generateText("Omer", 26);
//     expect(text).toBe(`Omer (26 years old)`);
// });

const { test1 } = require('./unitTest.js');

test('Checking accounts_1', ()=>{
    const account1 ={
        username: "daniel", // daniel == pipi
        password: "1234",
        role: "student"
    }
    
    expect(test1(account1.username, account1.password)).toBe("You have successfully logged in.");
});

test('Checking accounts_2', ()=>{
const account4={
    username: "roni",
    password: "9876",
    role: "storage_keeper"
}
expect(test1(account4.username, account4.password)).toBe("You have failed to log in.");
});

const { test2 } = require('./unitTest.js');

test('Pressing a button', ()=>{
    myButton = "Yes";
    expect(test2(myButton)).toBe("Went to gmail")
})



const { test3 } = require('./unitTest.js');

test('Is there enough quantity', ()=>{
    expect(test3()).toBe.true
})

