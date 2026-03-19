const questions = [
{
  question: "1. What is the capital of India?",
  options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
  answer: "Delhi"
},
{
  question: "2. Which language runs in browser?",
  options: ["Java", "C++", "Python", "JavaScript"],
  answer: "JavaScript"
},
{
  question: "3. What does HTML stand for?",
  options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks Text Management Language"],
  answer: "Hyper Text Markup Language"
},
{
  question: "4. Which CSS property changes text color?",
  options: ["background-color", "color", "font-style", "text-align"],
  answer: "color"
},
{
  question: "5. Which company developed Java?",
  options: ["Microsoft", "Sun Microsystems", "Google", "IBM"],
  answer: "Sun Microsystems"
},
{
  question: "6. What is 2 + 2?",
  options: ["3", "4", "5", "6"],
  answer: "4"
},
{
  question: "7. Which tag is used for JavaScript?",
  options: ["<js>", "<javascript>", "<script>", "<code>"],
  answer: "<script>"
},
{
  question: "8. Which is not a JavaScript data type?",
  options: ["String", "Boolean", "Float", "Undefined"],
  answer: "Float"
},
{
  question: "9. What does CSS stand for?",
  options: ["Cascading Style Sheets", "Color Style System", "Creative Style Sheet", "Computer Style Sheet"],
  answer: "Cascading Style Sheets"
},
{
  question: "10. Which method prints in console?",
  options: ["console.log()", "print()", "echo()", "write()"],
  answer: "console.log()"
},
{
  question: "11. Which symbol is used for comments in JS?",
  options: ["//", "##", "<!-- -->", "**"],
  answer: "//"
},
{
  question: "12. Which HTML tag creates a link?",
  options: ["<a>", "<link>", "<href>", "<url>"],
  answer: "<a>"
},
{
  question: "13. Which keyword declares variable in JS?",
  options: ["int", "var", "define", "letvar"],
  answer: "var"
},
{
  question: "14. Which array method adds item at end?",
  options: ["push()", "pop()", "shift()", "concat()"],
  answer: "push()"
},
{
  question: "15. Which operator checks equality with type?",
  options: ["==", "=", "===", "!="],
  answer: "==="
},
{
  question: "16. Which is backend language?",
  options: ["HTML", "CSS", "Java", "Bootstrap"],
  answer: "Java"
},
{
  question: "17. What does DOM stand for?",
  options: ["Document Object Model", "Data Object Management", "Digital Ordinance Model", "Desktop Oriented Mode"],
  answer: "Document Object Model"
},
{
  question: "18. Which loop runs at least once?",
  options: ["for", "while", "do...while", "foreach"],
  answer: "do...while"
},
{
  question: "19. Which method converts JSON to object?",
  options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
  answer: "JSON.parse()"
},
{
  question: "20. Which is used for responsive design?",
  options: ["Media Query", "Font-size", "Color", "Padding"],
  answer: "Media Query"
},
{
  question: "21. Which tag inserts image?",
  options: ["<img>", "<image>", "<pic>", "<src>"],
  answer: "<img>"
},
{
  question: "22. Which is not framework?",
  options: ["React", "Angular", "Vue", "MySQL"],
  answer: "MySQL"
},
{
  question: "23. Which company created React?",
  options: ["Google", "Facebook", "Microsoft", "Apple"],
  answer: "Facebook"
},
{
  question: "24. Which method removes last array item?",
  options: ["pop()", "push()", "shift()", "slice()"],
  answer: "pop()"
},
{
  question: "25. Which keyword creates function?",
  options: ["function", "def", "create", "method"],
  answer: "function"
}];

let currentIndex = 0;
let score = 0;
let selectedAnswer = "";

const startBtn = document.getElementById("startBtn");
const quiz = document.getElementById("quiz");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  quiz.style.display = "block";
  startBtn.style.display = "none";
  loadQuestion();
}

function loadQuestion() {
  
  const q = questions[currentIndex];
  document.getElementById("question").innerText = q.question;
  
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  
  q.options.forEach(option => {
    
    const btn = document.createElement("button");
    btn.innerText = option;
    
    btn.onclick = () => {
      
      selectedAnswer = option;
      
      const allBtns = optionsDiv.querySelectorAll("button");
      
      allBtns.forEach(b => {
        b.disabled = true;
        
        if (b.innerText === q.answer) {
          b.style.backgroundColor = "lightgreen"; // correct
        }
        else if (b.innerText === option) {
          b.style.backgroundColor = "salmon"; // wrong
        }
      });
      
    };
    
    optionsDiv.appendChild(btn);
  });
}
7

function nextQuestion() {
  
  if (selectedAnswer === "") {
    alert("Please select an answer!");
    return;
  }
  
  if (selectedAnswer === questions[currentIndex].answer) {
    score++;
  }
  
  const quizBox = document.getElementById("quiz");
  quizBox.style.transform = "translateX(-100%)";
  quizBox.style.transition = "0.4s";
  
  setTimeout(() => {
    
    currentIndex++;
    selectedAnswer = "";
    
    if (currentIndex < questions.length) {
      loadQuestion();
      quizBox.style.transform = "translateX(0)";
    }
    else {
      
      document.getElementById("question").innerText = "Quiz Completed";
      document.getElementById("options").innerHTML = "";
      
      let message = "";
      
      if (score >= 20) {
        message = "Excellent!";
      }
      else if (score >= 10) {
        message = "Good Job!";
      }
      else {
        message = "Keep Practicing!";
      }
      
      document.getElementById("result").innerText =
        "Your Score: " + score + "/" + questions.length + " - " + message;
    }
    
  }, 400);
}