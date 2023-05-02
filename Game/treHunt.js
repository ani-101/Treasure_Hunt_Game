// Select elements from the HTML document
//const startButton = document.querySelector('button');
const puzzleInput = document.querySelector('input[type="text"]');
const submitButton = document.querySelector('button[type="submit"]');
const feedbackMessage = document.querySelector('.feedback');

const input = document.getElementById('nameInput');
const button = document.getElementById('myButton');
const errorMessage = document.getElementById('errorMessage');

// Add an event listener to the button
button.addEventListener('click', function () {
    // Get the name from the input element
    const name = input.value;

    // Check if the name is empty
    if (name === '') {
        // Display an error message
        errorMessage.textContent = 'Please enter your name!';
    } else {
        // Display a welcome message
        const message = `Welcome, ${name}!`;
        alert(message);
    }
});

const startButton = document.getElementById('startButton');

// Add an event listener to the button
startButton.addEventListener('click', function () {
    // Code to start the game goes here
    alert('The game has started!');
});






// Define the puzzles and their solutions
const puzzles = [
    {
        puzzle: 'What has a head and a tail, but no body?',
        solution: 'coin'
    },
    {
        puzzle: 'I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?',
        solution: 'pencil'
    },
    // Add more puzzles as needed
];

// Define variables to track the player's progress
let currentPuzzle = 0;
let solvedPuzzles = 0;

// // Define a function to handle puzzle submission
// function submitAnswer(event) {
//     event.preventDefault();
//     const answer = puzzleInput.value.toLowerCase();
//     if (answer === puzzles[currentPuzzle].solution) {
//         // The answer is correct
//         feedbackMessage.style.display = 'none';
//         currentPuzzle++;
//         solvedPuzzles++;
//         if (currentPuzzle < puzzles.length) {
//             // There are more puzzles to solve
//             displayPuzzle();
//         } else {
//             // The player has solved all puzzles
//             endGame();
//         }
//     } else {
//         // The answer is incorrect
//         feedbackMessage.style.display = 'block';
//     }
//     puzzleInput.value = '';
// }

// // Define a function to display the current puzzle
// function displayPuzzle() {
//     const currentPuzzleObject = puzzles[currentPuzzle];
//     const puzzleElement = document.createElement('div');
//     puzzleElement.innerHTML = `
//     <h2>Clue #${currentPuzzle + 1}</h2>
//     <p>${currentPuzzleObject.puzzle}</p>
//     // <form>
//     //   <input type="text" placeholder="Enter your answer" required>
//     //   <button type="submit">Submit Answer</button>
//     // </form>
//   `
//     puzzleElement.querySelector('form').addEventListener('submit', submitAnswer);
//     main.appendChild(puzzleElement);
//}

// Define a function to end the game and display the results
function endGame() {
    main.innerHTML = `
    <h2>Congratulations, you've found the treasure!</h2>
    <p>You solved ${solvedPuzzles} puzzles.</p>
  `;
}

// Define a function to start the game
function startGame() {
    startButton.style.display = 'none';
    displayPuzzle();
}

// Add an event listener to the start button
startButton.addEventListener('click', startGame);
