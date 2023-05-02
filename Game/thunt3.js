// Get the form and feedback elements
const form = document.querySelector('form');
const feedback = document.querySelector('.feedback');
const feedback1 = document.querySelector('.feedback1');
var num = 0;
let startTime, elapsedTime = 0;
const timerDisplay = document.getElementById('timer');

// Add an event listener to the form
form.addEventListener('submit', function (event) {

    // Prevent the default form submission behavior
    num++;

    function startTimer() {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
        elapsedTime = Date.now() - startTime;
        const minutes = Math.floor(elapsedTime / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        const milliseconds = elapsedTime % 1000;
        timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds < 100 ? '0' : ''}${milliseconds < 10 ? '0' : ''}${milliseconds}`;
    }
    event.preventDefault();

    // Get the input value and trim any whitespace
    const answer = form.elements['answer'].value.trim();

    // Check if the answer is correct
    if (answer.toLowerCase() === 'coin') {
        // If the answer is correct, redirect to the next puzzle page
        feedback1.style.display = 'block';
        setTimeout(() => { window.location.href = 'tHunt4.html' }, 2000);
    } else {
        // If the answer is incorrect, show the feedback message
        if (num == 2) {
            alert("Oo Oo,Restart the game");
            window.location.href = 'tHunt2.html';
        }
        else {
            feedback.style.display = 'block';
        }
    }
});
