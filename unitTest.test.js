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



const { test4 } = require('./unitTest.js');

test('Report - Student 1st test', ()=>{
    expect(test4()).toBe(3);
})


const { test5 } = require('./unitTest.js');

test('Report - Student 2nd test', ()=>{
    expect(test5()).toBe.String;
})


const { test6 } = require('./unitTest.js');

test('Report - Student 3rd test', ()=>{
    expect(test6()).toBeCloseTo(30.001);
})


const { test7 } = require('./unitTest.js');

test('Report - Storage Keeper 1st test', ()=>{
    expect(test7()).toBe.true;
})

const { test8 } = require('./unitTest.js');

test('Report - Storage Keeper 2nd test', ()=>{
    expect(test8()).toBe.false;
})


const { test9 } = require('./unitTest.js');

test('Report - Storage Keeper 3rd test', ()=>{
    expect(test9()).toBe.true;
})

const { test10 } = require('./unitTest.js');

test('Search 1st', ()=>{
    expect(test10()).toBe("Art");
})

const { test11 } = require('./unitTest.js');

test('Search 2nd', ()=>{
    expect(test11()).not.toBe("Art");
})

const { test12_2_2 } = require('./unitTest.js');

test('Student - returning items - 2.2', ()=>{
    expect(test12_2_2()).toBe("Max quantity equals available quantity");
})

const { test13_2_3 } = require('./unitTest.js');

test('Student - ordering items to class - 2.3', ()=>{
    expect(test13_2_3()).toBe.true;
})

const { test14_1_1 } = require('./unitTest.js');

test('Teacher - Ordering equipment - 1.1', ()=>{
    expect(test14_1_1()).toBe.true;
})

const { test15_1_4 } = require('./unitTest.js');

test('Teacher - Observing Cart - 1.4', ()=>{
    expect(test15_1_4()).toBe.true;
})

const { test16_1_5 } = require('./unitTest.js');

test('Teacher - Request for more time lent - 1.5', ()=>{
    expect(test16_1_5()).toBe("Your request has been approved");
})

const { test17_1_7 } = require('./unitTest.js');

test('Teacher - Reset password - 1.7', ()=>{
    expect(test17_1_7()).toBe("1234");
})

const { test18_1_9 } = require('./unitTest.js');

test('Teacher - Report - 1.9', ()=>{
    expect(test18_1_9()).toBe("there is an item in the report");
})

const { test19_1_10 } = require('./unitTest.js');

test('Teacher - Teacher is prefered - 1.10', ()=>{
    expect(test19_1_10()).toBe("Only Teacher can order");
})

const { test20_2_4 } = require('./unitTest.js');

test('Student - Checking inventory - 2.4', ()=>{
    expect(test20_2_4()).toBe.true;
})
const { test21_2_6 } = require('./unitTest.js');

test('Student - Reset password - 2.6', ()=>{
    expect(test21_2_6()).toBe("4321");
})
const { test22_2_7 } = require('./unitTest.js');

test('Student - Checking order status - 2.7', ()=>{
    expect(test22_2_7()).toBe.true;
})
const { test23_2_9 } = require('./unitTest.js');

test('Student - Login - 2.9', ()=>{
    expect(test23_2_9()).toBe("logged in");
})

const { test24_2_10 } = require('./unitTest.js');
test('Student - Order equipment - 2.10', ()=>{
    expect(test24_2_10()).toBe("The item need to be returned");
})
const { test25_3_2 } = require('./unitTest.js');
test('Storage Keeper - Like new - 3.2', ()=>{
    expect(test25_3_2()).toBe("The item returned used");
})
const { test26_3_3 } = require('./unitTest.js');
test('Storage Keeper - Watch Profile - 3.3', ()=>{
    expect(test26_3_3()).toBe.true;
})
const { test27_3_4 } = require('./unitTest.js');
test('Storage Keeper - Remove item from storage - 3.4', ()=>{
    expect(test27_3_4()).toBe.true;
})
const { test28_3_6 } = require('./unitTest.js');
test('Storage Keeper - Message box - 3.6', ()=>{
    expect(test28_3_6()).toBe.true;
})
const { test29_3_1 } = require('./unitTest.js');
test('Storage Keeper - New inventory - 3.1', ()=>{
    expect(test29_3_1()).toBe("The message got from Teacher is: " + "New Canvas 80x90");
})
const { test30_3_7 } = require('./unitTest.js');
test('Storage Keeper - Reset password - 3.7', ()=>{
    expect(test30_3_7()).toBe("storage_keeper");
})
const { test31_3_10 } = require('./unitTest.js');
test('Storage Keeper - Cancel order - 3.10', ()=>{
    expect(test31_3_10()).toBe.true;
})
const { test32_3_5 } = require('./unitTest.js');
test('Storage Keeper - Cancel order - 3.5', ()=>{
    expect(test32_3_5()).toBe("The storage keeper allows you to extend your borrow time");
})
const { test33_1_3 } = require('./unitTest.js');
test('Teacher - Order new item - 1.3', ()=>{
    expect(test33_1_3()).toBe("Please order a new 8k camera");
})
const { test34_2_5 } = require('./unitTest.js');
test('Student - More time - 2.5', ()=>{
    expect(test34_2_5()).toBe("Please can i get another two weeks");
})
const { test35_2_8 } = require('./unitTest.js');
test('Student - Message Box - 2.8', ()=>{
    expect(test35_2_8()).toBe.true;
})