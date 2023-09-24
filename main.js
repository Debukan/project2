const questionContainers = document.querySelectorAll('.question-container');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;

function showQuestion(index) {
    questionContainers.forEach((container, i) => {
        if (i === index) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionContainers.length) {
        showQuestion(currentQuestionIndex);
    } else {
        // Последний вопрос - выполните необходимые действия
        displayResults();
    }
}

function displayResults() {
    let profession = "";
        if (score >= 8) {
            profession = "Специалист по искусственному интеллекту";
        } else if (score >= 6) {
            profession = "Аналитик данных";
        } else if (score >= 4) {
            profession = "Программист";
        } else if (score >= 2) {
            profession = "Инженер по кибербезопасности";
        } else {
            profession = "Системный администратор";
        }

    const resultElement = document.getElementById('result');
    resultElement.textContent = profession;
    questionContainers[currentQuestionIndex - 1].style.display = 'none';
    questionContainers[currentQuestionIndex - 1].appendChild(resultsElement);

    nextButton.style.display = 'none';

}

showQuestion(currentQuestionIndex);
nextButton.addEventListener('click', loadNextQuestion);
