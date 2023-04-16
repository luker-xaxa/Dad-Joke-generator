const btnEl = document.getElementById("btn");
const jokeEL = document.getElementById("joke");

const apiKey = "2Km/GwMVMjfGeNBeLs+gBg==SGB4fifWRi8ajOPv";

const options = {
    method: "GET",
    headers:{
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    btnEl.ariaDisabled = true;
    btnEl.innerText = "Loading";
    jokeEL.innerText = "Updating...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.ariaDisabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEL.innerText = data[0].joke;
}

btnEl.addEventListener("click",getJoke);