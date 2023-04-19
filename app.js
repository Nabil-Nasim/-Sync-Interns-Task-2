let quizQuestions = [        
    {       
      question: "What is the  World's most populated country?",          
      options: ["India", "Pakistan", "China", "USA"],
      answer: "China"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Jupiter"
    },
    {
      question: "What is the highest mountain in the world?",
      options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount Blanc"],
      answer: "Mount Everest"
    },
    {
      question: "What is the World's Smallest Country?",
      options: ["Luxembourg", "Monaco", "New Zealand", "Vatican City"],
      answer: "Vatican City"
    },
    {
      question: "How many bones are there in human body?",
      options: ["300", "206", "210", "200"],
      answer: "206"
    }
  ];
  
  let questionIndex = 0;
  let score = 0;
  let threshold = 3;
 
  
  function displayQuestion() {
    let questionElement = document.getElementById("question");
    questionElement.textContent = [questionIndex+1]+") "+quizQuestions[questionIndex].question;
  
    let optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";
    Nextbtn=document.getElementById("Next-btn");
    for (let option of quizQuestions[questionIndex].options) {
      let optionElement = document.createElement("button");
      optionElement.textContent = option;
      optionElement.classList.add("option");
      optionElement.addEventListener("click", function() {
        let previousOption = optionsElement.querySelector(".selected");
        if (previousOption) {
          previousOption.classList.remove("selected");
          previousOption.style.backgroundColor = "";
          previousOption.style.color = "";
        }
        optionElement.classList.add("selected");
        if (option === quizQuestions[questionIndex].answer) {
          score++;
          optionElement.style.backgroundColor = "green";
        } else {
          optionElement.style.backgroundColor = "#333";
          optionElement.style.color = "#fff"
        }
        questionIndex++;
        if (questionIndex === quizQuestions.length) {
          displayResult();
          restartGame ();
        } else {
          Nextbtn.addEventListener("click", function(){
            displayQuestion();
          })
        }
      });
      optionsElement.appendChild(optionElement);
    }
  }    
  
  
  
  displayQuestion();
  
  
  function displayResult() {
    let questionElement = document.getElementById("question");
    questionElement.style.display = "none";
  
    let optionsElement = document.getElementById("options");
    optionsElement.style.display = "none";
  
    let resultElement = document.getElementById("result");
    resultElement.style.display = "block";
    resultElement.textContent = "Your score is " + score + " out of " + quizQuestions.length;
  
    let visual = document.getElementById("gif");
    visual.style.display = "block";
    if (score >= threshold) {
      visual.setAttribute("src", "Visuals/1.gif");
    } else {
      visual.setAttribute("src", "Visuals/2.gif");
    }
  
    let Nextbtn=document.getElementById("Next-btn");
    Nextbtn.textContent="Restart Quiz";
    Nextbtn.addEventListener("click",function(){
      location.reload();
    })
  }
  
  function restartGame (){
    questionIndex = 0;
    score = 0;
    threshold = 3;
    Nextbtn=document.getElementById("Next-btn");
    Nextbtn.textContent="Restart Quiz";
    resultElement = document.getElementById("result");
    resultElement.textContent = "";
    Nextbtn.addEventListener("click",function(){
      Nextbtn.textContent="Next";
      displayQuestion();
    })
  }

  