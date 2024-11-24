let correctAnswer;
let flag = false;
let correctScore = 0; // Initialize score counter
const totalQuestions = 10; // Total number of questions

// Fetch and display a question with options
const definition = () => {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b4d68ea946mshad498eaea6ef87cp142a6djsn5a8f3c208969',
            'x-rapidapi-host': 'quizmania-api.p.rapidapi.com',
        },
    };

    fetch(`https://quizmania-api.p.rapidapi.com/random-trivia`, options)
        .then((response) => response.json())
        .then((response) => {
            const questionElement = document.querySelector('#question');
            questionElement.innerText = response.question;

            const optionsContainer = document.querySelector('.quiz-options');
            optionsContainer.innerHTML = ''; // Clear old options
            correctAnswer = response.correct; // Store the correct answer

            response.answers.forEach((answer, index) => {
                const optionElement = document.createElement('li');
                optionElement.className = 'quiz-option';
                optionElement.innerText = answer;
                optionsContainer.appendChild(optionElement);

                optionElement.addEventListener('click', () => {
                    // Clear previous selections
                    document.querySelectorAll('.quiz-options li').forEach((opt) =>
                        opt.classList.remove('selected')
                    );
                    optionElement.classList.add('selected');
                });
            });
        })
        .catch((err) => console.error(err));
};

// Start the quiz
definition();

// Attach event listener to the "Next Question" button
const nextQuestionBtn = document.querySelector('#next-question');
nextQuestionBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (getQuestionCount() >= totalQuestions) {
        completeQuiz();
        return;
    }
    resetStyles(); // Reset styles from the previous question
    definition();
    updateQuestionCount();
    flag = false; // Reset flag for the new question
});

// Attach event listener to the "Check Answer" button
const checkAnswerBtn = document.querySelector('#check-answer');
checkAnswerBtn.addEventListener('click', verifyAnswer);

// Verify the selected answer
function verifyAnswer() {
    if (flag) {
        return;
    }
    flag = true;
    const selectedAnswer = document.querySelector('.selected');

    if (!selectedAnswer) {
        alert('Please select an answer!');
        return;
    }

    // Compare selected answer with the correct answer
    if (selectedAnswer.innerText.trim() === correctAnswer) {
        selectedAnswer.classList.add('verified'); // Add blue styles for correct answer
        incrementScore(); // Increment the score if the answer is correct
    } else {
        selectedAnswer.classList.add('wrong'); // Add red styles for incorrect answer
    }

    // Check if quiz is complete
    if (getQuestionCount() === totalQuestions) {
        completeQuiz();
    }
}

// Increment the score and update the UI
function incrementScore() {
    correctScore++;
    document.querySelector('#correct-score').innerText = correctScore;
}

// Update the question count
function updateQuestionCount() {
    let currentQuestion = getQuestionCount();
    currentQuestion++;
    localStorage.setItem('current-question', currentQuestion);
    document.querySelector('#current-question').innerText = currentQuestion;
}

// Get the current question count from localStorage
function getQuestionCount() {
    return parseInt(localStorage.getItem('current-question')) || 1;
}

// Complete the quiz and reset the localStorage
// function completeQuiz() {
//     alert(`Quiz Complete! Your score is ${correctScore} out of ${totalQuestions}.`);
//     // Reset localStorage values for question count and score
//     localStorage.setItem('current-question', 0);
//     localStorage.setItem('correct-score', 0);
//     resetStyles();
//     // Optionally disable buttons
//     document.querySelector('#next-question').disabled = true;
//     document.querySelector('#check-answer').disabled = true;
//     document.querySelector('#back-home').style.display ='inline';
// }
function completeQuiz() 
{
    alert(`Quiz Complete! Your score is ${correctScore} out of ${totalQuestions}.`);
    // Reset localStorage values for question count and score
    localStorage.setItem('current-question', 0);
    localStorage.setItem('correct-score', 0);
    resetStyles();

    // Disable quiz controls
    document.querySelector('#next-question').disabled = true;
    document.querySelector('#check-answer').disabled = true;

    // Show the "Back to Home" button
    const backHomeBtn = document.querySelector('#back-home');
    if (backHomeBtn) {
        console.log("Displaying 'Back to Home' button");
        backHomeBtn.style.display = 'inline';
    } else {
        console.error("'Back to Home' button not found in DOM");
    }
}


// Reset styles for a new question
function resetStyles() {
    // Clear all styles for options
    document.querySelectorAll('.quiz-options li').forEach((option) => {
        option.classList.remove('verified', 'wrong', 'selected');
    });
}

