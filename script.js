const announcementContentInput = document.getElementById("input-content");
const announcementAuthorInput = document.getElementById("input-author");
const submitButton = document.getElementById("submitButton");
const announcementsList = document.getElementById("announcement-list");

submitButton.addEventListener("click", () => {
  addToList(announcementContentInput.value, announcementAuthorInput.value);
  announcementContentInput.value = "";
  announcementAuthorInput.value = "";
});

function addToList(h4Val, pVal) {
  const newLi = document.createElement("li");
  const newH4 = document.createElement("h4");
  const newP = document.createElement("p");
  newP.innerText = pVal;
  newH4.innerText = h4Val;
  newLi.appendChild(newH4);
  newLi.appendChild(newP);
  announcementsList.prepend(newLi);
}
