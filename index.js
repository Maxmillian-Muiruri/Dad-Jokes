const btnEl = document.getElementById("btn");
const jokeE1 = document.getElementById("joke");

const apiKey = "XyzGvuvsJxXuZISY/nYGkw==TumeRjgaMm2D04kf";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeE1.innerText = "updating...";
    btnEl.disable = true;
    btnEl.innerText = "loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disable = false;
    btnEl.innerText = "TELL ME A JOKE...";

    jokeE1.innerText = data[0].joke;

    return;
  } catch (e) {
    jokeE1.innerText = "An error happened, try again later";
    btnEl.disable = false;
    btnEl.innerText = "TELL ME A JOKE...";
    console.log(e);

    throw new Error(e);
  }
}

btnEl.addEventListener("click", getJoke);
