let adviceNumber = document.querySelector("#advice-number");
let adviceContent = document.querySelector("#advice-content");
let generateAdvice = document.querySelector("#generate-advice");

async function getAdvice() {
  let data = await fetch("https://api.adviceslip.com/advice").then((res) =>
    res.json()
  );

  const { id, advice } = data.slip;
  adviceNumber.innerHTML = id;
  adviceContent.innerHTML = `${advice}`;
}

getAdvice();

generateAdvice.addEventListener("click", getAdvice);
