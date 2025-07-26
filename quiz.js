function checkAnswer() {
    correctAnswer = "4";
    checked = document.querySelector('quiz');
    userAnswer = checked.value;

    if (userAnswer == correctAnswer){
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }

    const submitButton = document.getElementById('submit-answer');
    submitButton.addEventListener('click', checkAnswer);

}

    
