const factDisplay = document.getElementById("factDisplay");
const facts = [
    "Depression is a common mental health disorder that affects millions of people worldwide.",
    "It can affect people of all ages, genders, and backgrounds.",
    "Depression is characterized by persistent feelings of sadness, hopelessness, and loss of interest or pleasure in activities.",
    "It is more than just feeling sad occasionally; it can interfere with daily life and activities.",
    "Depression is often accompanied by physical symptoms like changes in appetite, sleep disturbances, and fatigue.",
    "There are different types of depression, including major depressive disorder, persistent depressive disorder, and seasonal affective disorder, among others.",
];

let factIndex = 0;

function displayNextFact() {
    factDisplay.style.animation = "changeFact 2s";
    setTimeout(() => {
        factDisplay.textContent = facts[factIndex];
        factDisplay.style.animation = "fadeInOut 4s";
        factIndex = (factIndex + 1) % facts.length;
    }, 2000);
}

displayNextFact();
setInterval(displayNextFact, 8000); // Change fact every 8 seconds