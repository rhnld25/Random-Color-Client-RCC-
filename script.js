color = ["Blue", "Red", "Green", "White"]

console.log("Hello!")
// Random color not persistent in sessions
// var randomIndex = Math.floor(Math.random() * color.length);
// console.log("I am index " + randomIndex)

// Persistent color in sessions
let sessionId = sessionStorage.getItem("sessionId");

if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem("sessionId", sessionId);
}

console.log(sessionId)

let sum = 0;

for (let i = 0; i < sessionId.length; i++) {
    sum += sessionId.charCodeAt(i);
}

console.log(sum);

let randomIndex = sum % color.length;

console.log("Color index from sessionId: " + randomIndex);

let randomColor = document.body.style.backgroundColor = color[randomIndex];
let colorName = document.getElementById("color-name");

if (randomColor == "White") {
    document.body.style.color = "black";
    colorName.style.textShadow = "2px 2px 4px #000000";
}
else {
    document.body.style.color = "white";
    colorName.style.textShadow = "2px 2px 4px #ffffff";
}

colorName.innerText = randomColor;
colorName.style.color = randomColor;


console.log("And my color is " + document.body.style.backgroundColor);

