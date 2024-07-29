const form = document.getElementById('mental-health-form');
const resultsDiv = document.getElementById('results');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(form);
  const scores = {};
  formData.forEach((value, key) => {
    scores[key] = parseInt(value);
  });
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const resultText = getResultText(totalScore);
  resultsDiv.innerHTML = resultText;
});

function getResultText(score) {
  if (score <= 10) {
    return 'You are experiencing low levels of mental health symptoms.';
  } else if (score <= 20) {
    return 'You are experiencing moderate levels of mental health symptoms.';
  } else {
    return 'You are experiencing high levels of mental health symptoms.';
  }
}