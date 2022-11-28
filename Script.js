
// ------------ Task 1 ------------ //
    //  min age from the group //
const group = [
    { name: "Temo", age: 25 },
    { name: "Lasha", age: 21 },
    { name: "Ana", age: 28 },
  ];

function youngest (group) {
    return Math.min (...group.map((obj) => obj.age));
}

console.log(youngest(group));

  //  max age from the group //

function oldest (group) {
    return Math.max (...group.map((obj) => obj.age));
}

console.log (oldest(group));



// ------------ Task 2 ------------ //
//  object "user" into new object //

const user = {
    name: 'Natali',
    lastName: 'Kemkhadze',
    age: 27,
};

const newUser = {
    ...user
};

console.log (user);
console.log (newUser);




// ------------ Task 3 ------------ //
   //  fist one to roll "3" //



function game() {
    return parseInt(Math.random() * 10 + 3);
}

function winner() {
    do {
        let player1 = game();
        let player2 = game();
        
        if (player1 === 3){
            return 'Winner: Player 1';
        }
        if (player2 === 3){
            return 'Winner: Player 2';
        }
        if (player1 === 3 && player2 === 3){
            return "its a tie";
        }
    }
    while (true)
}

console.log(winner());