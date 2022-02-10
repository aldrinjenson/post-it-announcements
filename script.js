const slamContentInput = document.getElementById("input-content");
const slamAuthorInput = document.getElementById("input-author");
const submitButton = document.getElementById("submitButton");
const slamsList = document.getElementById("slam-list");

submitButton.addEventListener("click", () => {
  addToList(slamContentInput.value, slamAuthorInput.value);
  slamContentInput.value = "";
  slamAuthorInput.value = "";
});

function addToList(h4Val, pVal) {
  const newLi = document.createElement("li");
  const newH4 = document.createElement("h4");
  const newP = document.createElement("p");
  newP.innerText = pVal;
  newH4.innerText = h4Val;
  newLi.appendChild(newH4);
  newLi.appendChild(newP);
  slamsList.appendChild(newLi);
}
