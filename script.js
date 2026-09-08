const answers = [
  "Not today",
  "Nuh uh",
  "Jangan gitu bro",
  "Some other time",
  "Revisit next year",
  "Skill issue",
  "Nope",
  "Absolutely not",
  "Touch grass first",
  "The council says no",
  "After you become an astronaut",
  "Yeah no, that's a bad idea",
  "Junior Disciple, this is not the way of the Dao",
  "Hark! The answer is no",
  "别生自己的气，先休息一下 (Don't be mad at yourself, take a break)",
  "天命曰：不必自责 (The heavens say: no need for self-blame)",
  "Nah son </3",
  "Ur mad lol",
  "Chat says no",
  "Maaf kak engga dlu",
  "Queen never cry",
  "Jir kok gk rispek gtu",
  "Post that Q on Linkedin",
  "Mikir kids",
  "Mikis kird",
  "Next time ak bom rumah km",
  "Udh dibilangin jangan, beliau ini keras kepala sekali",
  "Jangan terlalu diiniin apasih namanya",
  "Dih website sok ingres",
  "There is nothing either good or bad, but thinking makes it so.",
  "To be, or not to be: that is the question: Whether 'tis nobler in the mind to suffer. The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles, And by opposing end them?"
];

const backgrounds = [
  "https://media.zenfs.com/en/know_your_meme_909/fdb21e0647ec3fc0193d1f7a8a44a720.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfIqCL9kPXGLLCz91ljxVwiPGtr7W_ongqSvu5r0VAJOqJj0k07hy2Sp_&s=10",
  "https://i.pinimg.com/1200x/d2/95/53/d2955307b7187801375677875b5f5a38.jpg",
  "https://i.pinimg.com/736x/a2/53/c9/a253c9ee67cb77d3071dec3825ba7716.jpg",
  "https://i.pinimg.com/1200x/e1/1e/45/e11e45b234f69716a07c22f25f28d86a.jpg"
];

const button = document.querySelector("#draw-button");
const answer = document.querySelector("#answer");
let backgroundIndex = 0;

function typeAnswer(text) {
  answer.textContent = "";
  let letterIndex = 0;

  const typeNextLetter = () => {
    answer.textContent += text[letterIndex];
    letterIndex += 1;

    if (letterIndex < text.length) {
      window.setTimeout(typeNextLetter, 65);
      return;
    }

    answer.classList.add("reveal");
    button.disabled = false;
    button.classList.remove("loading");
  };

  typeNextLetter();
}

button.addEventListener("click", () => {
  button.disabled = true;
  button.classList.add("loading");
  answer.classList.remove("reveal");
  document.body.style.setProperty("--background-image", `url("${backgrounds[backgroundIndex]}")`);
  backgroundIndex = (backgroundIndex + 1) % backgrounds.length;

  window.setTimeout(() => {
    const nextAnswer = answers[Math.floor(Math.random() * answers.length)];
    typeAnswer(nextAnswer);
  }, 850);
});