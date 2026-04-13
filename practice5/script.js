// 1. Change Heading
function changeHeading() {
    let text = document.getElementById("text").value;
    document.getElementById("heading").innerHTML = text;
}

// 2. Change Background
function changeBg() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);;
}

// 3. Increase Font
function increaseFont() {
    document.getElementById("heading").style.fontSize = "40px";
    font+=2;
}

// 4. Show / Hide Paragraph
function togglePara() {

    let p = document.getElementById("para");

    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}