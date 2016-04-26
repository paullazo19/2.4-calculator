document.addEventListener("DOMContentLoaded",
  (function(e){
    // all of my js code in here
    var clear = document.querySelector("[data-js='clear']");
    var number = document.querySelectorAll("[data-js='number']");
    var output = document.querySelector("[data-js='output']");
    var operator = document.querySelectorAll("[data-js='operator']");
    var equate = document.querySelector("[data-js='equate']");
    var numbersString = "";
    var calcLog = "";

    clear.addEventListener("click", function(e){
      var outputClear = "";
      numbersString = "";
      output.textContent = outputClear;
      e.preventDefault();
    });


    function setOutputText(text){
      output.textContent += text
    };


    for (var i = 0; i < number.length; i++) {

      number[i].addEventListener("click", function(e){
        var value = e.currentTarget.dataset.number;
        setOutputText(value);
        numbersString += value;
        e.preventDefault();
    })};


    for (var i = 0; i < operator.length; i++) {

        operator[i].addEventListener("click", function(e){
          operator = e.currentTarget.dataset.type;
          setOutputText(e.currentTarget.textContent);
          numbersString += operator;
          e.preventDefault();
    })};


    equate.addEventListener("click", function(e){
      var solution = eval(numbersString);
      var displaySolution = eval(numbersString);
      output.textContent = displaySolution;
      var  shortenedSolution = output.textContent;
      e.preventDefault();
      calcLog += numbersString;
      calcLog += operator;
      calcLog += "=";
      calcLog += solution;
      calcLog += ", ";

      if (Math.floor(displaySolution) != displaySolution) {
        shortenedSolution = displaySolution.toFixed(3);
        output.textContent = shortenedSolution;
      }else{
        output.textContent = shortenedSolution;
      };

    });
  }
));
