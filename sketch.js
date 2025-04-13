let questions = [
  { question: "1 + 1 = ?", options: ["1", "2", "3", "4"], answer: 1 },
  { question: "2 + 2 = ?", options: ["2", "3", "4", "5"], answer: 2 },
  { question: "3 + 1 = ?", options: ["3", "4", "5", "6"], answer: 1 },
  { question: "5 - 3 = ?", options: ["1", "2", "3", "4"], answer: 1 },
  { question: "4 + 0 = ?", options: ["3", "4", "5", "6"], answer: 1 },
];

let currentQuestion = -1;
let correctCount = 0;
let incorrectCount = 0;
let startButton;
let optionButtons = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  startButton = createButton("開始");
  startButton.position(width / 2 - 40, height / 2); // 將按鈕置於畫布中間
  startButton.mousePressed(startQuiz);
}

function draw() {
  background(220);
  if (currentQuestion === -1) {
    textSize(20);
    textAlign(CENTER, CENTER);
    text("歡迎來到數學測驗！", width / 2, height / 2 - 50);
  } else if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

function startQuiz() {
  startButton.hide();
  currentQuestion = 0;
  createOptionButtons();
}

function createOptionButtons() {
  for (let i = 0; i < 4; i++) {
    let btn = createButton("");
    btn.position(width / 2 - 40, height / 2 - 60 + i * 40); // 按鈕垂直排列在畫布中間
    btn.mousePressed(() => checkAnswer(i));
    optionButtons.push(btn);
  }
  updateQuestion();
}

function updateQuestion() {
  let q = questions[currentQuestion];
  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].html(q.options[i]);
  }
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    correctCount++;
  } else {
    incorrectCount++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    updateQuestion();
  } else {
    for (let btn of optionButtons) {
      btn.hide();
    }
  }
}

function displayQuestion() {
  textSize(18);
  textAlign(CENTER, CENTER);
  text(questions[currentQuestion].question, width / 2, height / 2 - 100);
}

function displayResult() {
  textSize(20);
  textAlign(CENTER, CENTER);
  text(`測驗結束！`, width / 2, height / 2 - 50);
  text(`答對：${correctCount} 題`, width / 2, height / 2);
  text(`答錯：${incorrectCount} 題`, width / 2, height / 2 + 50);
}
