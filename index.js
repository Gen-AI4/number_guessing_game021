import inquirer from "inquirer";
const guessNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([{
        name: "guessedNumber", type: "number", message: "Guess a number 1-10"
    },
]);
if (answer.guessedNumber === guessNumber) {
    console.log("Congratulations! 🎉🎉 You guessed the right number");
}
else {
    console.log("Sorry! You guessed the wrong number");
}
