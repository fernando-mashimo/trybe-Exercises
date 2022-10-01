// body
const container = document.getElementById("container");
container.style.backgroundColor = "rgb(243,243,243)";

// header
const headerContainer = document.getElementById("header-container");
headerContainer.style.backgroundColor = "rgb(0,176,105)";
headerContainer.style.color = "rgb(250,250,250)";

// emergency tasks
const emergencyTasks = document.getElementsByClassName("emergency-tasks");
for (let elements of emergencyTasks) {
    elements.style.backgroundColor = "rgb(255,159,132)";
}

const emergencyH3 = document.querySelectorAll(".emergency-tasks h3");
for (let elements of emergencyH3) {
    elements.style.backgroundColor = "rgb(165,0,243)";
}

// no emergency tasks
const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks");
for (let elements of noEmergencyTasks) {
    elements.style.backgroundColor = "rgb(249,219,94)";
}
const noEmergencyH3 = document.querySelectorAll(".no-emergency-tasks h3");
for (let elements of noEmergencyH3) {
    elements.style.backgroundColor = "rgb(35,37,37)";
}

// footer
const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "rgb(0,53,51)";