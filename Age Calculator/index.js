const { DateTime } = luxon;

let birthDateInput = document.getElementById('birthdate');
let preResult = document.getElementById('pre-result');
let result = document.getElementById('result');
let error = document.getElementById('error');
let resetButton = document.getElementById('resetbtn');

function showResetButton() {
  resetButton.style.display = 'block';
}

document.getElementById("calculatebtn").addEventListener("click", () => {
  
  preResult.innerHTML = '';
  result.innerHTML = '';
  error.innerHTML = '';

  let birthDateValue = birthDateInput.value;
  let birthDate = DateTime.fromISO(birthDateValue);
  let today = DateTime.now();
  let age = today.diff(birthDate, ["years", "months", "days"]).toObject();

  if (birthDateValue == '') {
    document.getElementById("error").textContent = "Please input your birthdate.";
    return;
  } else if (birthDate > today) {
    document.getElementById("error").textContent = "Birthdate cannot be in the future.";
    return;
  } 

  document.getElementById("pre-result").textContent = 'You are:';
  result.innerHTML = `
    <span class="age-number">${Math.floor(age.years)}</span> years,
    <span class="age-number">${Math.floor(age.months)}</span> months,
    and <span class="age-number">${Math.floor(age.days)}</span> days old.`;
  showResetButton();
});


document.getElementById('resetbtn').addEventListener('click', () => {
  birthDateInput.value = '';
  preResult.innerHTML = '';
  result.innerHTML = '';
  error.innerHTML = '';
});