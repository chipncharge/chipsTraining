function displayEvens() {
  var startNumber = parseInt(document.getElementById("startNumber").value);
  var endNumber = parseInt(document.getElementById("endNumber").value);
  var stepNumber = parseInt(document.getElementById("stepNumber").value);

  resetForm();

  if(endNumber <= startNumber) {
    document.getElementById("endNumber").parentElement.parentElement.className = "form-group row has-error";
    document.getElementById("endNumberError").parentElement.parentElement.style.display = "flex";
    document.getElementById("endNumberError").innerText = "The end number must be greater than the starting number.";
    return false;
  }

  if(stepNumber < 1) {
    document.getElementById("stepNumber").parentElement.parentElement.className = "form-group row has-error";
    document.getElementById("stepNumberError").parentElement.parentElement.style.display = "flex";
    document.getElementById("stepNumberError").innerText = "The step number must be greater than or equal to 1.";
    return false;
  }

  var numberList = [];

  for(var currentNumber = startNumber; currentNumber <= endNumber; currentNumber += stepNumber) {
    if(currentNumber % 2 === 0) {
      numberList.push(currentNumber);
    }
  }

  var HTMLList = "";

  for(i = 0; i < numberList.length; i++) {
    HTMLList = HTMLList + '<li>' + numberList[i] + '</li>';
  }

  document.getElementById("resultsList").innerHTML = HTMLList;
  document.getElementById("startNumberSpan").innerHTML = startNumber;
  document.getElementById("endNumberSpan").innerHTML = endNumber;
  document.getElementById("stepNumberSpan").innerHTML = stepNumber;
  document.getElementById("resultsRowNumbers").style.display = "block";
  document.getElementById("resultsRowText").style.display = "block";
  return false;
}

function resetForm() {
  document.getElementById("endNumberError").parentElement.parentElement.style.display = "none";
  document.getElementById("stepNumberError").parentElement.parentElement.style.display = "none";

  var errorList = document.getElementsByClassName("has-error");
  for(errorItem in errorList) {
    errorList[errorItem].className = "form-group row";
  }
}