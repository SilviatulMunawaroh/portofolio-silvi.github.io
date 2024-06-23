let words = document.querySelectorAll('.word'); 
words.forEach((word) => { 
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => { 
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0; 
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1"; 

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.classList.add("out");
        }, i * 80);
    });

    Array.from(nextWord.children).forEach((letter, i) => {
        letter.classList.add("behind");
        setTimeout(() => {
            letter.classList.remove("behind");
            letter.classList.add("in");
        }, 340 + i * 80);
    });

    nextWord.style.opacity = "1";

    setTimeout(() => {
        Array.from(currentWord.children).forEach((letter) => {
            letter.classList.remove("out");
        });
        currentWord.style.opacity = "0";
        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    }, currentWord.children.length * 80 + 500);
};

changeText();
setInterval(changeText, 3000);
