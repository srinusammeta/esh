
let questions = [
  {
    id: 1,
    question: "Stack is also called as___",
    answer: "Last In First Out",
    options: [
      "First In First Out",
      "Last In First Out",
      "Last In Last In",
      "First In First In"
    ]
  },
  {
    id: 2,
    question: "Representation of data structure in memory is known as",
    answer: "abstract data type",
    options: [
      "recursive",
      "storage structure",
      " file structure",
      "abstract data type"
    ]
  },
  {
    id: 3,
    question: "Which of the following is not the part of ADT description?",
    answer: "None of the above",
    options: [
      "Operations",
      "Data",
      "Both",
      "None of the above"
    ]
  },
  {
    id: 4,
    question: "The property of binary tree is",
    answer: "The right subtree can be empty",
    options: [
      "The first subset is called left subtree",
      "The second subtree is called right subtree",
      "The right subtree can be empty",
      "The root cannot contain NULL"
    ]
  },
  {
    id: 5,
    question: "A linear collection of data elements where the linear node is given by means of pointer is called",
    answer: "linked list",
    options: [
      "linked list",
      "node list",
      "Primitive list",
      "None of the above"
    ]
  },

  {
    id: 6,
    question: "……………….. level is where the model becomes compatible executable code",
    answer: "Implementation level",
    options: [
      "Abstract level",
      "Application level",
      "Implementation level",
      "All of the above"
    ]
  },



  {
    id: 7,
    question: "Which of the following is not the type of queue?",
    answer: "Single ended queue",
    options: [
      "Ordinary queue",
      "Single ended queue",
      "Circular queue",
      "Priority queue"
    ]
  },


  
  {
    id: 8,
    question: "Quick sort is also known as",
    answer: "none of these",
    options: [
      "merge sort",
      "bubble sort",
      "heap sort",
      "none of these"
    ]
  },



  {
    id: 9,
    question: "……………. Is a directed tree in which outdegree of each node is less than or equal to two",
    answer: "Binary tree",
    options: [
      "Unary tree",
      "Ternary tree",
      "Binary tree",
      "Both B and C"
    ]
  },




  
  {
    id: 10,
    question: "An algorithm is made up of two independent time complexities f (n) and g (n). Then the complexities of the algorithm is in the order of",
    answer: "Max (f(n),g(n))",
    options: [
      "f(n) x g(n)",
      "Max (f(n),g(n))",
      "Min (f(n),g(n))",
      "f(n)+g(n)"
    ]
  }









];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
