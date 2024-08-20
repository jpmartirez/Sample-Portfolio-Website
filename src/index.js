const indexHTML = document.querySelector(".user-name");
const userName = "John Paul Martirez";
let index = 0;
const delay = 1000;
const typeDelay = 250;

// Function to type the name letter by letter

function typeWriter() {
    if (index < userName.length) {
        indexHTML.innerHTML += userName.charAt(index);
        index++;
        setTimeout(typeWriter, typeDelay);
    } else {
        setTimeout(eraseWriter, delay);
    }
}

function eraseWriter() {
    if (index > 1) {
        indexHTML.innerHTML = userName.substring(0, index-1);
        index--;
        setTimeout(eraseWriter, typeDelay);
    } else {
        setTimeout(typeWriter, delay);
    }
}

document.getElementById("toggle").addEventListener("click", () => {
    const screenWhite = document.querySelector(".screenWhite");
    const toggle = document.getElementById("toggle");
    const rightNav = document.querySelector(".rightNav");

    if (toggle.checked) {
        rightNav.classList.remove("right-[-100%]");
        rightNav.classList.add("right-0");
        screenWhite.classList.remove("hidden");
    } else {
        rightNav.classList.add("right-[-100%]");
        rightNav.classList.remove("right-0");
        screenWhite.classList.add("hidden");
    }
});

typeWriter();