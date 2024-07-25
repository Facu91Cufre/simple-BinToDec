const input = document.getElementById("input");
const button = document.querySelector("button");
const output = document.querySelector(".result");

const checkInput = (number) => {
  const validate = /^[01]{1,8}$/;
  const value = number.value;
  if (!validate.test(value)) {
    if (/[^01]/.test(value)) {
      alert("number can only include 0s and 1s.");
    } else if (value.length === 0) {
      alert("Please enter at least 1 digit.");
    } else if (value.length > 8) {
      alert("number can not be more than 8 digits.");
    }
    return false;
  }
  return true;
};
const binToDec = (binNum) => {
  let userNumber = binNum.value;
  let result = 0;
  for (let i = 0; i < userNumber.length; i++) {
    result += userNumber[i] * 2 ** (userNumber.length - i - 1);
  }
  return result;
};

button.addEventListener("click", () => {
  if (checkInput(input)) {
    const decimalValue = binToDec(input);
    output.style.display = "block";
    output.textContent = decimalValue;
    input.value = "";
  }
});
