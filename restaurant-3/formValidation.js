var error = false;

function formValidation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  clearErrors();

  validateName(name);
  validateEmail(email);
  validatePhone(phone);

  if(error === false) {
    confirmationMessage();
  }
  return false;
}

function validateName(name) {
  if(name.length < 2) {
    document.getElementById("invalidName").style.display = "flex";
    error = true;
  }
}

function validateEmail(email) {
  const atCheck = RegExp('[@]');
  const periodCheck = RegExp('[.]');
  if(email.length < 6 || !atCheck.test(email) || !periodCheck.test(email)) {
    document.getElementById("invalidEmail").style.display = "flex";
    error = true;
  }
}

function validatePhone(phone) {
  const phoneCheck = RegExp('^[0-9()-.]+');
  if(phone.length < 10 || !phoneCheck.test(phone)) {
    document.getElementById("invalidPhone").style.display = "flex";
    error = true;
  }
}

function confirmationMessage() {
  $('#confirmationModal').modal();
}

function clearErrors() {
  error = false;
  document.getElementById("invalidName").style.display = "none";
  document.getElementById("invalidEmail").style.display = "none";
  document.getElementById("invalidPhone").style.display = "none";
}